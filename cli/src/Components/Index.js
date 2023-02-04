import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch,faEdit,faTrash} from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Index(){

    const [studlist,setStudlist] = useState([]);

    useEffect(()=>{
        load_studlist();
    },[]);

    const load_studlist = () => {
        axios.get('http://localhost:3004/Studlist')
        .then(function(res){
            setStudlist(res.data);
        })
        .catch(function(error){
            alert(error);
        })
    }

    const data_del = (a)=> {
       var datastring = {id:a};
       var config = {headers : {"enctype":"multipart/form-data"}};

         axios.post('http://localhost:3004/Delete',datastring,config)
              .then(function(res){
                if(res.data.status === 'success'){
                    alert('Deleted');
                    window.location.reload();
                }
                else if(res.data.status === 'error'){
                    alert('Not Deleted');
                    window.location.reload();
                }
              })
              .catch(function(error){
                    alert(error);
                    window.location.reload();
              }) 
    }

    return(
        <>
        <div className="container">
            <div className="row mt-3">
                <div className="col-lg-12">
                    <p className="text-center font-bold">Student management system</p>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-3">
                    <div className="input_section">
                        <input type="text" name="data_search" id="data_search" placeholder="Search"/>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                </div>
                <div className="col-lg-8">&nbsp;</div>
                <div className="col-lg-1">
                    <div className="input_button">
                        <Link to="/Add">
                        <button type="button" name="data_send" id="data_send">Add</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="table-responsive">
                    <table className='table table-bordered'>
                        <thead>
                        <tr>
                            <th className="table_style_8">ID</th>
                            <th className="table_style_8">First Name</th>
                            <th className="table_style_8">Last Name</th>
                            <th className="table_style_8">Location</th>
                            <th className="table_style_8">Email</th>
                            <th className="table_style_8">DOB</th>
                            <th className="table_style_8">Education</th>
                            <th className="table_style_8">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            studlist.map((value,index)=>(
                                <tr key={index} align="center">
                                    <td>{value.id}</td>
                                    <td>{value.firstname}</td>
                                    <td>{value.lastname}</td>
                                    <td>{value.location}</td>
                                    <td>{value.email}</td>
                                    <td>{value.dob}</td>
                                    <td>{value.education}</td>
                                    <td>
                                        <Link to={'/Edit/'+value.id} className="data_edit">
                                        <button type="button" className="btn btn-success">
                                        <FontAwesomeIcon icon={faEdit}/>&nbsp;Edit
                                        </button>
                                        </Link>
                                        <button type="button" id="data_del" name="data_del" onClick={()=>data_del(value.id)} className="btn btn-danger">
                                        <FontAwesomeIcon icon={faTrash}/>&nbsp;Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        </>
    );
}
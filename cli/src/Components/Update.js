import {Link, useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {useState,useEffect} from 'react';
import axios from 'axios';

export default function Update(){

    const {id} = useParams();
    const [firstname,setFirstname] = useState('');
    const [lastname,setLastname] = useState('');
    const [location,setLocation] = useState('');
    const [email,setEmail] = useState('');
    const [dob,setDob] = useState('');
    const [education,setEducation] = useState('');
    const [about,setAbout] = useState('');

    useEffect(()=>{
        console.warn(id);

        fetch("http://localhost:3004/Editlist/"+id)
        .then((response) => response.json())
        .then((response)=>{
            setFirstname(response[0].firstname);
            setLastname(response[0].lastname);
            setLocation(response[0].location);
            setEmail(response[0].email);
            setDob(response[0].dob);
            setEducation(response[0].education);
            setAbout(response[0].about); 
        })

            
    },[]);

    

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers : {"enctype":"multipart/form-data"}};

        await axios.post('http://localhost:3004/Update',datastring,config)
              .then(function(res){
                if(res.data.status === 'success'){
                    alert('Updated');
                    window.location.href="/";
                }
                else if(res.data.status === 'error'){
                    alert('Not Updated');
                    window.location.href="/";
                }
              })
              .catch(function(error){
                    alert(error);
                    window.location.href="/";
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
                <div className="col-lg-2">
                    <div className="data_link">
                    <Link to="/">
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </Link>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-3">
                    <div className="data_label">
                    <label>Edit Student Details</label>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
        <form onSubmit={handlesubmit}>
            <div className="row mt-3">
                <div className="col-lg-2">
                    <div className="input_section1"><label>First Name</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="hidden" name="id" id="id" value={id}/>
                        <input type="text" name="firstname" id="firstname" value={firstname} onChange={(e)=> setFirstname(e.target.value)}/>
                    </div>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <div className="input_section1"><label>Last Name</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="text" name="lastname" id="lastname" value={lastname} onChange={(e)=> setLastname(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-2">
                    <div className="input_section1"><label>Email</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="email" name="email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                    </div>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <div className="input_section1"><label>DOB</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="date" name="dob" id="dob" value={dob}  onChange={(e)=> setDob(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-2">
                    <div className="input_section1"><label>Education</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="text" name="education" id="education" value={education}  onChange={(e)=> setEducation(e.target.value)}/>
                    </div>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <div className="input_section1"><label>Location</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="text" name="location" id="location" value={location}  onChange={(e)=> setLocation(e.target.value)}/>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-2">
                    <div className="input_section1"><label>About</label></div>
                </div>
                <div className="col-lg-10">
                    <div className="input_section1">
                    <textarea name="about" id="about" value={about} onChange={(e)=> setAbout(e.target.value)}></textarea>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-1">
                <div className="input_button">
                    <button type="submit" name="data_submit" id="data_submit">Update</button>
                </div>
                </div>
            </div>
            </form>
        </div>
        </>
    );
}
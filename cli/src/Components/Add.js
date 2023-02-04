import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';




export default function Add(){

    const handlesubmit = async(event) => {
        event.preventDefault();
        var datastring = new FormData(event.target);
        var config = {headers : {"enctype":"multipart/form-data"}};

        await axios.post('http://localhost:3004/Add',datastring,config)
              .then(function(res){
                if(res.data.status === 'success'){
                    alert('Inserted');
                    window.location.reload();
                }
                else if(res.data.status === 'error'){
                    alert('Not Inserted');
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
                    <label>Add Student Details</label>
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
                        <input type="text" name="firstname" id="firstname"/>
                    </div>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <div className="input_section1"><label>Last Name</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="text" name="lastname" id="lastname"/>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-2">
                    <div className="input_section1"><label>Email</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="email" name="email" id="email"/>
                    </div>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <div className="input_section1"><label>DOB</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="date" name="dob" id="dob"/>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-2">
                    <div className="input_section1"><label>Education</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="text" name="education" id="education"/>
                    </div>
                </div>
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-2">
                    <div className="input_section1"><label>Location</label></div>
                </div>
                <div className="col-lg-3">
                    <div className="input_section1">
                        <input type="text" name="location" id="location"/>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-2">
                    <div className="input_section1"><label>About</label></div>
                </div>
                <div className="col-lg-10">
                    <div className="input_section1">
                    <textarea name="about" id="about"></textarea>
                    </div>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-lg-2">&nbsp;</div>
                <div className="col-lg-1">
                <div className="input_button">
                    <button type="submit" name="data_submit" id="data_submit">Submit</button>
                </div>
                </div>
            </div>
            </form>
        </div>
        </>
    );
}
import {Link} from 'react-router-dom';
import { useEffect,useState} from 'react';
import axios from 'axios';


const baseUrl="http://127.0.0.1:8000/api/teacher/";
function TeacherRegister(){
    const [teacherData,setteacherData]=useState({
        'full_name' : "",
        'email' : "",
        'qualification' : "",
        'password' : "",
        'mobile_no' : "",
        'skills' : "",
        'status' : ""
    });
    // Change Element Value
    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }
    // end
    // submit form
    const submitForm=()=>{
        const teacherFormData=new FormData();
        teacherFormData.append("full_name",teacherData.full_name)
        teacherFormData.append("email",teacherData.email)
        teacherFormData.append("password",teacherData.password)
        teacherFormData.append("qualification",teacherData.qualification)
        teacherFormData.append("mobile_no",teacherData.mobile_no)
        teacherFormData.append("skills",teacherData.skills)

    try{
        axios.post(baseUrl,teacherFormData).then((response)=>{
            setteacherData({
                'full_name' : "",
                'email' : "",
                'qualification' : "",
                'password' : "",
                'mobile_no' : "",
                'skills' : "",
                'status' : 'success'
            })
        });
    }catch(error){
        console.log(error)
        setteacherData({'status':'error'})
    }
    };

    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus=='true'){
        window.location.href='/techer-dashboard';
    }

    useEffect(()=>{
        document.title='Teacher Register';
    })
    return(
        <section className="vh-100">

        <div className="container h-100">

            <div className="row d-flex justify-content-center align-items-center h-100">

            <div className="col-lg-12 col-xl-11">
                <div className="card text-black">

                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Teacher Register</p>

                        <form className="mx-1 mx-md-4">

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input value={teacherData.full_name} onChange={handleChange} name='full_name' type="text" className="form-control" />
                            <label className="form-label" for="form3Example1c">Full Name</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input value={teacherData.email} onChange={handleChange} name='email' type="email" className="form-control" />
                            <label className="form-label" for="form3Example3c">Email</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input value={teacherData.password} onChange={handleChange} name='password' type="password" className="form-control" />
                            <label className="form-label" for="form3Example4c">Password</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input value={teacherData.qualification} onChange={handleChange} name='qualification' type="text" className="form-control" />
                            <label className="form-label" for="form3Example1c">Qualification</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input value={teacherData.mobile_no} onChange={handleChange} name='mobile_no' type="text" className="form-control" />
                            <label className="form-label" for="form3Example1c">Mobile Number</label>
                            </div>
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <textarea value={teacherData.skills} onChange={handleChange} name='skills' type="text"className="form-control" />
                            <label className="form-label" for="form3Example4c">Skills</label>
                            <div id='emailHelp' className='form-text'>
                                PHP, Python, Javascript, etc
                            </div>
                            </div>
                        </div>


                        <div class="text-center text-lg-start mt-4 pt-2">
                            <button onClick={submitForm} type="submit" class="btn btn-primary btn-lg">Register</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Already Registered? <Link to='/teacher-login'
                                class="link-danger">Login Here</Link></p>
                        </div>

                        </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2 ">

                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                        className="img-fluid" alt="Sample image"/>
                        
                    </div>
                    {teacherData.status=='success' && <p class='text-success'>Thanks for your registration</p>}
                     {teacherData.status=='error' && <p class='text-danger'>Something Happened</p>}  
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>

    );
}

export default TeacherRegister
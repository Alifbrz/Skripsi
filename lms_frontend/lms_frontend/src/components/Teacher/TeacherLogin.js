import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const baseUrl = 'http:127.0.0.1:8000/api';
function TeacherLogin(){
    const [teacherLoginData, setTeacherLoginData]=useState({
        email:'',
        password:''
    });
    
    const handleChange=(event)=>{
        setTeacherLoginData({
            ...teacherLoginData,
            [event.target.name]:event.target.value
        });
    }

    const submitForm=()=>{
        const teacherFormData = new FormData;
        teacherFormData.append('email', teacherLoginData.email)
        teacherFormData.append('password', teacherLoginData.password)

         try{
             axios.post(baseUrl+'/teacher-login',teacherFormData)
             .then((res)=>{
                 if(res.data.bool=true){
                    localStorage.setItem('teacherLoginStatus', true)
                    window.location.href='/teacher-dashbord'
                 }
             });
         }catch(error){
             console.log(error);
         }
    }

    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
    if(teacherLoginStatus=='true'){
        window.location.href='/techer-dashboard'
    }

    useEffect(()=>{
        document.title = 'Teacher Login'
    });

    return(
        <section className="vh-100">
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black">
                <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Teacher Log In</p>

                        <form className="mx-1 mx-md-4">

                    
                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="email" value={teacherLoginData.email} name='email' onChange={handleChange} className="form-control" />
                            <label className="form-label" for="form3Example3c">Email Address</label>
                            </div>
                        </div>


                        <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                            <input type="password" value={teacherLoginData.password}  name='password' onChange={handleChange} className="form-control" />
                            <label className="form-label" for="form3Example4c">Password</label>
                            </div>
                        </div>

                        {/*checkbox*/}
                        <div className="d-flex justify-content-between align-items-center">

                        <div className="form-check mb-0">
                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3" />
                            <label className="form-check-label" for="form2Example3">
                                Remember me
                            </label>
                            </div>
                            <a href="#!" className="text-body">Forgot password?</a>
                        </div>

                        <div className="text-center text-lg-start mt-4 pt-2">
                        <button onClick={submitForm} type="submit" class="btn btn-primary btn-lg">Login</button>
                            <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <Link to='/teacher-register'
                                className="link-danger">Register</Link></p>
                        </div>


                        </form>

                    </div>
                    <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                            <img src="https:mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Sample image"/>

                    </div>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>




    );
}

export default TeacherLogin
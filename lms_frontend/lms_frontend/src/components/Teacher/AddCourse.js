import {Link} from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar';
import {useState,useEffect} from 'react'
import axios from 'axios';

const baseUrl = 'http:127.0.0.1:8000/api';

function AddCourse() {
    const [cats, setCats]=useState([])
    const[courseData, setCourseData]=useState({
        category:'',
        title:'',
        description:'',
        feature_img:'',
        techs:''

    });

    useEffect(()=>{
        try{
        axios.get(baseUrl+'/category').then((Response)=>{
            setCats(Response.data);
        });
    }catch(error){
        console.log(error)
    }
    },[]);
    
    const handleChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.value
        });

    }

    const handleFileChange=(event)=>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.value[0]
        });

    }
    
    const formSubmit=()=>{
        const _formData = new FormData();
        _formData.append('category', courseData.category)
        _formData.append('teacher', 1)
        _formData.append('title', courseData.courseData.title)
        _formData.append('description', courseData.description)
        _formData.append('feature_img', courseData.feature_img, courseData.feature_img.name)
        _formData.append('techs', courseData.techs)
        try{
            axios.post(baseUrl+'/course/', _formData,{
                headers:{
                    'Content-Type' : 'multipart/form-data'
                }
            }).then((Response)=>{
                console.log(Response.data);
            });
        }catch(error){
            console.log(error)
        }

    }
    
    return (
        <div className='container mt-4'>
          <div className='row'>
              <aside className='col-md-3'>
                  <TeacherSidebar />
              </aside>
  
              <section className='col-md-9'>
              <div className='card'>
                  <h5 className='card-header'>Add Course</h5>          
                  <div className='card-body'></div>      
                  <form>
                  <div className="form-group ms-1 mb-3">
                      <label for="title">Category</label>
                      <select name='category' className='form-control' onChange={handleChange}>
                        {cats.map((category,index)=>{return <option key={index} value={category.id}> {category.title} </option>})}
                      </select>
                 </div>
                  <div className="form-group ms-1 mb-3">
                      <label for="title">Title</label>
                      <input type="email" onChange={handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"/>
                  </div>
                  <div className="form-group ms-1 mb-3">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                  <div className="form-group ms-1 mb-3">
                      <label for="profilpic">Course image</label>
                      <input onChange={handleFileChange} type="file" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                  </div>
                  <div className="form-group">
                    <label for="exampleFormControlTextarea1">Technologies</label>
                    <textarea onChange={handleChange} className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Python, PHP, Javascript dll. "></textarea>
                </div>
                
                  <button type="submit" onClick={formSubmit} className="btn btn-primary m-1">Submit</button>
                  </form>
              </div>
              </section>
          </div>
  
        </div>
      )
  }
  
  export default AddCourse;
  
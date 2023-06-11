import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios";


const baseUrl = 'http://127.0.0.1:8000/api';
function PopularTeacher(){
    const [teacher,setTeacher]=useState(null);
    useEffect(()=>{
        axios.get(baseUrl+'/teacher/').then((Response)=>{
            setTeacher(Response.data);
        })
    },[]);

    console.log(teacher)
    

    return(
        <div className='container mt-3'>
        <h3 className='border-bottom pb-1 mb-4'>Popular Teacher </h3>

        <div className='row'>
            <div className='col-md-3 mb-4'>
                <div className="card">
                <Link to="/teacher-detail"><img src="pp.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                    <h5 className="card-title">Teacher Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <div className='title'>
                            <span>Rating: 4.5</span>
                        </div>
                    </div>
                    <Link to="/teacher-detail" className="btn btn-primary">Detail</Link>
                </div>
            </div>
            

            </div>

            <div className='col-md-3 mb-4'>
                <div className="card">
                <a href='#'><img src="pp.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Teacher Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <div className='title'>
                            <span>Rating: 4.5</span>
                        </div>
                    </div>
                    <a to="#" className="btn btn-primary">Detail</a>
                </div>
            </div>
            

            </div>

            <div className='col-md-3 mb-4'>
                <div className="card">
                <a href='#'><img src="pp.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Teacher Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <div className='title'>
                            <span>Rating: 4.5</span>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary">Detail</a>
                </div>
            </div>
            

            </div>

            <div className='col-md-3 mb-4'>
                <div className="card">
                <a href='#'><img src="pp.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Teacher Name</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <div className='title'>
                            <span>Rating: 4.5</span>
                        </div>
                    </div>
                    <a href="#" className="btn btn-primary">Detail</a>
                </div>
            </div>
            

            </div>

            

            

            </div>
            <nav aria-label="Page navigation example mt-5">
            <ul className="pagination justify-content-center">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                <li className="page-item"><a className="page-link" href="#">1</a></li>
                <li className="page-item"><a className="page-link" href="#">2</a></li>
                <li className="page-item"><a className="page-link" href="#">3</a></li>
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
            </ul>
            </nav>
            </div>
    )
}

export default PopularTeacher
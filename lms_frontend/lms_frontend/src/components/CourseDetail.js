import {useParams} from 'react-router-dom'
import {Link} from 'react-router-dom';


function CourseDetail() {
    let {course_id} = useParams();
    return (
      <div className='container mt-5'>
          <div className='row'>
              <div className='col-4'>
                <img src="/logo512.png" className="img-thumbnail" alt="..."/>
              </div>

              <div className='col-8'>
                  <h1> Course Tittle</h1>
                  <p>Course Description</p>
                  <p className='fw-bold'>Course By : <Link to='/teacher-detail'> Teacher 1</Link></p>
                  <p className='fw-bold'>Duration : 3 Hours 30 Minutes</p>
                  <p className='fw-bold'>Total Enrolled : 456 Student</p>
                  <p className='fw-bold'>Rating : 4.5/5</p>


              </div>
          </div>

        {/*start course video*/}
        

          <div className='card mt-4'>
            <div className="card-header">
                <h3>
                Course Videos
                </h3>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">An item 
                  <span className='float-end'> 
                    <span className='me-3'>
                      1:30 mins
                    </span>
                    <button className='btn btn-sm btn-danger float-end' data-bs-toggle="modal" data-bs-target="#videomodal1">
                    <i className='bi-youtube'>
                    </i>
                  </button>
                  </span>
                  {/* Modal begin */}
                  <div className="modal fade" id="videomodal1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-xl">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Video 1</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                          </button>
                        </div>
                        <div className="modal-body">
                        <div class="embed-responsive embed-responsive-16by9">
                          <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* modal end */}
                                    
                </li>

                <li className="list-group-item">An item 
                  <span className='float-end'> 
                    <span className='me-3'>
                      1:30 mins
                    </span>
                    <button className='btn btn-sm btn-danger float-end'>
                    <i className='bi-youtube'>
                    </i>
                  </button>
                  </span>
                  
                </li>

                <li className="list-group-item">An item 
                  <span className='float-end'> 
                    <span className='me-3'>
                      1:30 mins
                    </span>
                    <button className='btn btn-sm btn-danger float-end'>
                    <i className='bi-youtube'>
                    </i>
                  </button>
                  </span>
                  
                </li>

                <li className="list-group-item">An item 
                  <span className='float-end'> 
                    <span className='me-3'>
                      1:30 mins
                    </span>
                    <button className='btn btn-sm btn-danger float-end'>
                    <i className='bi-youtube'>
                    </i>
                  </button>
                  </span>
                  
                </li>

                <li className="list-group-item">An item 
                  <span className='float-end'> 
                    <span className='me-3'>
                      1:30 mins
                    </span>
                    <button className='btn btn-sm btn-danger float-end'>
                    <i className='bi-youtube'>
                    </i>
                  </button>
                  </span>
                  
                </li>
            </ul>
          </div>
        {/*start course video*/}

        {/*start related course*/}


          <h3 className='border-bottom pb-1 mb-4 mt-5'>Related Course <a href='#' className='float-end'>See All</a> </h3>
          <div className='row'>
            <div className='col-md-3'>
                <div className="card">
                <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/detail/1" className="btn btn-primary">Detail</Link>
                </div>
            </div>
            

            </div>

            <div className='col-md-3'>
                <div className="card">
                <a href="#"><img src="/logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a to="#" className="btn btn-primary">Detail</a>
                </div>
            </div>
            

            </div>
        </div>
                {/*End related course*/}


      </div>
    );
  }
  
  export default CourseDetail;


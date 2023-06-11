import { Link } from "react-router-dom"

function TeacherDetail(){
    return(
        <div className='container mt-5'>
          <div className='row'>
              <div className='col-4'>
                <img src="/logo512.png" className="img-thumbnail" alt="..."/>
              </div>

              <div className='col-8'>
                  <h1> Teacher Name</h1>
                  <p>Teacher Description</p>
                  <p className='fw-bold'>Skill : <Link to='/category/php'> PHP</Link> <Link to='/category/php'> Python</Link> <Link to='/category/php'> Javascript</Link></p>
                  <p className='fw-bold'>Recent Course : <Link to='/teacher-detail'>Python </Link></p>
                  <p className='fw-bold'>Rating : 4.5/5</p>


              </div>
          </div>

        {/*start course video*/}

          <div className='card mt-4'>
            <div className="card-header">
                <h3>
                Course List
                </h3>
                <div className="list-group list-group-flush">
                    <Link to='/detail/1' className="list-group-item list-group-item-action"> Course 1 </Link>
                    <Link to='/detail/1' className="list-group-item list-group-item-action"> Course 2 </Link>
                    <Link to='/detail/1' className="list-group-item list-group-item-action"> Course 3 </Link>
                    <Link to='/detail/1' className="list-group-item list-group-item-action"> Course 4 </Link>
                    <Link to='/detail/1' className="list-group-item list-group-item-action"> Course 5 </Link>

                </div>
            </div>
           
          </div>
        {/*start course video*/}

      </div>
    )


}

export default TeacherDetail
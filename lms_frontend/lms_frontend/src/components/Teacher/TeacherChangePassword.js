import {Link} from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar';


function TeacherChangePassword() {
    return (
      <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <TeacherSidebar />
            </aside>

            <section className='col-md-9'>
            <div className='card'>
                <h5 className='card-header'>Change Password</h5>          
                <div className='card-body'></div>      
                <form>
                <div className="form-group ms-1">
                    <label for="exampleInputEmail1">Previous Password</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
                <div className="form-group ms-1">
                    <label for="exampleInputEmail1">New Password</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                </div>
              
                <button type="submit" className="btn btn-primary m-1">Submit</button>
                </form>
            </div>
            </section>
        </div>

      </div>
    )
  }
  
  export default TeacherChangePassword;
  
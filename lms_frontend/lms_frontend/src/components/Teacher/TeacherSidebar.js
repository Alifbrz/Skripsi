import { Link } from "react-router-dom";

function TeacherSidebar(){
    return(
        <div className='card'>
                <Link className="text-decoration-none text-dark" to="/user-dashboard"><h5 className='card-header '>Dashboard</h5></Link>

                <div className='list-group list-group-flush'>
                    <Link to='/teacher-course' className='list-group-item list-group-item-action'>My Courses</Link>
                    <Link to='/add-course' className='list-group-item list-group-item-action'>Add Course</Link>
                    <Link to='/my-student' className='list-group-item list-group-item-action'>My Student</Link>
                    <Link to='/teacher-profile-setting' className='list-group-item list-group-item-action'>Profile Setting</Link>
                    <Link to='/teacher-change-password' className='list-group-item list-group-item-action'>Change Password</Link>
                    <Link to='/teacher-login' className='list-group-item list-group-item-action text-primary'>Logout</Link>
                </div>

            </div>
    )
    
    
}

export default TeacherSidebar;
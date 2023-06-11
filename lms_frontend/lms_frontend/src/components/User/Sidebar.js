import { Link } from "react-router-dom";

function Sidebar(){
    return(
        <div className='card'>
                <Link className="text-decoration-none text-dark" to="/user-dashboard"><h5 className='card-header '>Dashboard</h5></Link>

                <div className='list-group list-group-flush'>
                    <Link to='/my-course' className='list-group-item list-group-item-action'>My Courses</Link>
                    <Link to='/favourite-course' className='list-group-item list-group-item-action'>Favourite Courses</Link>
                    <Link to='/recomended-course' className='list-group-item list-group-item-action'>Recomended Courses</Link>
                    <Link to='/profile-setting' className='list-group-item list-group-item-action'>Profile Setting</Link>
                    <Link to='/change-password' className='list-group-item list-group-item-action'>Change Password</Link>
                    <Link to='/user-login' className='list-group-item list-group-item-action text-primary'>Logout</Link>
                </div>

            </div>
    )
    
    
}

export default Sidebar;
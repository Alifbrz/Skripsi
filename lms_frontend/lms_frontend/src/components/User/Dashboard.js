import {Link} from 'react-router-dom'
import Sidebar from './Sidebar';
import MyCourse from './MyCourse';


function Dashboard() {
    return (
      <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <Sidebar />
            </aside>

            <section className='col-md-9'>
            </section>
        </div>

      </div>
    )
  }
  
  export default Dashboard;
  
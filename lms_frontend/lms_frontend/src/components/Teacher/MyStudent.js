import {Link} from 'react-router-dom'
import TeacherSidebar from './TeacherSidebar';


function MyStudent() {
    return (
        <div className='container mt-4'>
        <div className='row'>
            <aside className='col-md-3'>
                <TeacherSidebar />
            </aside>

            <section className='col-md-9'>
            <div className='card'>
                    <h5 className='card-header'>
                        Recomended Course
                    </h5>
                    <div className='card-body'>
                        <table className='table table-bordered'>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Enroled Course</th>
                                    <th>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <td><Link to='#'>Farhan Hafizh</Link></td>
                                <td><Link to='#'>PHP</Link></td>
                                <td>
                                    
                                    <button className='btn btn-primary btn-sm active'>
                                        Delete
                                    </button>
                                    
                                </td>

                            </tbody>
                        </table>
                    </div>
        </div>
            </section>
        </div>

    </div>

    );
  }
  
  export default MyStudent;
  
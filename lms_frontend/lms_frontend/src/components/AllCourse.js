import { Link } from "react-router-dom"

function AllCourse(){

    return(
        <div className='container mt-3'>
        <h3 className='border-bottom pb-1 mb-4'>All Course </h3>

        <div className='row'>
            <div className='col-md-3 mb-4'>
                <div className="card">
                <Link to="/detail/1"><img src="python.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/detail/1" className="btn btn-primary">Detail</Link>
                </div>
            </div>
            

            </div>

            <div className='col-md-3 mb-4'>
                <div className="card">
                <a href='#'><img src="python.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a to="#" className="btn btn-primary">Detail</a>
                </div>
            </div>
            

            </div>

            <div className='col-md-3 mb-4'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Detail</a>
                </div>
            </div>
            

            </div>

            <div className='col-md-3 mb-4'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Detail</a>
                </div>
            </div>
            

            </div>

            <div className='col-md-3 mb-4'>
                <div className="card">
                <Link to="/detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <Link to="/detail/1" className="btn btn-primary">Detail</Link>
                </div>
            </div>
            

            </div>

            <div className='col-md-3 mb-4'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a to="#" className="btn btn-primary">Detail</a>
                </div>
            </div>
            

            </div>

            <div className='col-md-3 mb-4'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Detail</a>
                </div>
            </div>
            

            </div>

            <div className='col-md-3 mb-4'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
export default AllCourse
import {Link} from 'react-router-dom';
import AllCourse from './AllCourse';
import { useEffect } from 'react';

function Home() {
    useEffect(()=>{
        document.title = 'LMS | Home Page'
    })
  return (
    
    <div className='container mt-3'>
        {/*start latest course*/}
        <h3 className='border-bottom pb-1 mb-4'>Latest Course <Link to='/all-course' className='float-end'>See All</Link> </h3>
        <div className='row'>
            <div className='col-md-3'>
                <div className="card">
                <Link to="/detail/1"><img src="logo512.png" className="card-img-top" alt="..."/></Link>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    <Link to="/detail/1" className="btn btn-primary">Detail</Link>
                </div>
            </div>
            

            </div>

            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    <Link to="/detail/1" className="btn btn-primary">Detail</Link>
                </div>
            </div>
            

            </div>

            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    <Link to="/detail/1" className="btn btn-primary">Detail</Link>
                </div>
            </div>
            

            </div>

            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                    <Link to="/detail/1" className="btn btn-primary">Detail</Link>
                </div>
            </div>
            

            </div>

            </div>
        {/*end course*/}


        {/*start Popular course*/}

        <h3 className='border-bottom pb-1 mb-4 mt-5'>Popular Course <Link to='popular-course' className='float-end'>See All</Link> </h3>
        <div className='row'>
            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>
                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <div className='title'>
                            <span>Rating: 4.5</span>
                            <span className='float-end'> Views: 1411</span>
                        </div>
                    </div>
                </div>
            </div>
            

            </div>

            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <div className='title'>
                            <span>Rating: 4.5</span>
                            <span className='float-end'> Views: 1411</span>
                        </div>
                    </div>
                </div>
            </div>
            

            </div>

            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <div className='title'>
                            <span>Rating: 4.5</span>
                            <span className='float-end'> Views: 1411</span>
                        </div>
                    </div>
                </div>
            </div>
            

            </div>

            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>                <div className="card-body">
                    <h5 className="card-title">Course title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <div>
                        <div className='title'>
                            <span>Rating: 4.5</span>
                            <span className='float-end'> Views: 1411</span>
                        </div>
                    </div>
                </div>
            </div>
            

            </div>

            

            

            </div>
        {/*end Popular course*/}

        {/*start Featured Teacher*/}

        <h3 className='border-bottom pb-1 mb-4 mt-5 '>Feature Teacher <Link to='popular-teacher' className='float-end'>See All</Link> </h3>
        <div className='row'>
            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>                <div className="card-body">
                    <a href='#'><h5 className="card-title">Teacher Name</h5></a>
                </div>
            </div>
            

            </div>

            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>                <div className="card-body">
                    <a href='#'><h5 className="card-title">Teacher Name</h5></a>
                </div>
            </div>
            

            </div>

            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>                <div className="card-body">
                    <a href='#'><h5 className="card-title">Teacher Name</h5></a>
                </div>
            </div>
            

            </div>

            <div className='col-md-3'>
                <div className="card">
                <a href='#'><img src="logo512.png" className="card-img-top" alt="..."/></a>                <div className="card-body">
                    <a href='#'><h5 className="card-title">Teacher Name</h5></a>
                </div>
            </div>
            

            </div>

            

            

            </div>
        {/*end featured teacher*/}

        {/*start Student Testimonial*/}

        <h3 className='border-bottom pb-1 mb-4 mt-5 text-center'>Student Testimonial </h3>
        <div id="carouselExampleIndicators" className="carousel slide bg-dark text-white py-5">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
                </figure>
            </div>
            <div className="carousel-item">
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
                </figure>
            </div>
            <div className="carousel-item">
            <figure class="text-center">
                <blockquote class="blockquote">
                    <p>A well-known quote, contained in a blockquote element.</p>
                </blockquote>
                <figcaption class="blockquote-footer">
                    Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
                </figure>
            </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
            {/*Student testimonial*/}

    </div>

    
  );
}

export default Home;

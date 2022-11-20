import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import Middle from '../upper-componets/middle';

export default function slider() {
    return (
        <div className='container-fluid slider'>
            <Carousel id="sampleSlide" slide={false} indicators ={false} >
                <Carousel.Item>

                    <img className="d-block w-100"
                        src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h11-rev-img-02.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption className='d-flex justify-content-center'>

                        <div className="div">

                            <img className='sign-img animated slideInDown' src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h11-rev-img-04.png" alt="sign-img" />
                            <h3 className='title animated fadeInUp'>Halsten Solutions</h3>
                            <p className='para-upper animated fadeInUp '>
                                fugiat dolorum, quidem consequatur corrupti sunt ipsam!
                            </p>

                            <button className='btn btn-outline-light btn-sm'> view more</button>
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>


                <Carousel.Item>

                    <img className="d-block w-100"
                        src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h11-rev-img-02.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <img className='sign-img animated slideInDown' src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h11-rev-img-04.png" alt="sign-img" />
                        <h3 className='title animated fadeInUp'>Halsten Solutions</h3>
                        <p className='para-upper animated fadeInUp'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudia laudantium blanditiis quas!  fugiat dolorum, quidem consequatur corrupti sunt ipsam!
                        </p>

                        <button className='btn btn-outline-light btn-lg'> view more</button>
                    </Carousel.Caption>
                </Carousel.Item>




                <Carousel.Item>

                    <img className="d-block w-100"
                        src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h11-rev-img-02.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <img className='sign-img animated slideInDown' src="https://halstein.qodeinteractive.com/wp-content/uploads/2021/10/h11-rev-img-04.png" alt="sign-img" />
                        <h3 className='title animated fadeInUp'>Halsten Solutions</h3>
                        <p className='para-upper animated fadeInUp'>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudia laudantium blanditiis quas!  fugiat dolorum, quidem consequatur corrupti sunt ipsam!
                        </p>

                        <button className='btn btn-outline-light btn-lg'> view more</button>
                    </Carousel.Caption>
                </Carousel.Item>



            </Carousel></div>


    
    )
}

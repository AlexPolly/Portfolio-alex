import React from 'react'
import "./Project.css";
import food from "../Img/food.png"
import lamasia from "../Img/lamasia.png"
import lamborghini from "../Img/lamborghini.png"
import parallax from "../Img/parallax.png"
import weather from "../Img/weather.png"
import travel from "../Img/travel.png"





function Project() {
    return (
        <>
            <div id='project' className="project">
                <div className="phead">
                    <h5 style={{color: 'grey' }}>My </h5> &nbsp;
                    <h2 >Projects</h2>
                </div>
                <div className="pbody">
                    <div className="pcard">
                        <div className="card " >
                            <img src={food} class="card-img-top w-100 " alt="..." />
                            <div className="card-body ">
                                <h5 class="card-title ">Food Recipe App</h5>
                                <div className='cicons mt-3'>
                                <i style={{color:'red'}} className="fa-brands fa-html5 fa-2xl me-3"></i>
                                <i style={{color:'orange'}} className="fa-brands fa-css3-alt fa-2xl me-3"></i>
                                <i style={{color:'blue'}} className="fa-brands fa-square-js fa-2xl me-3"></i>
                                <i style={{color:'purple'}} className="fa-brands fa-bootstrap fa-2xl me-3"></i>
                                <i style={{color:'green'}} className="fa-brands fa-react fa-2xl"></i>
                                </div>
                                <a href="https://sparkly-strudel-a9d1a1.netlify.app" className="btn mt-4 btn-light">View <i  className="fa-solid fa-angles-right fa-lg"></i></a>
                            </div>
                        </div>

                        <div className="card " >
                            <img src={parallax} class="card-img-top w-100 " alt="..." />
                            <div className="card-body ">
                                <h5 class="card-title "> Website with Parallax </h5>
                                <div className='cicons mt-3'>
                                <i style={{color:'red'}} className="fa-brands fa-html5 fa-2xl me-3"></i>
                                <i style={{color:'orange'}} className="fa-brands fa-css3-alt fa-2xl me-3"></i>
                                <i style={{color:'blue'}} className="fa-brands fa-square-js fa-2xl me-3"></i>
                                <i style={{color:'purple'}} className="fa-brands fa-bootstrap fa-2xl me-3"></i>
                                </div>
                                <a href="https://venice-alex.netlify.app" className="btn mt-4 btn-light">View <i  className="fa-solid fa-angles-right fa-lg"></i></a>
                            </div>
                        </div>

                        <div className="card " >
                            <img src={travel} class="card-img-top w-100 " alt="..." />
                            <div className="card-body ">
                                <h5 class="card-title ">Travel Website</h5>
                                <div className='cicons mt-3'>
                                <i style={{color:'red'}} className="fa-brands fa-html5 fa-2xl me-3"></i>
                                <i style={{color:'orange'}} className="fa-brands fa-css3-alt fa-2xl me-3"></i>
                                <i style={{color:'blue'}} className="fa-brands fa-square-js fa-2xl me-3"></i>
                                <i style={{color:'purple'}} className="fa-brands fa-bootstrap fa-2xl me-3"></i>
                                </div>
                                <a href="https://travel-alex.netlify.app" className="btn mt-4 btn-light">View <i  className="fa-solid fa-angles-right fa-lg"></i></a>
                            </div>
                        </div>

                          <div className="card " >
                            <img src={weather} class="card-img-top w-100 " alt="..." />
                            <div className="card-body ">
                                <h5 class="card-title "> Weather App</h5>
                                <div className='cicons mt-3'>
                                <i style={{color:'red'}} className="fa-brands fa-html5 fa-2xl me-3"></i>
                                <i style={{color:'orange'}} className="fa-brands fa-css3-alt fa-2xl me-3"></i>
                                <i style={{color:'blue'}} className="fa-brands fa-square-js fa-2xl me-3"></i>
                                <i style={{color:'purple'}} className="fa-brands fa-bootstrap fa-2xl me-3"></i>
                                <i style={{color:'green'}} className="fa-brands fa-react fa-2xl"></i>
                                </div>
                                <a href="https://weather-data-alex.netlify.app" className="btn mt-4 btn-light">View <i  className="fa-solid fa-angles-right fa-lg"></i></a>
                            </div>
                        </div>

                        <div className="card " >
                            <img src={lamborghini} class="card-img-top w-100 " alt="..." />
                            <div className="card-body ">
                                <h5 class="card-title ">Lamborghini Clone Website</h5>
                                <div className='cicons mt-3'>
                                <i style={{color:'red'}} className="fa-brands fa-html5 fa-2xl me-3"></i>
                                <i style={{color:'orange'}} className="fa-brands fa-css3-alt fa-2xl me-3"></i>
                                <i style={{color:'blue'}} className="fa-brands fa-square-js fa-2xl me-3"></i>
                                <i style={{color:'purple'}} className="fa-brands fa-bootstrap fa-2xl me-3"></i>
                                </div>
                                <a href="https://lamborgini-alex.netlify.app" className="btn mt-4 btn-light">View <i  className="fa-solid fa-angles-right fa-lg"></i></a>
                            </div>
                        </div>

                        <div className="card " >
                            <img src={lamasia} class="card-img-top w-100 " alt="..." />
                            <div className="card-body ">
                                <h5 class="card-title ">FC Barcelona Clone Website</h5>
                                <div className='cicons mt-3'>
                                <i style={{color:'red'}} className="fa-brands fa-html5 fa-2xl me-3"></i>
                                <i style={{color:'orange'}} className="fa-brands fa-css3-alt fa-2xl me-3"></i>
                                <i style={{color:'blue'}} className="fa-brands fa-square-js fa-2xl me-3"></i>
                                <i style={{color:'purple'}} className="fa-brands fa-bootstrap fa-2xl me-3"></i>
                                </div>
                                <a href="https://la-masia-alex.netlify.app" className="btn mt-4 btn-light">View <i  className="fa-solid fa-angles-right fa-lg"></i></a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Project
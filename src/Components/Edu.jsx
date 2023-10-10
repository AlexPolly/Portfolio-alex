import React from 'react';
import "./Edu.css"


function Edu() {
  return (
    <>
    <div id='education' className="edu">
        <div className="ehead">
            <h5 style={{color:'grey'}}>My </h5> &nbsp;
             <h2 >Education</h2>
            </div>
            <div className='ebody'>
                <div className="e1">
                <div className="e1b">
                    <div className='yr'>2018</div>
                    <p className='etxt'>Central Board of Secondary Education <span>Grade: 69%</span></p>
                    <p className='es'>( Co-Operative Public School , Padukkad , Thrissur )</p>
                </div>
                </div>
                <div className="e1">
                <div className="e1b">
                    <div className='yr'>2020</div>
                    <p className='etxt'>Kerala Board <span> Grade: 65%</span></p>
                    <p className='es'>( Govt Higher Secondary School, Villadom , Thrissur )</p>
                </div>
                </div>
                <div className="e1">
                <div className="e1b">
                    <div className='yr'>2023</div>
                    <p className='etxt'>University of Calicut <span>CGPA: 6.1/10</span></p>
                    <p className='es'>( (Sri C Achutha Menon Government college, Thrissur) )</p>
                </div>
                </div>
            </div>
    </div>
    <hr />
    <div id='interest' className="interest">
             <div className="ehead">
            <h5 style={{color:'grey'}}>My </h5> &nbsp;
             <h2 >Interests</h2>
            </div>
            <div className='ibody'>
                <div className="ii"><i className="fa-solid fa-laptop-code fa-2xl"></i> Coding</div>
                <div className="ii"><i className="fa-sharp fa-solid fa-futbol fa-2xl"></i> Sports</div>
                <div className="ii"><i class="fa-solid fa-wand-magic-sparkles fa-2xl"></i> Designing</div>
                <div className="ii"><i class="fa-solid fa-headphones fa-2xl"></i> Music</div>

            </div>

    </div>

    </>
  )
}

export default Edu
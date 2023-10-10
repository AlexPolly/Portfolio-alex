import React from 'react'
import "./Contact.css";



function Contact() {
  return (
    <>
     <div id='contact' className="c">
        <div className="c-left">
           <div className='chead'>
                <h3 className='ch1'>Know</h3>
                <h2 className='ch2'>More <br /> About <br /> Me</h2>
           </div>
           <div className='res'>
             <h5 className='rh'>Download my resume and Discover more about me...</h5>
             <button className='rbtn mx-auto'>Download Resume</button>
           </div>
        </div>
        <div className="c-right">
           <div className='cbody'>
                <div className='ch3'>Contact</div>  
                <div className='ch4'> <i className="fa-solid fa-xs fa-feather"></i> Alex A P <br /> <i class="fa-solid fa-xs fa-feather"></i>  alexpolly2002@gmail.com <br /> <i class="fa-solid fa-xs fa-feather"></i>  9633039208 </div>
           </div>
        </div>
     </div>
     <hr />
     <div className='footer'>
        <div className="f-left"> Thank You <img className='fimg'  src="https://media4.giphy.com/media/cCAXPxYovRXi05QxlX/giphy.gif?cid=6c09b952gfcjedifzivumv0qe1si9fzk4xws64fekm4ho4xe&ep=v1_stickers_related&rid=giphy.gif&ct=s" alt="" /></div>
        <div className="f-right">
          <h3 >Connect With Me</h3>
          <div className="dicons mt-4">
          <i className="fa-brands fa-twitter me-3 fa-sm"></i>
          <i className="fa-brands fa-linkedin me-3 fa-sm"></i>
          <i className="fa-brands fa-instagram me-3 fa-sm"></i>
          <i className="fa-solid fa-envelope me-3 fa-sm"></i>
          <i className="fa-brands fa-facebook fa-sm"></i>
          </div>
        </div>
     </div>
    </>
  )
}

export default Contact
import React from 'react'
import "./Skill.css"

function Skill() {
  return (
    <>
   <div id='skill' className='skill'>
        <div className="shead">
        <h5 style={{color:'grey'}}>My </h5> &nbsp;
         <h2 >Skills</h2>  
        </div>
        <div className='sbody'>
            <div className="icon-c">
             <h4><i className="fa-brands fa-xl fa-html5"></i>&nbsp;  HTML </h4> &nbsp;
            </div> 
            <div className="icon-c">
             <h4><i className="fa-brands fa-bootstrap fa-xl"></i> &nbsp;  BOOTSTRAP </h4> &nbsp;
            </div> 
            <div className="icon-c">
             <h4><i className="fa-brands fa-css3-alt fa-xl"></i>&nbsp;  CSS </h4> &nbsp;
            </div>
            <div className="icon-c">
             <h4> <i className="fa-brands fa-square-js fa-xl"></i> &nbsp;  JAVASCRIPT </h4> &nbsp;
            </div> 
            <div className="icon-c">
             <h4> <i className="fa-brands fa-react fa-xl"></i> &nbsp;  REACT JS </h4> &nbsp;
            </div>  
            <div className="icon-c">
             <h4><i class="fa-brands fa-figma fa-xl"></i> &nbsp;  FIGMA </h4> &nbsp;
            </div>
            <div className="icon-c">
             <h4><i className="fa-solid fa-people-group fa-xl"></i> &nbsp;  TEAM MANAGEMENT </h4> &nbsp;
            </div>  
            <div className="icon-c">
             <h4><i className="fa-solid fa-triangle-exclamation fa-xl"></i> &nbsp;  PROBLEM SOLVING </h4> &nbsp;
            </div>
            <div className="icon-c">
             <h4><i className="fa-solid fa-users fa-xl"></i> &nbsp;  LEADERSHIP </h4> &nbsp;
            </div>        
        </div>
   </div>
     
    </>
  )
}

export default Skill
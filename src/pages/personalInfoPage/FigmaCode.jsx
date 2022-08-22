import React from 'react'
 
import PersonalForm from '../../components/figmacode/personalForm/PersonalForm'
 
import './figmaCode.css'
function FigmaCode() {
    return (
         <div className="info row">
             <div className="col-3  "></div>
             <div className=" col-7  mt-5">
                  <h3 className="title">Complete Your Purchase</h3>
                  <nav>
                    <a href="#" className="active">Personal Info</a> 
                    <a href="#">Billing Info</a> 
                    <a href="#">Payment</a> 
                </nav>
                <div className="row">
                    <div className="col-9">

                <div className="position-relative  mt-2  ">
                    <div className="progress"  >
                    <div className="progress-bar1" role="progressbar" aria-label="Progress"   aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    </div>
                </div>
                </div>
                <PersonalForm/>  
             </div>
             <div className="col-2  ">

             </div>
             
         </div>
    )
}

export default FigmaCode

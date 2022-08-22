import React from 'react'
import BillingForm2 from '../../components/figmacode/billingForm2/BillingForm2'
import './billPage.css'
function BillPage() {
    return (
        <div className="info row">
        <div className="col-3  "></div>
        <div className=" col-7 mt-5  ">
             <h3 className="title">Complete Your Purchase</h3>
             <nav>
               <a href="#" >Personal Info</a> 
               <a href="#" className="active">Billing Info</a> 
               <a href="#">Payment</a> 
           </nav>
           <div className="row">
               <div className="col-9">

           <div className="position-relative  mt-2">
               <div className="progress"  >
               <div className="progress-bar" role="progressbar" aria-label="Progress"   aria-valuenow="59" aria-valuemin="0" aria-valuemax="100"></div>
               </div>
               </div>
           </div>
           </div>
           <BillingForm2/>  
        </div>
        <div className="col-2  ">

        </div>
        
    </div>
    )
}

export default BillPage

import React from 'react'
import './billingForm2.css'
import { Outlet,Link } from 'react-router-dom'; 
function BillingForm2() {
  return (
    <div>
       <div className="card   mt-5">
            <div className="card-header bg-primary  ">
                <div className="row">
                    <div className="col-12 text-white d-flex justify-content-around">
                        <span>Item Name</span>
                        <span>₦ Price</span>
                    </div>
                </div>

            </div>
            <div className="card-body">
            <div className="row mt-3">
                    <div className="col d-flex justify-content-around">
                        <span>Data science and usabilty</span>
                        <span>50,000.00</span>
                    </div>
                </div>
                <div className="row  mt-3 d-flex ">
                    <div className="col d-flex justify-content-around">
                        <span>Shipping</span>
                        <span>0.00</span>
                    </div>
                </div>
                <hr className="mt-4 mb-4" />
                <div className="row  mt-3    ">
                    <div className="col  d-flex justify-content-around">
                        <span>Total</span>
                        <span>50,000.00</span>
                    </div>
                </div>

            </div>
       </div>
       <div className="row">

       <div class="col-md-5 mt-5  mb-3  d-flex justify-content-between">
    <Link to='/figma/payment'  class="btn form__nextButton">Pay</Link>
    <a type="submit" class=" form__cancelButton">Cancel Payment</a>
  </div>
       </div>
    </div>
  )
}

export default BillingForm2

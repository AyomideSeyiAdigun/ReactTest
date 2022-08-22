import React from 'react'
import './paymentDone.css'
import { Link } from 'react-router-dom';
function PaymentDone() {
    return (
        <div className="payment">

        <div className="  payment__card">
             <div className="iconn">
             <i className="fa fa-check" aria-hidden="true"></i>
                </div>
            <div className="payment__message">
               
            <h2>Purchase Completed</h2>
            <p>Please check your email for details concerning this transaction</p>
            <Link className="mb-3"  to="/figma">Return Home</Link>
            </div>
        </div>
        </div>
    )
}

export default PaymentDone

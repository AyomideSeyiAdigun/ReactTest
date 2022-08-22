import React from 'react'
import './billingForm.css'
import { Outlet,Link } from 'react-router-dom'; 
function BillingForm() {
    return (
        <form class="row g-3">
  <div class="col-md-12 mt-5">
    <label for="inputName4" class="form-labelx">Name on Card</label>
    <input type="text" placeholder="jude Ophrah aser" class="form-control" id="inputName4"/>
  </div>
  <div class="col-md-12 mt-5">
  <label for="inputState" class="form-labelx">Card type</label>
    <select id="inputState" class="form-select">
      <option selected>Visa</option>
      <option>Debit</option>
    </select>
  </div>
  
  <div class="col-md-6 mt-5">
    <label for="inputCard"  class="form-labelx">Card details</label>
    <input type="text" placeholder="0000     0000    0000     0000" class="form-control" id="inputCard"/>
  </div>
  <div class="col-md-4 mt-5">
  <label for="inputDate" class="form-labelx">Date</label>
    <input type="month" class="form-control" placeholder="24/24" id="inputDate"/>
  </div>
  <div class="col-md-2 mt-5">
    <label for="inputCvv" class="form-labelx">Cvv</label>
    <input type="text" maxLength="3" class="form-control" placeholder="000" id="inputCvv"/>
  </div>
   
  <div class="col-md-5 mt-5 mb-3 d-flex justify-content-between">
    <Link to="/figma/billing2"  class="btn form__nextButton">Next</Link>
    <Link to="/figma"   class=" form__cancelButton">Cancel Payment</Link>
  </div>
</form>
    )
}

export default BillingForm

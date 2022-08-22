import React from 'react'
import './personalForm.css'
import { Link } from 'react-router-dom'; 
function PersonalForm() {
  return (
    <form class="row g-3">
    <div class="col-md-12 mt-5">
      <label for="inputName4" class="form-label">Name </label>
      <input type="text" placeholder="jude Ophrah aser" class="form-control" id="inputName4"/>
    </div>
    <div class="col-md-12 mt-5">
      <label for="inputEmail4" class="form-label3">Email Address </label>
      <label for="inputEmail4" class="form-label2">  </label>
      <input type="text" placeholder="nnnnn@example.com" class="form-control" id="inputEmail4"/>
    </div>
    <div class="col-md-12 mt-5">
      <label for="inputAddress14" class="form-label">Address1  </label>
      <input type="text" placeholder="123,jude Ophrah aser" class="form-control" id="inputAddress14"/>
    </div>
    <div class="col-md-12 mt-5 ">
      <label for="inputAddress24" class="form-label">Address2  </label>
      <input type="text" placeholder=" Osofda street" class="form-control" id="inputAddress24"/>
    </div>
     
    
    <div class="col-md-8 mt-5">
      <label for="inputLG"  class="form-label">Local Government</label>
      <input type="text"   class="form-control" id="inputLG"/>
    </div>
    <div class="col-md-4 mt-5">
  <label for="inputState" class="form-label">State</label>
    <select id="inputState" class="form-select">
      <option selected>Lagos</option>
      <option>Oyo</option>
    </select>
  </div>
    <div class="col-md-5 mt-5 d-flex justify-content-between mb-3">
      <Link  to="/figma/billing" class="btn form__nextButton">Next</Link>
      <a type="submit" class=" form__cancelButton">Cancel Payment</a>
    </div>
  </form>
  )
}

export default PersonalForm

import React from 'react'
import './home.css'
import { Link } from 'react-router-dom'
function Home() {
  return (
<div className="homePage">
<div class="row">
  <div class="col-md-5">
    <div class="card bg-dark">
      <div class="card-body">
        <h5 class="card-title">TASK ONE</h5>
        <p class="card-text">Kindly click on the button below to access Task One.</p>
        <Link to='/figma' class="btn btn-secondary">Click me !</Link>
      </div>
    </div>
  </div>
  <div class="col-md-5">
    <div class="card bg-dark" >
      <div class="card-body  ">
        <h5 class="card-title"> TASK TWO</h5>
        <p class="card-text">Kindly click on the button below to access Task Two.</p>
        <Link to="/covid"  class="btn btn-secondary">Click me !</Link>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Home

import React from 'react'

const Register = () => {
  return (
    
    <div class="container d-flex justify-content-center align-items-center vh-100">   
        <form class="rform">
            {/* RULES */}
        {/* change class to className and a / to the end of every input */}
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"/>
  </div>
  {/* <div class="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" htmlfor="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" className="btn btn-primary w-100">Submit</button>
</form>
</div>


  )
}

export default Register
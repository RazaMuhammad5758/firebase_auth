import React from 'react'
import './Register.scss'

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Create a New Account</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" placeholder="Re-enter your password" />
          </div>
          <button type="submit" className="btn-signup">Sign Up</button>
        </form>
        <p className="signin-text">
          Already have an account? <a href="#">Continue</a>
        </p>
      </div>
    </div>
  )
}

export default Register

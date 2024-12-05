import React from 'react'
import './Login.scss'

const Login = () => {
  return (
    
      <div className="login-container">
      <div className="login-box">
        <h2>Welcome Back</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="test@email.com" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" placeholder="********" />
          </div>
          <button type="submit" className="btn-signin">Sign In</button>
        </form>
        <p className="signup-text">
          Don't have an account? <a href="#">Sign up</a>
        </p>
        <div className="divider">
          <span>OR</span>
        </div>
        <button className="btn-google">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png"
            alt="Google"
          />
          Continue with Google
        </button>
      </div>
    </div>
    
  )
}

export default Login

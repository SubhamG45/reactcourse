import React from 'react'
import './login.css'

const Login = () => {
  return (
    <>
       <div className="login-container">
      <div className="glass-card">

        <div className="left-side">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
            alt="Illustration"
          />
        </div>

        <div className="right-side">
          <h1 className="logo">Instagram</h1>

          <form>

            <input
              type="text"
              placeholder="Phone number, username, or email"
            />

            <input
              type="password"
              placeholder="Password"
            />

            <button>
              Log In
            </button>

          </form>

          <div className="divider">
            <span></span>
            <p>OR</p>
            <span></span>
          </div>

          <button className="facebook-btn">
            Continue with Facebook
          </button>

          <a href="#" className="forgot">
            Forgot password?
          </a>

          <div className="signup">
            Don't have an account?
            <a href="#"> Sign Up</a>
          </div>

        </div>

      </div>
    </div>
    </>
  )
}

export default Login

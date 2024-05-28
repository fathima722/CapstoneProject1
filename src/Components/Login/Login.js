import React from "react"; 
import './Login.css';

export default function Login() {
    return (
        <div className="container">
        <div className="login-grid">
          <div className="login-text">
            <h2>Login</h2>
          </div>
          <div className="login-text">
            Are you a new member? <span><a href="../Sign_Up/Sign_Up.html" style=
            {{color: "#2190FF"}}> Sign Up Here</a></span>
          </div>
          <br />
          <div className="login-form">
            <form>
              <div className="form-group">
                        <label for="email" style={{textAlign: "left",paddingLeft:"260px"}}>Email</label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>
              <div className="form-group">
                <label for="password" style={{textAlign: "left",paddingLeft: "260px"}} >Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-control"
                  placeholder="Enter your password"
                  aria-describedby="helpId"
                />
                <div className="login-text1">
                  Forgot Password?
                </div>
              </div>
              <div className="btn-group">
                <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Login</button> 
                <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
}
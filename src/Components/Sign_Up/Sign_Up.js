import React from "react"; 
import './Sign_Up.css';

export default function SignUp(){
    return (
        <div className="container" style={{marginTop: "5%"}}>
        <div className="signup-grid">
            <div className="signup-text">
                <h1>Sign Up</h1>
            </div>
            <div className="signup-text1" style={{textAlign: "left",paddingLeft: "200px"}}>
                Already a member? <span><a href="../Login/Login.html" style={{color: "#2190FF"}}> Login</a></span>
            </div>
            <div className="signup-form">
                <form>
                    <div className="form-group">
                        <label for="role">Role</label>
                        <select id="role" name="role" className="form-control" style={{paddingInline: "2px"}}>
                            <option value="" disabled selected>Select Role</option>
                            <option value="doctor">Doctor</option>
                            <option value="patient">Patient</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" name="name" id="name" required className="form-control" placeholder="Enter your name" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label for="phone">Phone</label>
                        <input type="tel" name="phone" id="phone" required className="form-control" placeholder="Enter your phone number" pattern="[0-9]{10}" aria-describedby="helpId" />
                        <br/>
                        <small className="form-text text-muted">Phone number must be 10 digits.</small>
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required className="form-control" placeholder="Enter your email" aria-describedby="helpId" />
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input name="password" id="password" required className="form-control" placeholder="Enter your password" aria-describedby="helpId" />
                    </div>
                    <div className="btn-group">
                        <button type="submit" className="btn btn-primary mb-2 mr-1 waves-effect waves-light">Submit</button>
                        <button type="reset" className="btn btn-danger mb-2 waves-effect waves-light">Reset</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}
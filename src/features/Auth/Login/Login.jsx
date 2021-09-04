import { useState } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../authSlice";
import "./Login.css"

export default function LoginBox(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const dispatch = useDispatch();

    return(
        <div className="loginForm">

                <h3 className="login-heading">Log in</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control login-field" placeholder="Enter username" onChange={(event)=>setUsername(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control login-field" placeholder="Enter password" onChange={(event)=>setPassword(event.target.value)} />
                </div>

                <button className="btn btn-warning btn-lg btn-block login-btn" onClick={()=>dispatch(userLogin({username, password}))}>Sign in</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
            </div>
    );
}
import "./Signup.css"
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import {baseurl} from "../../../api/baseurl"
import {userLogin, userSignup} from "../authSlice"

export default function SignupBox(){
    const [fullName, setFullName] = useState("")
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch()
    const state = useSelector(state => state.userData)
    const navigate = useNavigate()

    useEffect(() => {
        if(state.signup === "true"){
          dispatch(userLogin({userName, password}))
        
        }

      }, [state, dispatch])



    return(
        <div className="signupForm">

                <h3 className="signup-heading">Sign up</h3>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control signup-field" placeholder="Enter name" onChange={(event)=>setFullName(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control signup-field" placeholder="Enter username" onChange={(event)=>setUserName(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control signup-field" placeholder="Enter email" onChange={(event)=>setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control signup-field" placeholder="Enter password" onChange={(event)=>setPassword(event.target.value)}/>
                </div>

                <button  className="btn btn-warning btn-lg btn-block signup-btn" onClick={()=>dispatch(userSignup({fullName, userName, email, password}))}>Sign up</button>
                {/* <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p> */}
            </div>
    );
}
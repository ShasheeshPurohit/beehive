import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../authSlice";
import "./Login.css"

export default function LoginBox(){
    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const state = useSelector(state => state.userData)

    const dispatch = useDispatch();

    useEffect(() => {
        if(state.token){
          dispatch(userLogin({userName, password}))
          console.log("triggered")
        }

      }, [state, dispatch])

       console.log(state)

    return(
        <div className="loginForm">

                <h3 className="login-heading">Log in</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control login-field" placeholder="Enter username" onChange={(event)=>setUserName(event.target.value)}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control login-field" placeholder="Enter password" onChange={(event)=>setPassword(event.target.value)} />
                </div>

                <button className="btn btn-warning btn-lg btn-block login-btn" onClick={()=>dispatch(userLogin({userName, password}))}>Log in</button>
            </div>
    );
}
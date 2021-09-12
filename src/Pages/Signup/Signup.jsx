import React, { useEffect } from "react";
import SignupBox from "../../features/Auth/Signup/Signup";
import "./Signup.css"
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Signup() {

    const state = useSelector((state)=>state.userData);
    const navigate = useNavigate();

    useEffect(() => {
        if(state.token){
            navigate("/feed")
        }
    }, [state, navigate])

    console.log(state)

 
        return (
           <div>
               <SignupBox/>
           </div>
        );

}
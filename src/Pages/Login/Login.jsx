import React, { Component, useEffect } from "react";
import { useSelector } from "react-redux";
import LoginBox from "../../features/Auth/Login/Login";
import { useNavigate } from "react-router-dom";
import "./Login.css"

export default function Login(){

    const token = useSelector((state)=>state.userData.token)
    const navigate = useNavigate();

    useEffect(() => {
        if(!token){
            navigate("/login")
        }else {
            navigate("/feed")
        }
      }, [token, navigate]) 

    
    return (
            <div>
                <LoginBox/>
            </div>
      );
    
}
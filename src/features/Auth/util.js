import axios from "axios";

export const setLocalStorage = (data, token)=>{
    localStorage.setItem("userData", JSON.stringify(data));
    localStorage.setItem("token", JSON.stringify(token));
}

export const getLocalStorage = () =>{
    let userData = JSON.stringify(localStorage.getItem("userData"));
    let token = JSON.stringify(localStorage.getItem("token"));

    return{userData, token}
}

export const getUserFromLocalStorage = () =>{
    let userData;
    userData = JSON.parse(localStorage.getItem("userData"));
    return userData?userData:null;
}

export const getTokenFromLocalStorage = () =>{
    let token;
    token = JSON.parse(localStorage.getItem("token"));
    return token?token:null
}

export const clearLocalStorage = () =>{
    localStorage.removeItem("userData");
    localStorage.removeItem("token");
}

export const setupAuthHeaderForServiceCalls = (token)=>{
    if(token){
        return (axios.defaults.headers.common["Authorization"] = token)
    }

    delete axios.defaults.headers.common["Authorization"]
}
import { useSelector, useDispatch } from "react-redux";
import "./createPost.css"
import { useState, useEffect } from "react";
import bee from "../../../images/bee.png";
import { addPost } from "../postSlice";
import { loadFeed } from "../../Auth/authSlice";

export default function CreatePost(){

    const [text, setText] = useState("")
    const dispatch = useDispatch()


    return(
        <div className="post-box">
            <input className="post-input" type="text" value={text} placeholder="What's buzzin?..." onChange={(event)=>setText(event.target.value)}/>
            <button className="post-create-btn" onClick={()=>{
                dispatch(addPost({text: text}))
                setText("")
                
                }}>buzz <img className="post-button-icon" src={bee} /></button>
            
        </div>
    );
}
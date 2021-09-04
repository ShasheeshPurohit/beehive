import { useEffect } from "react";
import "./Feed.css"
import { useSelector, useDispatch } from "react-redux";
import CreatePost from "../../features/posts/CreatePost/createPost";
import bee from "../../images/bee.png"
import { Link } from "react-router-dom";
import { loadFeed } from "../../features/Auth/authSlice";
import { setupAuthHeaderForServiceCalls } from "../../features/Auth/util";

export default function Feed(){
    const state = useSelector((state)=>state.userData);
    const dispatch = useDispatch();


    useEffect(() => {
        setupAuthHeaderForServiceCalls(state.token);
        dispatch(loadFeed("hara"));
        
      }, [dispatch]);

    return(
        <div className="feed-layout">
            <div className="feed-nav">
                <ul className="feed-sidenav-links">
                    <li><Link className="feed-sidenav-link" to="/timeline">Timeline</Link></li>
                </ul>
            </div>
            <div className="post-feed">
            <CreatePost/>
            {state.userFeed === null?(<h1>Loading</h1>):
            <ul className="post-list">
                {state.userFeed.map((post)=>{
                    return(
                        <li key={post._id} className="post-list-post">
                            <p><img src={bee} className="post-user-icon"></img>{post.authorName}</p>
                            <p>{post.text}</p>
                        </li>
                    );
            })}
                </ul>}     
        </div>
        <div className="feed-users-section">
            Bees you may know
        </div>
        </div>
    );
}
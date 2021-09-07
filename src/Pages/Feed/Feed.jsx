import { useEffect, useState } from "react";
import "./Feed.css"
import { useSelector, useDispatch } from "react-redux";
import CreatePost from "../../features/posts/CreatePost/createPost";
import bee from "../../images/bee.png"
import { Link } from "react-router-dom";
import { loadFeed } from "../../features/Auth/authSlice";
import { setupAuthHeaderForServiceCalls } from "../../features/Auth/util";
import { followFriend, loadAllUsers } from "../../features/Friends/OtherUserSlice";
import { likePost, loadPosts } from "../../features/posts/postSlice";
import { likeButtonPressed } from "../../features/posts/postSlice";
import Loader from "react-loader-spinner";

export default function Feed(){
    const state = useSelector((state)=>state.userData);
    const allUsers = useSelector((state)=>state.friendsData.allUsers);
    setupAuthHeaderForServiceCalls(state.token)
    const postState = useSelector((state)=>state.postsData)
    const dispatch = useDispatch();

    useEffect(() => {
        setupAuthHeaderForServiceCalls(state.token);
        dispatch(loadFeed("hara"));
        dispatch(loadAllUsers("param"))
        dispatch(loadPosts("param"))
      }, [dispatch]);

    return(
        <div className="feed-layout">     
            <div className="feed-sidebar">
            <ul className="feed-sidebar-links">
                    <li><Link className="feed-sidebar-link" to={`/timeline/${state.currentUser._id}`}>Timeline</Link></li>
                </ul>
            </div>
            <div className="post-feed">
                <CreatePost/>
                <div className="post-feed-posts">
                {state.userFeed === null?(<div className="loader">
                <Loader
        type="Grid"
        color="rgb(50,50,50)"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
                </div>):
            <ul className="feed-post-list">
                {state.userFeed.map((post)=>{
                    return(
                        <li key={post._id}>
                           <div className="feed-post">
                            <p><img src={bee} className="post-user-icon"></img>{post.authorName}</p>
                            <p>{post.text}</p>
                            <div className="post-controls"><div className="like-btn" onClick={async()=>{
                                await dispatch(likePost({postId:post._id}))
                                dispatch(loadFeed("param"))}}><i class="fas fa-heart post-control-icon"></i>{post.likes.length>0?post.likes.length:""} </div>
                                <div className="comment-btn" onClick={()=>{
                              }}><i class="fas fa-comment post-control-icon"></i>
                              
                              </div>
                              <div className="share-btn"><i class="fas fa-share post-control-icon"></i></div>
                              </div>

                           </div>
                           {/* <div className="comments">
                               <ul className="comment-list">
                                   <li className="comment">Hey There</li>
                               </ul>
                           </div> */}
                        </li>
                    );
            })}
                </ul>}     
                </div>
            </div>
            <div className="other-user-section">
                <p>Bees you may know</p>

                <ul className="other-users-list">
                {allUsers !== null ? (allUsers.map((user)=>{
                  
                   return (<li key={user._id} className="otheruser-card">
                       {user.userName===state.currentUser.userName?"":
                       <div>
                       <p><img src={bee} className="post-user-icon"></img>{user.fullName}</p>
                       <button className="follow-user-btn" onClick={async()=>{
                          
                    await dispatch(followFriend({otherUserId:user._id}))
                       dispatch(loadFeed("param"))
                    }}>Follow</button>
                       </div>
                       }
                       </li>);
                })):null}
            </ul>
            </div>
        
        </div>
    );
}
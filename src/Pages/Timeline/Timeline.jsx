import {useEffect} from "react"
import "./Timeline.css"
import {Container, Row, Col} from "react-bootstrap"
import bgCover from "../../images/skateboard-bg-cover.jpg"
import CreatePost from "../../features/posts/CreatePost/createPost";
import { useSelector, useDispatch } from "react-redux";
import { setupAuthHeaderForServiceCalls } from "../../features/Auth/util";
import { loadTimeline } from "../../features/Auth/authSlice";
import bee from "../../images/bee.png"
import { loadFriends } from "../../features/Friends/OtherUserSlice";

export default function Timeline(){

    const dispatch = useDispatch();
    const state = useSelector((state)=>state.userData)
    const {followers, following, allUsers} = useSelector((state)=>state.friendsData)
    

    useEffect(()=>{
        setupAuthHeaderForServiceCalls(state.token)
        dispatch(loadTimeline("param"))
        dispatch(loadFriends("param"))
    },[dispatch])

    return(
        <div className="timeline-layout">
        <Container fluid="md profile-layout">
            <Row className="profileHeader">
                <Col className="profile-bg"></Col>
                
                <img className="profile-pic" src="https://cdn5.vectorstock.com/i/thumb-large/08/19/gray-photo-placeholder-icon-design-ui-design-icon-vector-35850819.jpg"/>
               
            </Row>

            <Row className="profile-bio">
                <Col className="bio-box">bio phy chem sab yahii haii</Col>
            </Row>
            <div className="user-follow-info">
                <p>Followers<br/>{followers===null?"":followers.length}</p>
                <p>Following<br/>{following===null?"":following.length}</p>
            </div>
            <Row>
                <Col className="post-box-container">
                <div  className="post-box-timeline">
                    <CreatePost/>
                </div>                    
                </Col>
                <div>
             
                    <ul className="post-list-timeline">
                    {state.timeline === null?"":(state.timeline.map((post)=>{
                    return(
                        <li className="post-list-post">
                            <p><img src={bee} className="post-user-icon"></img>{post.authorName}</p>
                            <p>{post.text}</p>
                        </li>
                    );
            }))}
                    </ul>
               
                </div>
            </Row>
        </Container>
        </div>
    );
}
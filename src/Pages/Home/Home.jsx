import "./Home.css"
import logo from "../../images/logo.png"
import { useNavigate } from "react-router-dom";

export default function Home(){
    const navigate = useNavigate()

    return(
        <div className="home-layout">
            <div className="heading-box">
                <img className="app-logo-main" src={logo} alt="logo"/>
                <p className="main-heading">beehive</p>
                <p className="sub-heading">stay closer to your close ones</p>
                <div className="main-buttons">
                    <button className="main-button signup" onClick={()=>navigate("/signup")}>Sign up</button>
                    <button className="main-button login">Login</button>
                </div>
            </div>
        </div>
    );
}
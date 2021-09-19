import "./Navbar.css"
import { Navbar, Container } from "react-bootstrap"
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux"
import logo from "../../images/logo.png"
import {Link} from "react-router-dom"
import {clearData} from "../../features/Auth/authSlice"


export default function NavbarComponent(){

  const state = useSelector((state)=>state.userData)
  const dispatch = useDispatch()

    return(
        
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <Link to={state.token?"/feed":"/"} className="brand-logo"><img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          beehive</Link>
            
          </Navbar.Brand>
          <ul style={{color:"white"}} className="navbar-list">
            {state.token?<button onClick={()=>dispatch(clearData())}>Log Off</button>:""}            
          </ul>
        </Container>
      </Navbar>
    
    );
}
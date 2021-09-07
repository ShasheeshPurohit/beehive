import "./Navbar.css"
import { Navbar, Container } from "react-bootstrap"
import { useSelector } from "react-redux";
import logo from "../../images/logo.png"


export default function NavbarComponent(){

  const state = useSelector((state)=>state.userData)

    return(
        
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          beehive
          </Navbar.Brand>
          {/* <ul style={{color:"white"}} className="navbar-list">
            {state.token?<li>Hi {state.currentUser.userName}</li>:""}            
          </ul> */}
        </Container>
      </Navbar>
    
    );
}
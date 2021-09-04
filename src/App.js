import React from 'react';
import logo from './images/logo.png'
import { Counter } from './features/counter/Counter';
import NavbarComponent from './Components/Navbar/Navbar';
import './App.css';
import { Nav } from 'react-bootstrap';
import Timeline from './Pages/Timeline/Timeline';
import Feed from './Pages/Feed/Feed';
import SignUp from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavbarComponent/>
      <div className="App-Screen">
        
        <div className="app-disp">
        <Routes>
          <Route path="/feed" element={<Feed/>} />
          <Route path="/timeline" element={<Timeline/>}/>
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
        </div>
        
      </div>
    </div>
  );
}

export default App;

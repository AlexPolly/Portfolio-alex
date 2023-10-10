import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./Navbar.css";



function NavBar({isDarkMode, setDarkMode}) {
    const toggleDarkMode = () =>{
        setDarkMode(!isDarkMode)
      }
  return (
    <>
         <Navbar expand="lg" className="bg">
      <Container>
        <Navbar.Brand >        <i onClick={toggleDarkMode} className={isDarkMode ? 'fa-solid fa-sun text-light' : 'fa-solid fa-moon text-dark'}></i>
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ntxt ms-auto ">
            <Nav.Link style={{fontSize:'20px',fontWeight:'700'}} className={isDarkMode ? ' text-light':'text-dark'} href="#about">About</Nav.Link>
            <Nav.Link style={{fontSize:'20px',fontWeight:'700'}} className={isDarkMode ? 'text-light':'text-dark'} href="#skill">Skills</Nav.Link>
            <Nav.Link style={{fontSize:'20px',fontWeight:'700'}} className={isDarkMode ? 'text-light':'text-dark'} href="#education">Education</Nav.Link>
            <Nav.Link style={{fontSize:'20px',fontWeight:'700'}} className={isDarkMode ? 'text-light':'text-dark'} href="#interest">Interests</Nav.Link>
            <Nav.Link style={{fontSize:'20px',fontWeight:'700'}} className={isDarkMode ? 'text-light':'text-dark'} href="#project">Projects</Nav.Link>
            <Nav.Link style={{fontSize:'20px',fontWeight:'700'}} className={isDarkMode ? 'text-light':'text-dark'} href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavBar
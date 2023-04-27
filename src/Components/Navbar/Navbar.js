import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const NavBar = () => {
  const styles = {
    nav: {
      color: "#b30d02",
      fontWeight: "bold",
      fontSize: "28px",
      borderRadius: "15px",
      fontFamily: 'Archivo Black',
    }
  }

  return (
    <>
      <Navbar className='nav-bar' bg="" expand="lg">
        <Container fluid>
          <Navbar.Toggle className='ms-auto navbar-toggler' aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link className='px-5 mx-5 hover-shadow' href="/">Home</Nav.Link>
              <Nav.Link className='px-5 mx-5 hover-shadow' href="/services">Services</Nav.Link>
              <Nav.Link className='px-5 mx-5 hover-shadow' href="/faq">FAQs</Nav.Link>
              <Nav.Link className='px-5 mx-5 hover-shadow' href="/customerreviews">Customer Reviews</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

  );
}

export default NavBar;

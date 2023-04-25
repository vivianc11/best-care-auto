import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

const NavBar = () => {
  const styles = {
    nav: {
      color: "#b50717",
      fontWeight: "bold",
      fontSize: "30px"
    }
  }

  return (
    <Navbar className='nav-bar' bg="light" expand="lg">
      <Container fluid>
        <Navbar.Toggle className='ms-auto' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link className='px-5 mx-5' style={styles.nav} href="/">About Us</Nav.Link>
            <Nav.Link className='px-5 mx-5' style={styles.nav} href="/services">Services</Nav.Link>
            <Nav.Link className='px-5 mx-5' style={styles.nav} href="/faq">FAQs</Nav.Link>
            <Nav.Link className='px-5 mx-5' style={styles.nav} href="/customerreviews">Customer Reviews</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;

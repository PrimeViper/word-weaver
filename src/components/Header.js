import React,{useState} from 'react';
import { Container, Nav, Navbar, NavDropdown,Form } from 'react-bootstrap';

const Header = (props) => {

  return (
    <Navbar bg={`${props.mode}`} data-bs-theme={`${props.mode}`}>
    <Container>
      <Navbar.Brand href="#home">My-App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          
      </Navbar.Collapse>
    </Container>
    <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
       onClick={props.toggleMode} 
      />
      </Form>
  </Navbar>
  );
}

export default Header;
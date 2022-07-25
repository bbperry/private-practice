import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { LinkContainer } from 'react-router-bootstrap';

function Header() {
  return (
    <>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>Claro Communication</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="navbar me-auto">
              <LinkContainer to="/about">
                <Nav.Link className="links">About</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/services">
                <Nav.Link className="links">Services</Nav.Link>
              </LinkContainer>

              {/* <LinkContainer to="/payment">
                <Nav.Link>Payment & Insurance</Nav.Link>
              </LinkContainer> */}

              <NavDropdown title="Payment & Insurance" id="collasible-nav-dropdown">
              <LinkContainer to="/rates"><NavDropdown.Item href="#action/3.1">Rates</NavDropdown.Item></LinkContainer>
              <LinkContainer to="/insurance"><NavDropdown.Item href="#action/3.2">
                  Insurance
                </NavDropdown.Item></LinkContainer>
              </NavDropdown>

              <LinkContainer to="/testimonials">
                <Nav.Link>Testimonials</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/resources">
                <Nav.Link>Resources</Nav.Link>
              </LinkContainer>

              <LinkContainer to="/contact">
                <Nav.Link>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;

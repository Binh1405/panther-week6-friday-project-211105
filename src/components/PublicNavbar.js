import Button from '@restart/ui/esm/Button'
import React from 'react'
import { Container, Form, FormControl, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const PublicNavbar = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">E-Store</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
        <Nav.Link as={NavLink} to="/profile">Profile Page</Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav.Link as={NavLink} to="/login">Login</Nav.Link>
      <Nav.Link as={NavLink} to="/register">Register</Nav.Link>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default PublicNavbar

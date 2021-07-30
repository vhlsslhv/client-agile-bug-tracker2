import React from "react";
import { NavLink } from "react-router-dom";
import { logout } from "../api";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function TheNavbar({ loggedInUser, setLoggedInUser }) {
  const logoutUser = async () => {
    await logout();
    setLoggedInUser(null);
  };

  return loggedInUser ? (
    <>
    {console.log(loggedInUser)}
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Agile Bug Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/projects">Projects</Nav.Link>
      <Nav.Link href="/projects/add">Add Project</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="">Welcome {loggedInUser.username}</Nav.Link>
      <Nav.Link href="/" onClick={logoutUser}>Logout
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  ) : (
    <>
    {console.log(loggedInUser)}
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="/">Agile Bug Tracker</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="/projects">Projects</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link href="/login">Login</Nav.Link>
      <Nav.Link eventKey={2} href="/signup">
        Sign Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </>
  );
}
export default TheNavbar;





/*
<p>Welcome {loggedInUser.username}</p>
      <ul>
        <li>
          <NavLink to="/">
            <button onClick={logoutUser}>Logout</button>
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/projects">
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to="/projects/add">
            Add Project
          </NavLink>
        </li>
      </ul>
    </>
  ) : (
    <ul>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/login">
          Login
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/signup">
          Signup
        </NavLink>
      </li>
      <li>
        <NavLink activeStyle={{ color: "red" }} exact to="/projects">
          Projects
        </NavLink>
      </li>
    </ul>
*/




/*

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Agile Bug Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <p>Welcome {loggedInUser.username}</p>
              <Nav.Link href="/projects">Projects</Nav.Link>
              <Nav.Link href="/projects/add">Add Project</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={logoutUser} eventKey={3} href="/">
                Logout
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  ) : (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Agile Bug Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link eventKey={2} href="/signup">
              Sign Up
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

*/
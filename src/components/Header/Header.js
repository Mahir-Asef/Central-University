import React from "react";
import {
  Container,
  Nav,
  Navbar,
} from "react-bootstrap";
import "./Header.css";
import { NavLink } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/home">
            <div className="d-flex align-items-center">
              <h2 className="center">Central University</h2>
            </div>
          </NavLink>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link" to="/aboutussection">About Us</NavLink>
            <NavLink className="nav-link" to="/allcourses">All Course</NavLink>
            <NavLink className="nav-link" to="/allpartnership">All Partnership</NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

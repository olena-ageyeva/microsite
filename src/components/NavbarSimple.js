import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Image,Nav, NavDropdown,Navbar, NavItem, FormGroup, FormControl, Button, Grid, Row, Thumbnail} from "react-bootstrap";
import logo from '../images/Commonwealth_Logo.svg'


function NavbarSimple() {
  var icon = (
    <span className="logo">
      <a href="/">
        <img src={logo} alt="logo" /></a>
    </span>
  );
  return (
    <div className="container-fluid">      
      <Navbar staticTop={true} fluid={true} brand={icon} navbar-default toggleButton  collapseOnSelect expand="lg" bg="white" variant="primary" toggleNavKey={1}>
      <Navbar.Brand href="#home">{icon}</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">      
    </Nav>
    <Nav>
      <Nav.Link href="#speakers">Featured Speakers</Nav.Link>
      <Nav.Link href="#agenda">Conference Sessions</Nav.Link>
      <Nav.Link href="#highlights">Program Highlights</Nav.Link>
      <Nav.Link href="#plan">Planning Your Trip</Nav.Link>
      <Nav.Link href="#register">Register Now</Nav.Link>
      <Nav.Link href="#faq">FAQs</Nav.Link>
      <Nav.Link href="#contact" data-toggle="modal">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }


  

export default NavbarSimple;

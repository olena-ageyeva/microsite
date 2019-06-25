import React, { Component } from 'react';
import './App.css';
import { Link } from "react-router-dom";
import { Image,Nav, NavDropdown,Navbar, NavItem, FormGroup, FormControl, Button, Grid, Row, Thumbnail} from "react-bootstrap";
//import Routes from './components/routes/Routes';
import { connect } from 'react-redux';
import logo from './images/Commonwealth_Logo.svg'
import NavbarPage from './components/NavbarPage';
import NavbarSimple from './components/NavbarSimple';
import OTBootstrap from './components/BootstrapHTML/OTBootstrap';
import Pills from './components/Pills';

class App extends Component{
  
  render(){
  return (
   <div>
   <OTBootstrap />
   <br/><br/>   <br/><br/> <br/><br/> <br/><br/> 

   <NavbarPage />
   <br/><br/>   <br/><br/>
   <NavbarSimple />
   </div>
   
    );
  }
}

  

export default App;

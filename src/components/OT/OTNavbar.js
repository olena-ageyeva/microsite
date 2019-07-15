import React, { Component } from 'react';
import logo from '../../images/Commonwealth_Logo.svg'

class OTNavbar extends Component {
    state = {
        text: "Featured Speakers"
      };

  handleChange=event=>{
    this.setState({
        text: event.target.value+"Speakers"
    })
  }

  render(){

    var icon = (
        <span className="logo">
          <a href="/">
            <img src={logo} alt="logo" /></a>
        </span>
      );
    
  return (
<nav class="navbar navbar-expand-lg navbar-light fixed-top d-print-none" role="navigation">
    <a class="navbar-brand" href="#top" mr-auto id="topLogo">{icon}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarHeader" aria-controls="navbarHeader" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
     <div id="navbarHeader" class="navbar-collapse collapse">
       <ul class="navbar-nav ml-auto nav-jump-links ml-auto"> 
           
           <li class="nav-item ">
                 <a class="nav-link" href="#speakers" data-track="topnav > Featured Speakers">Featured Speakers</a>
           </li>
           <li class="nav-item ">
                <a class="nav-link" href="#agenda" data-track="topnav > Conference Sessions">Conference Sessions</a>
            </li>    
           <li class="nav-item ">
                 <a class="nav-link" href="#highlights" data-track="topnav > Program Highlights">Program Highlights</a>
            </li>     
           <li class="nav-item ">
                <a class="nav-link" href="#planning" data-track="topnav > Planning Your Trip">Planning Your Trip</a>
            </li>    
           <li class="nav-item ">
                <a class="nav-link" href="#register" data-track="topnav > Register Now">Register Now</a>
            </li>    
           <li class="nav-item ">
                <a href="#" class="nav-link" data-toggle="modal" data-target="#m-3679" data-track="topnav modals > FAQs">FAQs</a>
            </li>    
                
           <li class="nav-item ">
               
                <a href="#" class="nav-link" data-toggle="modal" data-target="#m-3680" data-track="topnav modals > Contact Us">Contact Us</a>
                
            </li>
        </ul>
        <div class="navbar-links navbar-nav">
           <p class="nav-jump-links"><a href="#pageTop" class="navbar-link" data-track="topnav > hero">Home</a></p>
           
        </div>
    </div>
</nav>

  );

}
}


export default OTNavbar;

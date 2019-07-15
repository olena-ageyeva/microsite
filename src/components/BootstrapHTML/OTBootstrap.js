
import React, { Component } from 'react';
import OTBootstrapNavbar  from './OTBootstrapNavbar';
import OTBootstrapCarousel  from './OTBootstrapCarousel';
import logo from '../../images/Commonwealth_Logo.svg'
import { NOTFOUND } from 'dns';

function OTBootstrap(){
  
  
  return (
    <div>
      <OTBootstrapNavbar />    
      <OTBootstrapCarousel />
    </div> 
    );

  }


  

export default OTBootstrap;

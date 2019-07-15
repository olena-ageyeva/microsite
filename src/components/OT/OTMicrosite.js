import React, { Component } from 'react';
import OTNavbar  from './OTNavbar';
import OTCarousel  from './OTCarousel';
import OTSection  from './OTSection';
import OTBanner  from './OTBanner';
import OTSection2  from './OTSection2';
import OTFooter  from './OTFooter';
//import logo from '../../images/Commonwealth_Logo.svg'
//import { NOTFOUND } from 'dns';

function OTMicrosite(){
  
  
  return (
      <div>
        <OTNavbar />  
        <OTCarousel />  
        <OTSection />      
        <OTBanner />  
        <OTSection2 />
      </div>
    );

  }


  

export default OTMicrosite;

import React, { Component } from 'react';
import OTNavbar  from './OTNavbar';
import OTCarousel  from './OTCarousel';
import OTSection  from './OTSection';
import OTBanner  from './OTBanner';
import OTSection2  from './OTSection2';
import OTSection3  from './OTSection3';
import OTTabs  from './OTTabs';
import OTTabs2  from './OTTabs2';
import OTFooter  from './OTFooter';
//import logo from '../../images/Commonwealth_Logo.svg'
//import { NOTFOUND } from 'dns';

function OTMicrosite(){
  
  
  return (
      <div class="m-0 p-0">
        <OTNavbar />  
        <OTCarousel />  
        <OTSection />      
        <OTBanner />  
        <OTSection2 />
        <OTSection3 />
        <OTTabs />
        <OTTabs2 />
        <OTFooter /> 
        
      </div>
    );

  }


  

export default OTMicrosite;

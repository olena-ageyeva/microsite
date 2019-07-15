import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
//import logo from '../../images/Commonwealth_Logo.svg'

class OTCarousel extends Component {
    
  render(){
    return(
      <Carousel className="carousel carousel-fade text-dark" style={{height: '300px'}} bg-danger>  
        <Carousel.Item>
            <Carousel.Caption className="text-dark">
                <h3>cheers to community</h3>
            </Carousel.Caption>
        </Carousel.Item>      

        <Carousel.Item >
            <Carousel.Caption className="text-dark">
                <h3>commonwealth 2019<br/>national conference</h3>
            </Carousel.Caption>
        </Carousel.Item>      

        <Carousel.Item>
            <Carousel.Caption className="text-dark" >
                <h3>commonwealth 2019<br/>national conference</h3>
                <p>October 2&ndash;5, 2019 at Gaylord Rockies Resort & Convention Center in Aurora, Colorado</p>
            </Carousel.Caption>
        </Carousel.Item>                 
    </Carousel>            
    )
}
}

export default OTCarousel

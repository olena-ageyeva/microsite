import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
//import logo from '../../images/Commonwealth_Logo.svg'

class OTCarousel extends Component {
    
  render(){
    return(
        
            <div id="heroCarousel" class="carousel carousel-fade" data-ride="carousel" style={{height: '300px'}}>

                {/*carousel slides*/}
                <div class="carousel-inner" role="listbox">

                    <div class="carousel-item active">

                        <div class="carousel-caption text-dark text-uppercase" style={{fontSize: '4em'}}>
                            <div class="carousel-item--upper">cheers to community</div>

                        </div>
                    </div>
                    <div class="carousel-item">

                        <div class="carousel-caption text-dark text-uppercase">
                            <div class="carousel-item--upper">cheers to community</div>
                            <div class="carousel-item--lower"><span class="carousel-slide2-1">Celebrating where we've been,</span><span class="carousel-slide2-2"> where we are,</span><span class="carousel-slide2-3"> and where we're going</span></div>
                        </div>
                    </div>                    
                    <div class="carousel-item">

                        <div class="carousel-caption text-dark text-uppercase">
                            <div class="carousel-item--upper">commonwealth 2019<br/>national conference</div>

                        </div>
                    </div>
                    <div class="carousel-item">

                        <div class="carousel-caption text-dark text-uppercase">
                            <div class="carousel-item--upper">commonwealth 2019<br/>national conference</div>
                            <div class="carousel-item--lower">October 2&ndash;5, 2019 at Gaylord Rockies Resort & Convention Center in Aurora, Colorado</div>
                        </div>
                    </div>
                </div>

                 
        {/* nav pills */}
        <ol class="carousel-indicators">
            
        </ol>
        {/* carousel controls */}
        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-slide="prev" data-track="hero carousel left control">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#heroCarousel" role="button" data-slide="next" data-track="hero carousel right control">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
        </a>
        
              

            </div>

        

    )

    }
}

export default OTCarousel

import React, { Component } from 'react';


class OTSection3 extends Component {

  render(){

    
  return (
    <div id="highlights" class="container-fluid">
    <h2 class="text-center">Program Highlights</h2>
    <div class="card-deck justify-content-center  w-50 mx-auto">
        <div class="card text-center">                 
        <img src="https://dev.commonwealth.com/conferences/national-conference-2019/images/Icon_Giving_Back.svg" class="card-img-top mx-auto px-3" />
            <div class="card-body">
                <h4 class="card-title">Commonwealth Gives Back</h4>
                <p class="card-text">Continuing our commitment to bettering the lives of those around us, Commonwealth will partner with a local organization for a morning of giving back.</p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary btn-page IEbuttonEase" data-toggle="modal" data-target="#m-3773" data-track="Commonwealth Gives Back modal">
                    <span class="vcenter">Learn More</span>
                </button>
            </div>
         </div>

                                                 
        <div class="card text-center">
        <img src="https://dev.commonwealth.com/conferences/national-conference-2019/images/Icon_Evening_Event.svg" class="card-img-top mx-auto px-3" />
            <div class="card-body">
                <h4 class="card-title">Evening Events</h4>
                <p>Learn about our upcoming receptions and evening events, and don’t miss the details about our final night!</p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary btn-page IEbuttonEase" data-toggle="modal" data-target="#m-3774" data-track="Evening Events modal">
                <span class="vcenter">Event Snapshot</span>
                </button>
            </div>
         </div>



                </div>

            </div>
  );

}
}


export default OTSection3;
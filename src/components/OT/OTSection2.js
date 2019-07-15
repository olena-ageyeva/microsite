import React, { Component } from 'react';


class OTSection2 extends Component {

  render(){

    
  return (
    <div id="agenda" class="container-fluid mt-5 mb-5">
    <h2 class="text-center m-5">Agenda and More</h2>

    <div class="card-deck w-50 mx-auto">
        <div class="card text-center">
            <img src="https://dev.commonwealth.com/conferences/national-conference-2019/images/Icon_Agenda.svg" class="card-img-top px-5" />
            <div class="card-body">                       
                <h4 class="card-title">Conference<br />Agenda</h4>
                <p class="card-text">Learn about sessions, including an optional preconference workshop, to plan your experience.</p>
            </div>
            <div class="card-footer">
                <button type="button" class="btn btn-primary btn-page IEbuttonEase" data-toggle="modal" data-target="#3766" data-track="Conference Agenda modal">

                    <span class="vcenter">View Agenda</span>
                </button>
            </div>                    
        </div>

        <div class="modal fade" id="m-3766" tabindex="-1" role="dialog" aria-labelledby="m-3766Label" aria-hidden="true">
                       <div class="modal-dialog">
                            <div class="modal-content">
                                        <div class="modal-header d-block d-sm-none">
                                            <button type="button" class="close" data-dismiss="modal" data-track="speaker modal > close">
                                                <span aria-hidden="true">&times;</span><span class="sr-only">Close</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                           
                                        </div>
                            </div>
                       </div>
                   </div>

        

                  
              
        <div class="card px-5 text-center">
            <img src="https://dev.commonwealth.com/conferences/national-conference-2019/images/Icon_Resources.svg" class="card-img-top px-5" />
                 <div class="card-body">
                                    <h4 class="card-title">Featured<br />Resources</h4>
                                    <p>Find out about our CyberCafé, Tech Desk, home office booths, social media, and mobile app.</p>
                                </div>
                 <div class="card-footer">
                     <button type="button" class="btn btn-primary btn-page IEbuttonEase" data-toggle="modal" data-target="#m-3767" data-track="Featured<br>Resources modal">
                                     <span class="vcenter">View Resources</span>
                                    </button>
                 </div>
       </div>

              
                
       <div class="card px-5 text-center">
           <img src="https://dev.commonwealth.com/conferences/national-conference-2019/images/Icon_Education.svg" class="card-img-top px-5" />
                <div class="card-body">
                    <h4 class="card-title">Continuing<br />Education</h4>
                    <p>Earn designation and Firm Element CE credits.</p>
                </div>
               
                <div class="card-footer">
                    <button type="button" class="btn btn-primary btn-page IEbuttonEase" data-toggle="modal" data-target="#m-3768" data-track="Continuing<br>Education modal">
                        <span class="vcenter">View Credit Details</span>
                    </button>
                </div>
      </div>

       </div>

  </div>


  );

}
}


export default OTSection2;
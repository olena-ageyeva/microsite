import React, { Component } from 'react';


class OTFooter extends Component {

  render(){

    
  return (


    <div id="register" class="container-fluid mx-auto text-center p-5 m-5 bg-success text-white">
      <h2 class="text-center pb-5">Register</h2>
      <p>Commonwealth's 2019 National Conference will take place October 2–5, 2019,<br />
         at the Gaylord Rockies Resort &amp; Convention Center in Denver, Colorado.</p>
      <h4 >I have read everything, and I am ready to register:</h4>
      <button class="btn btn-primary btn-page IEbuttonEase" data-target="/Applications/EventManagement/Registration?eCode=e15aa2d2-40f2-455d-a2e7-336e278433de" target="_blank" value="Register Now"><span>Register Now</span></button>
    </div>
  );

}
}


export default OTFooter;
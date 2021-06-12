import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import "./style.css";


import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

import InstagramIcon from '@material-ui/icons/Instagram';

import Form  from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';




function Footer(){
return(
  <Jumbotron fluid className="jumbotron" >

<footer className="footer-distributed">

  

<div className="row">
  <div className="column side">
  <h4>Follow Us</h4>
  <a href="#"><FacebookIcon/></a>
  <a href="#"><InstagramIcon/></a>
  <a href="#"><TwitterIcon/></a>
  </div>
  
  <div className="column middle">
    <h4>Subscribe Now</h4>
    <p>Signup For Our Newsletter To Get More Updates On Different Food 
    And New Recipies Launch</p>
   
  </div>
    
    
  <div className="column side">
  <Form inline>
      <FormControl
        type="text"
        placeholder="Enter your email address"
        className="mr-sm-2"
        style={{borderRadius: "5px"}}
      />
      <Button variant="light"><ChevronRightIcon/></Button>
    </Form>

  
  </div>
</div>

</footer>

<footer className="footer">


<div className="rowfooter">
  <div className="column f1" >
    
<div className="clearfix">
  <div className="foot" >
  <a href="#">Menu</a>
  </div>
  <div className="foot" >
  <a href="#">Blog</a>
  </div>
  <div className="foot" >
  <a href="#">Our Teams</a>
  </div>

  <div className="foot" >
  <a href="#">Plans</a>
  </div>
  <div className="foot" >
  <a href="#">Cookbook</a>
  </div>
  <div className="foot" >
  <a href="#">Careers</a>
  </div>

  <div className="foot" >
  <a href="#">Delivery</a>
  </div>
  <div className="foot" >
  <a href="#">Careers</a>
  </div>
  <div className="foot" >
  <a href="#">Press</a>
  </div>
  <div className="foot" >
  <a href="#">About Us</a>
  </div>

  <div className="foot" >
  <a href="#">Packaging</a>
  </div>

  
 
  

  

</div>

<div className="footer-support">
    <p>FOR QUICK CUSTOMER SUPPORT</p>
    <Button variant="light" >CLICK HERE</Button>{' '}
  </div>
 

  </div>
  <div className="column f2" >
  <p>Contact us :</p>
  <p><EmailIcon  />info.kehtech@gmail.com</p>
  <p><PhoneIcon/>044-2xx2xx</p>
  
  </div>
  <div className="column f2" >
  <a href="#">Privacy statement</a>
  <a href="#">Food security certification</a>
  <a href="#">Return policy</a>
  <a href="#">Terms and Condition</a>

  {/* <p>@Chef@Home</p> */}
  {/* <p>A Dakshin-E-Bazaar Product</p> */}
  
  </div>
</div>




</footer>

  </Jumbotron>

);

}

export default Footer;


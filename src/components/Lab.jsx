import React from "react";
import { Container } from "react-bootstrap";
import  Carousel from "react-bootstrap/Carousel";
import "./Lab.css"
export const Lab =() =>{
    return(
        <div>
            {/*-------slide show started------*/}

           <Container className="slideshow_lab">
               <Carousel interval={4500}>
                   <Carousel.Item>
                       <img className="d-block w-100" src={require("./Images/praco1.png")} alt=""/>
                      <Carousel.Caption>

                          </Carousel.Caption> 
                   </Carousel.Item>

                   <Carousel.Item>
                       <img className="d-block w-100" src={require("./Images/praco2.png")} alt=""/>
                      <Carousel.Caption>

                          </Carousel.Caption> 
                   </Carousel.Item>

                   <Carousel.Item>
                       <img className="d-block w-100" src={require("./Images/praco3.png")} alt=""/>
                      <Carousel.Caption>

                          </Carousel.Caption> 
                   </Carousel.Item>
               </Carousel>
               </Container>

               {/*-------slide show ended------*/}

               <br />
               <br />

               <Container >
                  <div className="contact_lab">
                      <div className="contact_pic">
                         
                        <img src="https://www.practo.com/tests/public/images/call_to_order.svg" alt="" />
                         
                         <div>
                        <p>Need help with booking your test?</p>
                        <p>Our experts are here to help you</p>
                         </div>
                      </div>
                      <div className="contact_num">
                          
                          <div>
                         <img src = "https://www.practo.com/tests/public/icons/call-to-order.svg" alt="" />
                         </div>
                           <h4>+91 8045684087</h4> 
                      </div>
                 </div> 
               </Container>
               <br />
               <Container>
                   <div className="promo_code">
                   <h4>Coupons for lab tests</h4>
                   
                   <div className="promo_img">
                       <img src={require("./Images/promo1.png")} alt=""/>
                       <img src={require("./Images/promo2.png")} alt=""/>
                   </div>
                   </div>
               </Container>

               <br />
               <Container>
               
               <div className="top_tests">
               <h4>Top Booked Diagnostic Tests</h4>
               
                  
                 
               </div>
               </Container>
        </div>
    )
}
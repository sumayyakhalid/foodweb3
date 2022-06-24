import React from "react";
import pic1 from '../images/fb.png'
import pic2 from '../images/whatsapp.png'
import pic3 from '../images/insta.png'

export default function Footer() {
    return (
    
          <>
          <section id="contact" style={{textAlign:'center'}}>
          <div class="footer">
   

        <img src={pic1} style={{height:'30px',margin: '5px'}} alt=""/> 
        <img src={pic2} style={{height:'30px',margin: '5px'}} alt=""/> 
        <img src={pic3} style={{height:'30px',margin: '5px'}} alt=""/> 

   
   
        <h2>Prepared by Sumayya Khalid</h2>
    </div>
            </section>
          </>

        

    );
}
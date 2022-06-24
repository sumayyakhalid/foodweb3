import React from 'react';
import pic from '../images/pngtree-restaurant-logo-design-vector-template-png-image_5441058-removebg-preview.png';
 import '../App.css'
export default function Header() {
  return (
    <header className="block row center">
      <div className="nav">
      <div className="headerlogo">  
<img src={pic}  height={100} width={100} /> 
</div>
      <ul>
     
      <li><a href="#category">Categories</a></li>
      <li><a href="#cart">CartItems</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
      </div>

  
      
    </header>
  
  );
}
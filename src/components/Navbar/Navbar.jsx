import React from "react";
import { useState,useEffect } from "react";
import "./Navbar.css";
import logo from '../../assets/logo.png'

const Navbar = () => {

  const [sticky,setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY > 50 ? setSticky(true) :setSticky(false);
    })
  },[]);


  return (
    <nav className={`container ${sticky ? 'dark-nav': ' '}`}>
      <img src={logo} alt="" className="logo" />
      <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Testimonials</li>
        <li>Campus</li>
        <li><button className="btn">Contact us</button></li>
      </ul>
    </nav>  
  );
};
export default Navbar;

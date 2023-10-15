import React, { useState } from "react";
import "./navbar.css";
import { FaHome } from "react-icons/fa";
import { HiOutlineMenuAlt4 } from "react-icons/hi";
import {FaRegTimesCircle} from 'react-icons/fa'
const Navbar = () => {
    const [click,setClick]=useState(false);
    const handleClick=()=>{
        setClick(!click)
    }
  return (
    <div className="navbar">
      <div className="container">
        <div className="nav-left">
          <h1>
            <span>
              <FaHome />
              Real
            </span>
            Estate
          </h1>
        </div>
        <diV className="nav-middle">
          <button className="btn">SignIn</button>
        </diV>
        <ul className= {click?"nav-right active":"nav-right"}>
          <li>Home</li>
          <li>Search</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="hamburger" onClick={handleClick}>
         {click ? (<FaRegTimesCircle className="icon"></FaRegTimesCircle>):(<HiOutlineMenuAlt4 className="icon"></HiOutlineMenuAlt4>)} 
         </div>
      </div>
    </div>
  );
};

export default Navbar;

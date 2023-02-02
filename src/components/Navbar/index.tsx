import { logDOM } from '@testing-library/react'
import '../style.css'
import React, { useState, useEffect } from 'react';
import logo from '../cropped.png';
import { FaShoppingBag } from 'react-icons/fa'
import { FaSortDown } from 'react-icons/fa'
import { Category } from './Category';



export function Navbar() {
 
  return <section id="header">
    <a href="">
      <img src={logo} height="60px" width="90px" className="logo" alt="logo" /></a>
    <div>
      <ul id="navbar">
        <li ><a className="active" href="">Home</a></li>
        <li><a href="">Shop</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
       <Category/>
        <li><a><FaShoppingBag /></a></li>
      </ul>
    </div>
  </section>
}
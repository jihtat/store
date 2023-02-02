import { logDOM } from '@testing-library/react'
import '../style.css'
import React, { useState, useEffect } from 'react';
import {NavLink} from 'react-router-dom';
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
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/Shop">Shop</NavLink></li>
        <li><NavLink to="/About">About</NavLink></li>
        <li><NavLink to="/Contact">Contact</NavLink></li>
       <Category/>
        <li><NavLink to="/Contact"><FaShoppingBag /></NavLink></li>
      </ul>
    </div>
  </section>
}
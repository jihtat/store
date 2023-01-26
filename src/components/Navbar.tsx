import { logDOM } from '@testing-library/react'
import './style.css'
import logo from './lasercut1.png';
import {FaShoppingBag} from 'react-icons/fa'
import {FaSortDown} from 'react-icons/fa'



export function Navbar(){
  const categories = ["Keychains","Phonecases", "Desk organizers", "Wooden Stands", "Wooden accessories"]
return <section id="header">
<a href="">
    <img src={logo} height="60px" width="90px"  className="logo" alt="logo"/></a>
<div> 
<ul id="navbar">
<li ><a className="active" href="">Home</a></li>
<li><a href="">Shop</a></li>
<li><a href="">About</a></li>
<li><a href="">Contact</a></li>
<div className="dropdown">
    <div className="drop">
      <div >Categories<FaSortDown/></div>
     <div className="dropdown-list">
      <a href="#">Keychains</a>
      <a href="#">Phonecases</a>
      <a href="#">Desk organizers</a>
      <a href="#">Wooden Stands</a>
      <a href="#">Wooden accessories</a>
    </div>
    </div>
  </div> 
<li><a><FaShoppingBag/></a></li>
</ul>
</div>
</section> 
} 
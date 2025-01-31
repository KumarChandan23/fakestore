import React, { Fragment } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css'
import { FaShopify } from "react-icons/fa";

const Navbar = () => {
  const user_id = localStorage.getItem("userid");
  const navigate = useNavigate();
  const logout = () => {
    navigate('/allproducts');
    localStorage.clear(user_id);
  }
  
  return (
    <nav id={style.navbar}>
      <figure><h1><FaShopify /> Fashion</h1></figure>
      <ul>
        <li><NavLink  to="/" className={({isActive})=> isActive? style.active : ""}>Home</NavLink></li>
        <li><NavLink  to="/allproducts" className={({isActive})=> isActive? style.active : ""}>All Products</NavLink></li>
        {(user_id) ? (
          <li><NavLink onClick={logout} className={({isActive})=> isActive? style.active : ""}>Logout</NavLink></li>
        ) : (
          <Fragment>
            <li><NavLink to="/login"  className={({isActive})=> isActive? style.active : ""}>Login</NavLink></li>
            <li><NavLink to="/signup" className={({isActive})=> isActive? style.active : ""}>SignUp</NavLink></li>
          </Fragment>
        )
        }
      </ul>
    </nav>
  )
}

export default Navbar
import React, { Fragment, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css'
import { FaShopify } from "react-icons/fa";

const Navbar = () => {
  const user_id = localStorage.getItem("userid");
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);

  const logout = () => {
    navigate('/allproducts');
    localStorage.clear(user_id);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) { // Change 100px as per your requirement
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav id={style.navbar} className={isScrolled ? style.fixed : ""}>
      <figure>
        <Link to="/">
        <h1><FaShopify /> Electronics</h1>
        </Link>
        </figure>
      <ul className={style.nav_item_container}>
        <li><NavLink to="/" className={({ isActive }) => `${style.home} ${isActive ? style.active : ""}`}>Home</NavLink></li>
        {(user_id) ? (
          <li><NavLink onClick={logout} className={({ isActive }) => `${style.logout} ${isActive ? style.active : ""}`}>Logout</NavLink></li>
        ) : (
          <Fragment>
            <li><NavLink to="/login" className={({ isActive }) => `${style.login} ${isActive ? style.active : ""}`}>Login</NavLink></li>
            <li><NavLink to="/signup" className={({ isActive }) => `${style.signup} ${isActive ? style.active : ""}`}>SignUp</NavLink></li>
          </Fragment>
        )
        }
      </ul>
    </nav>
  )
}

export default Navbar
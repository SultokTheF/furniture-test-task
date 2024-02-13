import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

import logo from "../../../assets/images/Logo.png";

const Navbar:React.FC = () => {

  return (
    <>  
      <nav className="navbar">
      <Link to="/"><img src={logo} alt="Logo" className="navbar__logo" /></Link>
        <ul className="navbar__list">
          <li className="navbar__item"><Link to="/furnitures">Мебель</Link></li>
          <li className="navbar__item"><Link to="about">О нас</Link></li>
          <li className="navbar__item"><Link to="contact">Свяжитесь с нами</Link></li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
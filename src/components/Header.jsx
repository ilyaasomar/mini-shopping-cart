import React from "react";
import { Link } from "react-router-dom";
import "../style.css";
const Header = () => {
  return (
    <div className="menu">
      <Link to="/" className="logo">Reactify</Link>
      <ul className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cart">Cart</Link>
      </ul>
      <Link to="/cart">
        <span className="cart">5</span>
      </Link>
    </div>
  );
};

export default Header;

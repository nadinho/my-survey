import React from "react";
import "./Header.css";
import Logo from "./burgermenu.png";

function Header() {
  return (
    <header className="header">
      <img src={Logo} className="logo" alt="Logo" />
      <h1 className="title">My Survey</h1>
    </header>
  );
}

export default Header;

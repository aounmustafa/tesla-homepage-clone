import React from "react";
import TeslaLogo from "./assets/teslaLogoSmall.svg";
import "./Header.css";
const Header = () => {
  return (
    <div className="header">
      <img className="logo" src={TeslaLogo} alt="Tesla Logo" />

      <div className="header_center">
        <p>Model S</p>
        <p> Model 3</p>
        <p>Model X</p>
        <p> Model Y</p>
        <p>Solar Roof</p>
        <p>Solar Panels</p>
      </div>
      <div className="header_right">
        <p> Shop</p>
        <p> Account</p>
        <p> Menu</p>
      </div>
    </div>
  );
};

export default Header;

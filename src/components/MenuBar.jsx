import React from 'react';
import ReactDOM from 'react-dom';
import '../../public/scss/_menubar.scss';

const MenuBar = (props) => {
  return (
    <nav className="bg_border">
      <div className="header">
        <img className="logo" src="../assets/logo.png" height="25px" alt="Sparta Banana" />
        <div className="right">
          <span id="phone" className="header-right">212.555.5555</span>
          <span id="login" ><a href="#" className="header-right">LOGIN</a></span>
          <img className="header-right hamburger" src="../assets/hamburger.png" alt="hamburger" />
        </div>
      </div>
    </nav>
  );
};

export default MenuBar;

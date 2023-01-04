import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import { useState } from "react";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleClose = () => {
    setSidebarOpen(false);
  };

  return (
    <header className="header">
      <a href="/" className="logo-wrapper">
        <img src={Logo} alt="Logo" />
      </a>
      <button onClick={toggleSidebar} className="icon-button">
        <img src={IconMenu} alt="Icon Menu" className="img" />
      </button>
      <Sidebar open={sidebarOpen} onClose={handleClose}>
        <nav className="menu">
          <ul className="menu-list">
            <li className="menu-list-item">Home</li>
            <li className="menu-list-item">New</li>
            <li className="menu-list-item">Popular</li>
            <li className="menu-list-item">Trending</li>
            <li className="menu-list-item">Categories</li>
          </ul>
        </nav>
      </Sidebar>
    </header>
  );
};

export default Header;

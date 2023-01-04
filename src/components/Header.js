import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Menu from "./Menu";

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
      <Menu desktop />
      <Sidebar open={sidebarOpen} onClose={handleClose}>
        <Menu />
      </Sidebar>
    </header>
  );
};

export default Header;

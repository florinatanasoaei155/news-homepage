import Logo from "../assets/images/logo.svg";
import IconMenu from "../assets/images/icon-menu.svg";

const Header = () => {
  return (
    <header>
      <a href="/">
        <img src={Logo} alt="Logo" />
      </a>
      <button>
        <img src={IconMenu} alt="Icon Menu" className="img" />
      </button>
      <nav>
        <ul>
          <li>Home</li>
          <li>New</li>
          <li>Popular</li>
          <li>Trending</li>
          <li>Categories</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

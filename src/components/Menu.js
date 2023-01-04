const Menu = ({ desktop }) => {
  return (
    <nav className={`menu${desktop ? " desktop" : ""}`}>
      <ul className="menu-list">
        <li className="menu-list-item">
          <a href="#home">Home</a>
        </li>
        <li className="menu-list-item">
          <a href="#new">New</a>
        </li>
        <li className="menu-list-item">
          <a href="#popular">Popular</a>
        </li>
        <li className="menu-list-item">
          <a href="#trending">Trending</a>
        </li>
        <li className="menu-list-item">
          <a href="#cateogories">Categories</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;

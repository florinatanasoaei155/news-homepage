import IconMenuClose from "../assets/images/icon-menu-close.svg";

const Sidebar = (props) => {
  const { open, children, onClose } = props;

  return (
    <div className={`sidebar${open ? " open" : ""}`}>
      <div className="sidebar-paper">
        <div className="sidebar-close-icon-wrapper">
          <button className="icon-button" onClick={onClose}>
            <img src={IconMenuClose} alt="Close Sidebar" />
          </button>
        </div>

        <div className="sidebar-content">{children}</div>
      </div>
    </div>
  );
};

export default Sidebar;

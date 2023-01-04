import { useRef } from "react";
import { useOnClickOutside } from "../hooks";
import IconMenuClose from "../assets/images/icon-menu-close.svg";

const Sidebar = (props) => {
  const { open, children, onClose } = props;
  const ref = useRef();

  useOnClickOutside(ref, onClose);

  return (
    <div className={`sidebar${open ? " open" : ""}`}>
      <div className="sidebar-paper" ref={ref}>
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

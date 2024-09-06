import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import './Menu.scss';

const Menu = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="dropdown-container" onClick={() => setIsOpen(false)}>
      <div className="menu-container"onClick={(e) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
      }}>

      <div className="menu-label" >
        Menu
      </div>
      <RxHamburgerMenu size={"2vw"}  />
        </div>
      <div className={`dropdown-menu ${isOpen ? 'is-open' : ''}`}>
        <div className="menu-item studio">Studio</div>
        <div className="menu-item">Rambler</div>
        <div className="menu-item">Dullcrato</div>
        <div className="menu-item">Tales</div>
        <div className="menu-item">Laboratory</div>
        <div className="menu-item">Contact</div>
      </div>
    </div>
  );
}

export default Menu;

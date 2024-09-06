import Menu from './Menu';

import './header.scss';

function Header() {
  return (
    <div className="header-container">
      <div className="header-content">
        where only the bravest
        dare to tread
      </div>
      <Menu />
    </div>
  );
}

export default Header;

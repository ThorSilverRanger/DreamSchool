import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/MenuBar.scss';

const MenuBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="menu-bar">
      <div className={`burger-menu ${isMenuOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
        <div className="burger-menu-line"></div>
        <div className="burger-menu-line"></div>
        <div className="burger-menu-line"></div>
      </div>
      <ul className={`menu-items ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" className="menu-link">Головна</Link>
        </li>
        <li>
          <Link to="/about" className="menu-link">Про нас</Link>
        </li>
        <li>
          <Link to="/teachers" className="menu-link">Наші педагоги</Link>
        </li>
        <li>
          <Link to="/contact" className="menu-link">Контакти</Link>
        </li>
        <li>
          <Link to="/signup" className="menu-link sign-up">Зареєструватися</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MenuBar;
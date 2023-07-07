import MenuBar from './MenuBar';
import logo from '/img/logo.png';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo"  />
      </div>
      <MenuBar />
    </header>
  );
};

export default Header;

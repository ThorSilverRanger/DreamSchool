import MenuBar from './MenuBar';
import logo from '/img/logo.png';
import '../styles/Header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" width="150" height="150" />
      </div>
      <MenuBar />
    </header>
  );
};

export default Header;

import { Logo } from '../Logo';
import { NavBar } from '../NavBar';
import './styles.css';

export const Header = () => {
  return (
    <header className="header-wrapper">
      <Logo />
      <NavBar />
    </header>
  );
};

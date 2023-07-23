import { ReactComponent as HeartIcon } from '../../assets/icons/heart.svg';

import './style.css';

export const NavBar = () => {
  return (
    <nav className="nav-wrapper">
      <div className="nav-text-wrapper">
        <p className="nav-main-text">
          <span className="nav-sub-main-text">Architecture</span> Made With
        </p>
        <HeartIcon />
      </div>
      <div className="nav-links-wrapper">
        <a className="nav-link" href="#id">
          home
        </a>
        <a className="nav-link" href="#id">
          about
        </a>
        <a className="nav-link" href="#id">
          services
        </a>
        <a className="nav-link" href="#id">
          projects
        </a>
        <a className="nav-link" href="#id">
          news
        </a>
        <a className="nav-link" href="#id">
          Contact
        </a>
      </div>
    </nav>
  );
};

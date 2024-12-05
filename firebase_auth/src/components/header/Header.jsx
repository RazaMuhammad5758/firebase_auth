import React from 'react';
import './Header.scss';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">MyWebsite</a>
          <ul className="nav-links">
            <li>
              {/* Navigate to the Login page */}
              <NavLink 
                to="/login" 
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Login
              </NavLink>
            </li>
            <li>
              {/* Navigate to the Register page */}
              <NavLink 
                to="/register" 
                className={({ isActive }) => (isActive ? 'active-link' : '')}
              >
                Register New Account
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;

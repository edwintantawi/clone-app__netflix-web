import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import NotificationsIcon from '@material-ui/icons/Notifications';

import logo from '../../assets/logo.svg';

import './index.css';
import { Avatar } from '@material-ui/core';
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="nav__side">
        <img className="nav__logo" src={logo} alt="Netflix" />
        <ul className="nav__menu">
          <li className="nav__item nav__item--active">Home</li>
          <li className="nav__item">TV Shows</li>
          <li className="nav__item">Movies</li>
          <li className="nav__item">Latest</li>
          <li className="nav__item">My List</li>
        </ul>
      </div>
      <div className="nav__side">
        <ul className="nav__menu">
          <li className="nav__item">
            <SearchIcon />
          </li>
          <li className="nav__item">DVD</li>
          <li className="nav__item">
            <CardGiftcardIcon />
          </li>
          <li className="nav__item">
            <NotificationsIcon />
          </li>
          <li className="nav__item">
            <Avatar />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

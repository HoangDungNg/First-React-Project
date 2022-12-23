import React from 'react';
/** @jsxImportSource theme-ui */
import punkLogo from '../assets/header/cryptopunk-logo.png';
import searchIcon from '../assets/header/search.png';
import themeSwitchIcon from '../assets/header/theme-switch.png';
const Header = ({ setColorMode, colorMode, setOpen }) => {
  const onOpenModal = () => setOpen(true);

  return (
    <div className="header">
      <div className="logoContainer">
        <img src={punkLogo} className="punkLogo" alt="" />
      </div>

      <div className="searchBar" sx={{ backgroundColor: 'secondary' }}>
        <div className="searchIconContainer">
          <img src={searchIcon} alt="This is a search icon" />
        </div>
        <input
          className="searchInput"
          sx={{ color: 'text' }}
          placeholder="Collection, item or user..."
        />
      </div>

      <div className="headerItems">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className="headerActions">
        <div
          className="themeSwitchContainer"
          sx={{ backgroundColor: 'secondary' }}
          onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')}
        >
          <img src={themeSwitchIcon} alt="This is a theme switch icon" />
        </div>
      </div>

      <div className="loginButton" onClick={onOpenModal}>
        {' '}
        GET IN
      </div>
    </div>
  );
};

export default Header;

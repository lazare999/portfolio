import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import classes from './Header.module.css';

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  window.onscroll = function () {
    console.clear(); // Clear console for better readability (optional)
    console.log("Scroll position:", window.scrollY);
  };

  const scrollTo = (targetPosition) => {
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`${classes.header} ${classes[theme]}`}>
      <h1 className={classes.name}>$LaZaRe$</h1>
      <div className={classes.nav}>
        <p onClick={() => scrollTo(900)}>About me</p>
        <p onClick={() => scrollTo(1600)}>Services</p>
        <p onClick={() => scrollTo(900)}>Contact me</p>
        <div>
          <Toggle
            onChange={toggleTheme}
            checked={theme === 'dark'}
            icons={{
              unchecked: '🌞',
              checked: '🌜',
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

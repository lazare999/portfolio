import React, {useContext} from 'react';
import { ThemeContext } from '../../App';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';

import classes from './Footer.module.css'

const Footer = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`${classes.container} ${classes[theme]}`}>
            <h4 className={classes.footer}>© $LaZaRe$ 2023</h4>
            <div>
          <Toggle
            onChange={toggleTheme}
            checked={theme === 'dark'}
            icons={{
              unchecked: '🌞',
              checked: '🌜',
            }}
            className={`${classes.toggle} ${classes[theme]}`}
            />
            <label className={`${classes.label} ${classes[theme]}`}>{theme === 'light' ? 'change theme to dark' : 'change theme to light'}</label>
        </div>
        </div>
    )
}

export default Footer;
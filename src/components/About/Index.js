import React, { useContext } from 'react';
import { ThemeContext } from '../../App';
import classes from './About.module.css';

const About = () => {
    const { theme } = useContext(ThemeContext);
    const socialContainerData = [
        {
            social: 'Email Address',
            socialValue: 'https://mail.google.com/mail/u/0/#inbox',
            iconPath: '/icons/arroba.png',
        },
        {
            social: 'Git Hub',
            socialValue: 'https://github.com/lazare999',
            iconPath: '/icons/github.svg',
        },
        {
            social: 'LinkdIn',
            socialValue: 'https://www.linkedin.com/in/lazare-osiashvili-271011247/',
            iconPath: '/icons/linkedin.svg',
        },
        {
            social: 'Phone',
            socialValue: '+995 555 999 572',
            iconPath: '/icons/phone.png',
        },
    ];

    return (
        <div>
            <div className={`${classes.aboutContainer} ${classes[theme]}`}>
                <h1 className={`${classes.title} ${classes[theme]}`}>About</h1>
                <p className={`${classes.aboutText} ${classes[theme]}`}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore
                    magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur. Excepteur sint occaecat cupidatat non proident
                </p>
            </div>
            <div className={`${classes.socialsContainer} ${classes[theme]}`}>
                {socialContainerData.map((item, index) => (
                    <div key={index} className={classes.mapContainer}>
                        <img
                            src={process.env.PUBLIC_URL + item.iconPath}
                            alt={`${item.social} icon`}
                            className={classes.icon}
                        />
                        <p className={classes.social}>{item.social}</p>
                        <a className={classes.currentSocial} href={item.socialValue} target="_blank" rel="noopener noreferrer">
                            {item.socialValue}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About;

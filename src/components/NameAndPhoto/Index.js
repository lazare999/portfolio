import React, { useContext } from 'react';
import classes from './NameAndPhoto.module.css';
import { ThemeContext } from '../../App';

const NameAndPhoto = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${classes.container} ${classes[theme]}`}>
      <div className={classes.titleContainer}>
        <h1 className={classes.name}>Hi, I am <br /> Lazare Osiashvili</h1>
        <p className={classes.name2}>Frontend Developer</p>
        <div className={classes.buttonContainer}>
          <button className={classes.downloadButton}>Download CV</button>
          <button className={classes.learnMoreButton}>Learn More</button>
        </div>
      </div>
      <img src='lazare.jpg' alt='portfolio' className={classes.img} />
    </div>
  );
};

export default NameAndPhoto;

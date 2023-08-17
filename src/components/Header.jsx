import React from 'react';
import classes from '../styles/Header.module.css';
import mealsImage from '../assets/meals.jpg';

function Header() {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </>
  );
}

export default Header;

import React from 'react';
import classes from '../styles/Header.module.css';

function HeaderCartButton() {
  return (
    <button type="button" className={classes.button} onClick={() => console.log('clicked')}>
      <span className={classes.icon} />
      <span>Your Cart</span>
      <span className={classes.badge}>??</span>
    </button>
  );
}

export default HeaderCartButton;

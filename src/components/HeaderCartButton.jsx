import React, { useContext } from 'react';
import classes from '../styles/Header.module.css';
import CartIcon from './UI/CartIcon';
import { CartContext } from '../context/Context';

function HeaderCartButton() {
  const { totalQuantity } = useContext(CartContext);
  return (
    <button type="button" className={classes.button} onClick={() => console.log('clicked')}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
}

export default HeaderCartButton;

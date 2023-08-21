import React, { useContext } from 'react';
import { CartContext } from '../../context/Context';
import classes from '../../styles/Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

function Cart() {
  const { setCartIsShown, totalAmount, cart } = useContext(CartContext);
  const showCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <Modal onClose={showCartHandler}>
      <ul className={classes['cart-items']}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.quantity}
            price={item.price}
            // onRemove={cartItemRemoveHandler.bind(null, item.id)}
            // onAdd={cartItemAddHandler.bind(null, item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>
          $
          {' '}
          {totalAmount.toFixed(2)}
        </span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={showCartHandler} type="button">
          Close
        </button>
        {cart.length > 0 && <button className={classes.button} type="button">Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;

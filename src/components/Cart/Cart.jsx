import React, { useContext } from 'react';
import { CartContext } from '../../context/Context';
import classes from '../../styles/Cart.module.css';
import Modal from '../UI/Modal';
import CartItem from './CartItem';

function Cart() {
  const {
    setCartIsShown, totalAmount, cart, dispatch,
  } = useContext(CartContext);
  const disableCartHandler = () => {
    setCartIsShown(false);
  };
  // 購物車頁面增加商品
  const cartItemAddHandler = (id) => {
    dispatch({
      type: 'INCREMENT_QUANTITY',
      payload: { id, quantity: 1 },
    });
  };
  // 購物車頁面減少商品
  const cartItemRemoveHandler = (id) => {
    dispatch({
      type: 'DECREASE_QUANTITY',
      payload: { id },
    });
  };
  return (
    <Modal onClose={disableCartHandler}>
      <ul className={classes['cart-items']}>
        {cart.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.quantity}
            price={item.price}
            onRemove={() => cartItemRemoveHandler(item.id)}
            onAdd={() => cartItemAddHandler(item.id)}
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
        <button className={classes['button--alt']} onClick={disableCartHandler} type="button">
          Close
        </button>
        {cart.length > 0 && <button className={classes.button} type="button">Order</button>}
      </div>
    </Modal>
  );
}

export default Cart;

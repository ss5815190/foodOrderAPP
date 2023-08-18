import React, { useRef, useContext } from 'react';
import classes from '../../styles/Meals.module.css';
import { CartContext } from '../../context/Context';

function MealItem({
  // eslint-disable-next-line react/prop-types
  id, name, description, price,
}) {
  const amountInputRef = useRef();
  const { cart, setCart } = useContext(CartContext);
  // 檢查購物車有沒有該商品
  const checkCart = (checkId, quantity) => {
    if (CartContext.length !== 0) {
      const index = cart.findIndex((item) => item.id === checkId);
      // 找到的話更改數量
      if (index !== -1) {
        const updatedCart = [...cart];
        // 傳進來的quantity是字串 轉成數字加上去
        updatedCart[index].quantity += parseInt(quantity, 10);
        setCart(updatedCart);
      } else {
        setCart((prev) => [...prev,
          {
            id: amountInputRef.current.id,
            name,
            description,
            price,
            quantity: 1,
          }]);
      }
    } else {
      setCart((prev) => [...prev,
        {
          id: amountInputRef.current.id,
          name,
          description,
          price,
          num: 1,
        }]);
    }
  };
  // 加入購物車
  const onSubmit = (e) => {
    e.preventDefault();
    checkCart(amountInputRef.current.id, amountInputRef.current.value);
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <form className={classes.form} onSubmit={onSubmit}>
        <div className={classes.input}>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label htmlFor={id}>Amount</label>
          <input
            ref={amountInputRef}
            id={id}
            type="number"
            min="1"
            max="5"
            defaultValue="1"
          />
        </div>
        <button type="submit">+ Add</button>
      </form>
    </li>
  );
}

export default MealItem;

/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useRef, useContext } from 'react';
import classes from '../../styles/Checkout.module.css';
import { CartContext } from '../../context/Context';

const isEmpty = (value) => value.trim() === '';
const isFiveChars = (value) => value.trim().length === 5;

function Checkout({ onCancel, onSubmit, setIsSubmit }) {
  const { dispatch } = useContext(CartContext);
  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    // 表單驗證
    const formIsValid = !isEmpty(enteredName)
      && !isEmpty(enteredStreet)
      && !isEmpty(enteredCity)
      && isFiveChars(enteredPostalCode);
    if (!formIsValid) {
      console.log('input error!');
      return null;
    }
    // 送出訂單
    onSubmit({
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    });
    dispatch({ type: 'CLEAR' });
    setIsSubmit(true);
    return null;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="postal">Postal Code</label>
        <input minLength={5} maxLength={5} type="text" id="postal" ref={postalCodeInputRef} />
      </div>
      <div className={classes.control}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        {/* eslint-disable-next-line react/button-has-type */}
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}

export default Checkout;

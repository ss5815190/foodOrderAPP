import React from 'react';
import classes from '../../styles/Meals.module.css';

function MealItem({
  // eslint-disable-next-line react/prop-types
  name, description, price,
}) {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <form className={classes.form} onSubmit={(e) => { e.preventDefault(); console.log('submit'); }}>
        {/* eslint-disable-next-line react/button-has-type  */}
        <button>+ Add</button>
        {/* {!amountIsValid && <p>Please enter a valid amount (1-5).</p>} */}
      </form>
    </li>
  );
}

export default MealItem;

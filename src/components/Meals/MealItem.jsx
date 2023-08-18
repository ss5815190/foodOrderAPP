import React from 'react';
import classes from '../../styles/Meals.module.css';

function MealItem({
  // eslint-disable-next-line react/prop-types
  key, name, description, price,
}) {
  return (
    <li className={classes.meal} key={key}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{price}</div>
      </div>
    </li>
  );
}

export default MealItem;

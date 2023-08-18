import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 22.99,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 16.5,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 12.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 18.99,
    },
  ];
  const [mealItem, setMealItem] = useState(DUMMY_MEALS);
  useEffect(() => { console.log(cart); }, [cart]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{
      cart, setCart, mealItem, setMealItem,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

import React, { createContext, useState } from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

import React, {
  createContext, useState, useEffect, useReducer,
} from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartContextProvider({ children }) {
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
  const dummyMeals = [
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
  const [mealItem, setMealItem] = useState(dummyMeals);

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        return [...state, action.payload];
      case 'INCREMENT_QUANTITY':
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return { ...item, quantity: item.quantity + action.payload.quantity };
          }
          // 如果目前處理的不是目標商品，就保持原樣返回
          return item;
        });
      case 'DECREASE_QUANTITY':
        return state.map((item) => {
          if (item.id === action.payload.id) {
            if (item.quantity === 1) {
              // 返回 null 會在後面的 .filter(Boolean)過濾掉
              return null;
            }
            return { ...item, quantity: item.quantity - 1 };
          }
          // 如果目前處理的不是目標商品，就保持原樣返回
          return item;
        }).filter(Boolean);
      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(cartReducer, []);
  useEffect(() => {
    const newTotalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    const newTotalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    setTotalQuantity(newTotalQuantity);
    setTotalAmount(newTotalAmount);
  }, [cart]);
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{
      mealItem,
      setMealItem,
      totalQuantity,
      setTotalQuantity,
      cartIsShown,
      setCartIsShown,
      totalAmount,
      setTotalAmount,
      cart,
      dispatch,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

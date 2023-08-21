import React, {
  createContext, useState, useEffect, useReducer,
} from 'react';

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
export function CartContextProvider({ children }) {
  // const [cart, setCart] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [cartIsShown, setCartIsShown] = useState(false);
  const [totalAmount, setTotalAmount] = useState(0);
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
  // useEffect(() => { console.log('Cart ', cart); }, [cart]);

  const cartReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        setTotalQuantity(totalQuantity + 1);
        setTotalAmount(totalAmount + action.payload.price);
        return [...state, action.payload];
      case 'INCREMENT_QUANTITY':
        return state.map((item) => {
          if (item.id === action.payload.id) {
            setTotalQuantity(totalQuantity + action.payload.quantity);
            setTotalAmount(totalAmount
              + (item.price * action.payload.quantity));
            return { ...item, quantity: item.quantity + action.payload.quantity };
          }
          return item;
        });
      case 'DECREASE_QUANTITY':
        return state.map((item) => {
          if (item.id === action.payload.id) {
            setTotalQuantity(totalQuantity - 1);
            setTotalAmount(totalAmount - item.price);
            if (item.quantity === 1) {
              return null;
            }
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        }).filter(Boolean);
      default:
        return state;
    }
  };

  const [cart, dispatch] = useReducer(cartReducer, []);
  useEffect(() => { console.log('Cart ', cart, totalAmount.toFixed(2)); }, [cart]);
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

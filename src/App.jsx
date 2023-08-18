import React, { useContext } from 'react';
import Header from './components/Header/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import { CartContext } from './context/Context';

function App() {
  const { cartIsShown } = useContext(CartContext);
  return (
    <div className="App">
      {cartIsShown && <Cart />}
      <Header />
      <Meals />
    </div>
  );
}

export default App;

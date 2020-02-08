import './App.css';
import React from 'react';
import {Header} from './Header';
import {Products} from './Products';
import {Cart} from './Cart';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Products />
      <Cart />
    </div>
  );
};

import React from 'react';
import {useDispatch} from 'react-redux';
import {navigateToProducts} from './actions';

export const Cart = () => {
  const dispatch = useDispatch();
  const onClickNavigate = () => dispatch(navigateToProducts());
  return (
    <>
      <h2>Shopping Cart</h2>
      <p>Your shopping cart is empty.</p>
      <button className="nav-btn" onClick={onClickNavigate}>
        Continue Shopping
      </button>
    </>
  );
};

import React from 'react';
import {useDispatch} from 'react-redux';
import {navigateToProducts} from './actions';
import {CartState, useTypedSelector} from './reducers';

const isCartEmpty = (cart: CartState) =>
  cart.reduce((sum, x) => sum + x, 0) < 1;

export const Cart = () => {
  const cart = useTypedSelector(state => state.cart);
  const cartIsEmpty = isCartEmpty(cart);
  const dispatch = useDispatch();
  const onClickNavigate = () => dispatch(navigateToProducts());
  return (
    <>
      <h2>Shopping Cart</h2>
      {cartIsEmpty ? (
        <p>Your shopping cart is empty.</p>
      ) : (
        <p>There is something in your shopping cart.</p>
      )}
      <button className="nav-btn" onClick={onClickNavigate}>
        Continue Shopping
      </button>
    </>
  );
};

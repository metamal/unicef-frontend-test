import './Cart.css';
import React from 'react';
import {useDispatch} from 'react-redux';
import {navigateToProducts} from './actions';
import {CartState, useTypedSelector} from './reducers';
import {products} from './mock-data/product-list';

const makeRow = (name: string, price: number, i: number, quantity: number) => {
  const priceString = `$${price}`;
  const total = price * quantity;
  const totalString = `$${total}`;
  return (
    <tr key={i}>
      <td>{name}</td>
      <td className="u-right">{priceString}</td>
      <td className="u-right">{quantity}</td>
      <td className="u-right">{totalString}</td>
    </tr>
  );
};

const makeTableRows = (cart: CartState) => {
  return products.reduce((acc: JSX.Element[], {name, price}, i) => {
    const quantity = cart[i];
    if (quantity > 0) {
      acc.push(makeRow(name, price, i, quantity));
    }
    return acc;
  }, []);
};

const makeFootRow = (cart: CartState) => {
  const total = products.reduce((sum, {price}, i) => sum + price * cart[i], 0);
  const totalString = `$${total}`;
  return (
    <tfoot>
      <tr>
        <th className="u-right" colSpan={3}>
          Totals:
        </th>
        <th>{totalString}</th>
        <th> </th>
      </tr>
    </tfoot>
  );
};

interface ShoppingCartTableProps {
  cart: CartState;
}

const ShoppingCartTable = (props: ShoppingCartTableProps) => {
  const {cart} = props;
  const rows = makeTableRows(cart);
  const footRow = makeFootRow(cart);
  return (
    <table className="c-cart__table">
      <thead>
        <tr>
          <th className="u-left">Product</th>
          <th className="u-right">Price</th>
          <th className="u-right">Items</th>
          <th className="u-right">Total</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
      {footRow}
    </table>
  );
};

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
        <ShoppingCartTable cart={cart} />
      )}
      <button className="nav-btn" onClick={onClickNavigate}>
        Continue Shopping
      </button>
    </>
  );
};

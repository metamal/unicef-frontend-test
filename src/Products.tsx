import './Products.css';
import React from 'react';
import {useDispatch} from 'react-redux';
import {products} from './mock-data/product-list';
import {addItem, navigateToCart} from './actions';
import {getCurrencyFormat} from './helpers';

const getRows = (onClickAdd: (productIndex: number) => void) => {
  return products.map(({name, price}, i) => {
    const onClick = () => onClickAdd(i);
    return (
      <tr key={i}>
        <td>{name}</td>
        <td className="u-right">{getCurrencyFormat(price)}</td>
        <td>
          <button onClick={onClick}>Add to cart</button>
        </td>
      </tr>
    );
  });
};

export const Products = () => {
  const dispatch = useDispatch();
  const onClickAdd = (productIndex: number) => dispatch(addItem(productIndex));
  const onClickNavigate = () => dispatch(navigateToCart());
  const rows = getRows(onClickAdd);
  return (
    <>
      <h2>Products</h2>
      <table className="c-products__table">
        <tbody>{rows}</tbody>
      </table>
      <button className="nav-btn" onClick={onClickNavigate}>
        View Cart
      </button>
    </>
  );
};

import React from 'react';
import {useDispatch} from 'react-redux';
import {products} from './mock-data/product-list';
import {navigateToCart} from './actions';

const getRows = () => {
  return products.map(({name, price}, i) => {
    return (
      <tr key={i}>
        <td>{name}</td>
        <td className="u-right">{price}</td>
      </tr>
    );
  });
};

export const Products = () => {
  const dispatch = useDispatch();
  const onClickNavigate = () => dispatch(navigateToCart());
  const rows = getRows();
  return (
    <>
      <h2>Products</h2>
      <table>
        <tbody>{rows}</tbody>
      </table>
      <button className="nav-btn" onClick={onClickNavigate}>
        View Cart
      </button>
    </>
  );
};

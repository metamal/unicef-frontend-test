import React from 'react';
import {products} from './mock-data/product-list';

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
  const rows = getRows();
  return (
    <>
      <h2>Products</h2>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </>
  );
};

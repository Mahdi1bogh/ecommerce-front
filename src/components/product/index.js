import React from 'react';
import Products from './Products';

const index = ({ products }) => {
  return (
    <div>
      <Products products={products} />
    </div>
  );
};

export default index;

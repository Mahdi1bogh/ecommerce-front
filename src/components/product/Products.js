import React from 'react';
import ProductsGrid from './ProductGrid';
import ProductItem from './ProductItem';
const Products = ({ products }) => {
  return (
    <ProductsGrid>
      {products.map((product, index) => {
        if (index < 8) {
          return (
            <ProductItem
              key={product.id}
              id={product.id}
              name={product.name}
              rating={product.rating}
              image={product.image}
              price={product.price}
              slug={product.slug}
            />
          );
        }
      })}
    </ProductsGrid>
  );
};

export default Products;

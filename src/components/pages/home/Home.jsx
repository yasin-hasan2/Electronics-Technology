// import React from 'react';

import { useLoaderData } from "react-router-dom";
import Banner from "../shared/banner/Banner";
import Product from "../shared/product/Product";

const Home = () => {
  const productsData = useLoaderData();

  return (
    <div>
      <div className="mt-10">
        <Banner></Banner>
      </div>

      <div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {productsData.map((products) => (
            <Product key={products.id} product={products}></Product>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;

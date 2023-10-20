// import React from 'react';

import { useLoaderData } from "react-router-dom";
import NewProduct from "../shared/newProduct/NewProduct";
import { useState } from "react";

const MyProduct = () => {
  const AddedProducts = useLoaderData();
  const [newAddedProducts, setNewAddedProducts] = useState(AddedProducts);
  console.log(newAddedProducts);

  return (
    <div>
      <div className="grid grid-cols-2 gap-5">
        {newAddedProducts.map((newProductData) => (
          <NewProduct
            key={newProductData._id}
            getNewProductData={newProductData}
            newAddedProducts={newAddedProducts}
            setNewAddedProducts={setNewAddedProducts}
          ></NewProduct>
        ))}
      </div>
    </div>
  );
};

export default MyProduct;

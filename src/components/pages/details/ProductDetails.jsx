// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const productDetail = useLoaderData();
  const { id } = useParams();
  const idInt = parseInt(id);
  const findProduct = productDetail.find((product) => product.id === idInt);

  //   const { name, brand, details, photo, price, quantity, model } = findProduct;

  console.log(idInt);
  console.log(productDetail);
  console.log(findProduct);

  return (
    <div>
      <div className="px-10 mt-[15rem] md:mt-10 ">
        <div className="relative">
          {/* <img
            className="w-[80rem] h-[20rem] md:h-[40rem] "
            src={photo}
            alt=""
          /> */}
          <div className=" h-32 bottom-0 absolute w-full bg-[#0B0B0B80]">
            {/* <span> {price} </span> */}
          </div>
        </div>
        <div>
          <h1 className=" my-5 text-5xl font-bold">{name}</h1>
          <h1>{/* {brand} {model}{" "} */}</h1>
          {/* <h3> Product : {quantity} </h3> */}
          {/* <p className="text-base text-justify font-normal "> {details} </p> */}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

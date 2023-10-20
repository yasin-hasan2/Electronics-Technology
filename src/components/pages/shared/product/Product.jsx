// import React from 'react';

const Product = ({ product }) => {
  // console.log(product);
  const { brand_name, image, name, price } = product;
  return (
    <div>
      <div>
        <div className="  card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-64 rounded-xl" src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> {name} </h2>
            <h2 className="card-title"> {brand_name} </h2>
            <h2 className="card-title"> {price} </h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

// import React from 'react';

const Product = ({ product }) => {
  // console.log(product);
  const { name, brand, photo, price, model } = product;
  return (
    <div>
      <div>
        <div className="  card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-64 rounded-xl" src={photo} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title"> name : {name} </h2>
            <h2 className="card-title"> brand : {brand} </h2>
            <h2 className="card-title"> model : {model} </h2>
            <h2 className="card-title"> Price : {price} $ </h2>

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

// import React from 'react';
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const NewProduct = ({
  getNewProductData,
  newAddedProducts,
  setNewAddedProducts,
}) => {
  const { _id, name, brand, details, photo, price, quantity, model } =
    getNewProductData;
  console.log(getNewProductData);

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // console.log("delete confirm");
        fetch(`http://localhost:5000/phone/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your Product has been deleted.",
                "success"
              );
              const remaining = newAddedProducts.filter(
                (phn) => phn._id !== _id
              );
              setNewAddedProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-96" src={photo} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title"> {name} </h2>
          <h2 className="card-title"> {brand} </h2>
          <h2 className="card-title"> {price} </h2>
          <h2 className="card-title"> {model} </h2>
          <h2 className="card-title"> {quantity} </h2>
          <p> {details} </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">view</button>
            <Link to={`/update/${_id}`}>
              <button className="btn btn-primary">Edit</button>
            </Link>
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-primary"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewProduct;

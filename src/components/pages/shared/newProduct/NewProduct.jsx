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
      <div className=" flex  lg:card-side bg-base-100 shadow-xl">
        <figure>
          <img className="w-60 rounded-xl" src={photo} alt="Album" />
        </figure>
        <div className="   w-[55%] flex flex-col justify-between ml-10">
          <div className="text-[#FFFFFF] ">
            <h2 className="card-title">
              {" "}
              name: <small>{name}</small>{" "}
            </h2>
            <h2 className="card-title">
              {" "}
              model: <small>{model}</small>{" "}
            </h2>
            <h2 className="card-title">
              {" "}
              brand: <small>{brand}</small>{" "}
            </h2>
            <h2 className="card-title">
              {" "}
              price: <small>{price}</small>{" "}
            </h2>
            <h2 className="card-title">
              {" "}
              Available : <small>{quantity}</small>{" "}
            </h2>
            <p> {details} </p>
          </div>
          <div className=" flex justify-end gap-2 ">
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

// import React from 'react';

// import { data } from "autoprefixer";
import Swal from "sweetalert2";

const AddProduct = () => {
  const handleAddProduct = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const brand = form.brand.value;
    const model = form.model.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const price = form.price.value;
    const photo = form.photo.value;

    const newPhone = { name, brand, details, photo, price, quantity, model };
    console.log(newPhone);

    //send data to the server

    fetch("https://electronics-tecnology-server.vercel.app/phone", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newPhone),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success",
            text: "Your Phone add successfully ",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="pt-10 bg-[#5a5656] p-5 text-center">
        <h1 className="text-5xl font-bold text-[#FFFFFF]"> ADD Your Phone</h1>
        <form onSubmit={handleAddProduct}>
          <div className=" gap-3 items-center space-y-3  grid grid-cols-2 p-5 text-[#FFFFFF] text-xl ">
            <div className=" form-control">
              <label className="label">
                <span className="label-text text-white">Your Pone name </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Phone name "
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white"> Brand </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white"> Phone Model </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="model"
                  placeholder="Model"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">
                  avalible quantity{" "}
                </span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="quantity"
                  placeholder="quantity"
                  className="input w-full input-bordered"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white">Price</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <br />
            <div className=" col-span-2  form-control">
              <label className="label">
                <span className="label-text text-white">Details </span>
              </label>
              <label className="  input-group">
                <textarea
                  type="text"
                  name="details"
                  placeholder="Details"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <div className="  col-span-2 form-control">
              <label className="label">
                <span className="label-text text-white">Photo </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="photo"
                  placeholder="Photo"
                  className="input w-full input-bordered"
                />
              </label>
            </div>
            <input
              className="btn col-span-2 hover:btn-ghost "
              type="submit"
              value="submit"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

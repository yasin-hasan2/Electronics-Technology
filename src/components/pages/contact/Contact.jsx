// import React from 'react';

import { AiOutlineMail } from "react-icons/ai";
import { BsRocketTakeoffFill } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <div className="lg:flex  my-10 justify-around  ">
        <div className=" lg:mt-10 lg:pl-10 text-textWhite">
          <h1 className="text-4xl mb-10 font-bold">
            Lets chat, <br /> Tell me about your <br /> Opinion.{" "}
          </h1>
          <span className="text-xl  ">Lets create something together </span>
          <div className="flex mt-4 items-center  gap-3">
            <AiOutlineMail className=" hover:shadow-slate-400 shadow-lg rounded-xl text-3xl"></AiOutlineMail>
            <div>
              <h5>Mail me at</h5>
              <h4 className="text-textGreen hover:text-textWhite   rounded-2xl  ">
                Yaseen@gamil.com
              </h4>
            </div>
          </div>
        </div>
        {/* ========================== */}
        <div>
          <h1 className="text-3xl flex mb-8">
            Send us a message <BsRocketTakeoffFill></BsRocketTakeoffFill>{" "}
          </h1>
          <div className="flex flex-col gap-10">
            <input
              className=" px-3 py-2 text-2xl rounded-lg"
              type="text"
              placeholder="Full name"
            />
            <input
              className=" px-3 py-2 text-2xl rounded-lg"
              type="email"
              placeholder="Email"
            />
            <input
              className=" px-3 py-2 text-2xl rounded-lg"
              type="text"
              placeholder="Subject"
            />
          </div>
          <h2 className="my-5">Tell us more about your inspiration</h2>

          <button className="btn btn-ghost text-textWhite bg-bgGreen">
            {" "}
            Send message{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

// import React from 'react';

import banner1 from "../../../assets/img/360_197_1.png";
import banner2 from "../../../assets/img/709ea2befcdc95124a997576b03aec14.png";
import banner3 from "../../../assets/img/_1511456208_851_intel-preview.jpg";
import banner4 from "../../../assets/img/athens-greece-october-4-2023-260nw-2370216695.jpg";
import banner5 from "../../../assets/img/Symbol-of-the-iPhone-logo.jpg";

import Marquee from "react-fast-marquee";

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

      <div className="mt-10">
        <div>
          <h1 className="text-3xl">RECENT POSTS</h1>
          <div className="border"></div>
        </div>
        <div className=" mt-7 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
          {productsData.map((products) => (
            <Product key={products._id} product={products}></Product>
          ))}
        </div>
      </div>

      <div className="my-10">
        <div>
          <h1 className="text-3xl">BRAND LOGO</h1>
          <div className="border"></div>
        </div>
        <div className="mt-8">
          <div>
            <Marquee pauseOnHover={true} speed={50}>
              <div className="text-center text-textGreen font-semibold">
                <img className="h-24 mr-7 " src={banner1} alt="" />
                <p>Samsung</p>
              </div>
              <div className="text-center text-textGreen font-semibold">
                <img className="h-24 mr-7 " src={banner2} alt="" />
                <p> Google </p>
              </div>
              <div className="text-center text-textGreen font-semibold">
                <img className="h-24 mr-7 " src={banner3} alt="" />
                <p> Intel</p>
              </div>
              <div className="text-center text-textGreen font-semibold">
                <img className="h-24 mr-7 " src={banner4} alt="" />
                <p> Sony </p>
              </div>
              <div className="text-center text-textGreen font-semibold">
                <img className="h-24 mr-7 " src={banner5} alt="" />
                <p>Iphone</p>
              </div>
              <div className="text-center text-textGreen font-semibold">
                <img className="h-24 mr-7 " src={banner3} alt="" />
                <p> Intel</p>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

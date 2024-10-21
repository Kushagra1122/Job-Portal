// pages/Home.js
import React from "react";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="container mx-auto p-4 py-32">
      <div className=" text-center">
        <h1 className="text-4xl font-bold">Find Your Dream Job</h1>
        <p className="mt-4 text-lg">
          Discover amazing opportunities at the best companies
        </p>
        <div className="pt-5">
          <Link
            to={"/jobs"}
            className=" px-6 py-3 bg-white text-indigo-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
          >
            Explore Jobs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

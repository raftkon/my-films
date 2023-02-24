import React from "react";
import { BsFacebook } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

function AuthenticationPage() {
  return (
    // Global container
    <div className="flex items-center justify-center  ">
      {/* Card container */}
      <div className="relative flex flex-col m-6 space-y-10 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0 md:m-0 ">
        {/* LeftSide */}
        <div className="p-6 md:p-20">
          {/* Top content */}
          <h2 className="font-mono mb-5 text-3xl font-bold">Log In</h2>
          <p className="max-w-sm mb-12 font-sans font-light text-gray-600 ">
            Log in to your account to see your favourites movie and your
            watchlist.
          </p>

          <input
            type="text"
            className="w-full p-6 border border-gray-300 rounded-md placeholder:font-sans placeholder:font-light"
            placeholder="Enter your email"
          />

          {/* Middle content */}
          <div className="flex flex-col items-center justify-between mt-6 space-y-6 md:flex-row md:justify-between md:space-y-0">
            <div className=" text-cyanLight ">Forgot password</div>

            <button
              className="w-full md:w-auto flex justify-center 
              items-center p-6 space-x-4 font-sans font-bold text-white rounded-md 
              px-9 bg-cyan  hover:bg-opacity-90 shadow-sm hover:shadow-lg border
              hover:-translate-y-0.5 transition duration-150 "
            >
              <span>Next</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-7"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="13" y1="18" x2="19" y2="12" />
                <line x1="13" y1="6" x2="19" y2="12" />
              </svg>
            </button>
          </div>

          {/* Border */}
          <div className="mt-12 border-b border-b-gray-300"></div>

          {/* Bottom Content */}
          <p className="py-6 text-sm font-thin text-center text-gray-400">
            or login with
          </p>

          {/* Bottom buttons container */}
          <div className="flex flex-col space-x-0 space-y-6 md:flex-row md:space-x-4 md:space-y-0">
            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <BsFacebook color="#1877F2" fontSize={"35px"} />
              <span className="font-thin">Facebook</span>
            </button>

            <button className="flex items-center justify-center py-2 space-x-3 border border-gray-300 rounded shadow-sm hover:bg-opacity-30 hover:shadow-lg hover:-translate-y-0.5 transition duration-150 md:w-1/2">
              <FcGoogle fontSize={"40px"} />
              <span className="font-thin">Google</span>
            </button>
          </div>
        </div>

        {/* Right side */}
        <div className="bg-auth w-[430px] bg-cover "></div>
        {/* <img
          src={require("../../assets/tyler.jpg")}
          className="w-[430px] hidden  md:block bg-auto bg"
          alt="tyler durden"
        /> */}
      </div>
    </div>
  );
}

export default AuthenticationPage;

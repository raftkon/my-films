import React from "react";

function RightMenu() {
  return (
    <div className="hidden items-center space-x-6 font bold text-grayishViolet lg:flex">
      <div className="hover:text-veryDarkViolet">Login</div>
      <button className="px-8 py-3 font-bold text-white bg-cyan rounded-full hover:opacity-70">
        Sign Up
      </button>
    </div>
  );
}

export default RightMenu;

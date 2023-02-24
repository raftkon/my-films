import React, { useState } from "react";
import Hamburger from "../hamburger-button/Hamburger";
import LeftMenu from "../left-menu/LeftMenu";
import Logo from "../logo/Logo";
import RightMenu from "../right-menu/RightMenu";

function Navbar() {
  const [toggleHamburger, setToggleHamburger] = useState("");
  const handleClick = () => {
    setToggleHamburger((prevState) => (prevState === "open" ? "" : "open"));
  };
  return (
    <nav className="relative container mx-auto p-6">
      {/* Flex Container for all Items */}
      <div className="flex items-center justify-between">
        {/* Flex Container for Logo / Menu */}
        <div className="flex items-center space-x-20">
          <Logo text={"my-Films"} />
          <LeftMenu />
        </div>
        <RightMenu />
        {/* TODO: Hamburger Menu */}
        <Hamburger
          toggleHamburger={toggleHamburger}
          handleClick={handleClick}
        />
      </div>
      {/* TODO: Mobile Menu */}
      <div
        className={`${
          toggleHamburger === "" ? "hidden" : "open"
        } absolute  p-6 rounded-lg bg-darkViolet left-6 right-6 top-20 z-10  `}
      >
        <div className="flex flex-col items-center justify-center w-full space-y-6 font-bold text-white rounded sm">
          <button className="w-full text-center">WatchList</button>
          <button className="w-full text-center">Favourites</button>
          <button className="w-full border-t pt-6 border-gray-400 text-center">
            Login
          </button>
          <button className="w-full text-center py-3 rounded-full bg-cyan">
            SignUp
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

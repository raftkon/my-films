import React from "react";

function Hamburger({ toggleHamburger, handleClick }) {
  return (
    <button
      className={`${toggleHamburger} block hamburger lg:hidden focus:outline-none`}
      onClick={handleClick}
      id="menu-btn"
      type="button"
    >
      <span className="hamburger-top"></span>
      <span className="hamburger-middle"></span>
      <span className="hamburger-bottom"></span>
    </button>
  );
}

export default Hamburger;

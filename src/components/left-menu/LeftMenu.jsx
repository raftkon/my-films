import React from "react";
import NavItem from "../navItem/NavItem";

function LeftMenu() {
  return (
    <div className="hidden space-x-8 font-bold lg:flex">
      <NavItem text={"WatchList"} />
      <NavItem text={"Favourites"} />
    </div>
  );
}

export default LeftMenu;

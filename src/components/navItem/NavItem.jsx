import React from "react";

function NavItem({ text }) {
  return (
    <div className="p-2">
      <button href="#" className="text-grayishViolet">
        {text}
      </button>
    </div>
  );
}

export default NavItem;

import React from "react";

function Logo({ text }) {
  return (
    <div
      className="text-4xl font-bold border-b-2 border-r-2
        shadow-lg text-slate-800 rounded-t-xl border-l-1  p-4 rounded-l-lg rounded-br-3xl"
    >
      {text}
    </div>
  );
}

export default Logo;

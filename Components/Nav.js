import React from "react";
import Link from "next/link";

const Nav = (props) => {
  return (
    <div>
      <ul className="flex flex-row justify-center items-center m-1 text-blue-400 gap-1">
        <li className="rounded-3xl p-2 m-2 bg-blue-300 text-gray-700 shadow-xl"><Link href="/Binora">Home</Link></li>
        <li className="rounded-3xl p-2 m-2 bg-blue-300 text-gray-700 shadow-xl"><Link href="/Features">Features</Link></li>
        <li className="rounded-3xl p-2 m-2 bg-blue-300 text-gray-700 shadow-xl"><Link href="/Login">Login</Link></li>
      </ul>
    </div>
  );
};

export default Nav;

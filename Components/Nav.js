import React from "react";
import Link from "next/link";

const Nav = (props) => {
  return (
    <div>
      <ul className="flex flex-row justify-center items-center m-1 text-blue-400 gap-1">
        <li className="border-b rounded-xl p-1.5 m-2 text-blue-200"><Link href="/Binora">Home</Link></li>
        <li className="border-b rounded-xl p-1.5 m-2 text-blue-200"><Link href="/Features">Features</Link></li>
        <li className="border-b rounded-xl p-1.5 m-2 text-blue-200"><Link href="#">{props.user}</Link></li>
      </ul>
    </div>
  );
};

export default Nav;

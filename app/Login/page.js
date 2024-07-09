"use client";
import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import Link from "next/link";

const Page = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [Username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      setIsSubmitted(true);
      // Perform your submit actions here
    }, 500); // Match this timeout with the duration of the animation
  };

  return (
    <div className="flex flex-col justify-center items-center mt-12 p-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-center items-center p-4 ps-3 pr-3 max-w-72 border m-4"
      >
        {/* <h3 className='mb-3'>Login Here</h3> */}
        <div
          id="inputs"
          className={`flex flex-col ${
            isAnimating ? "animate-slideOut" : "animate-slideIn"
          }`}
          style={{ animationDuration: "0.5s", animationFillMode: "forwards" }}
        >
          <input
            type="text"
            placeholder="Username"
            className="p-1 text-sm border-b rounded-t"
            value={Username}
            onChange={(e) => { // this is called two way binding
              setUsername(e.target.value);
              console.log(Username)
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-1 text-sm"
          />
        </div>
        <button
          id="submit"
          className={`mb-2 rounded-xl bg-blue-400 text-white text-sm p-1.5 pb-1 w-52 ${
            isAnimating ? "animate-move" : "none"
          }`}
          style={{ animationDuration: "0.5s", animationFillMode: "forwards" }}
          type="submit"
        >
          Log in
        </button>
      </form>
      <div className="text-sm">
        Don't have account yet?
        <Link href="./Signup" className="text-blue-600">
          {" "}
          Sign Up here
        </Link>
      </div>
    </div>
  );
};

export default Page;

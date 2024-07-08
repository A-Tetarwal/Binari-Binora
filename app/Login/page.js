'use client'
import React, { useState } from 'react';
import './login.css'; // Import the CSS file

const Page = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAnimating(true);
    setTimeout(() => {
      setIsSubmitted(true);
      // Perform your submit actions here
    }, 500); // Match this timeout with the duration of the animation
  };

  return (
    <div className='flex justify-center items-center mt-12'>
      <form
        onSubmit={handleSubmit}
        className='flex flex-col justify-center items-center rounded-xl p-2 ps-3 pr-3 max-w-72 shadow-2xl shadow-blue-400'
      >
        <h3 className='mb-3'>Login Here</h3>
        <div
          id="inputs"
          className={`flex flex-col ${isAnimating ? 'animate-slideOut' : 'animate-slideIn'}`}
          style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
        >
          <input type="text" placeholder='Username' className='p-1 text-sm border-b' />
          <input type="password" placeholder='Password' className='p-1 text-sm' />
        </div>
        <button
          id='submit'
          className={`mb-2 rounded-3xl bg-blue-400 text-white text-sm p-1.5 pb-1 w-52 ${isAnimating ? 'animate-move' : 'none'}`}
          style={{ animationDuration: '0.5s', animationFillMode: 'forwards' }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;

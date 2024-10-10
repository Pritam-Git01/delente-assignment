"use client"
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount > 0 ? prevCount - 1 : 0);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <div className="bg-cardBg p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold text-foreground mb-8">Counter</h2>
        <div className="flex items-center justify-center space-x-12">
          <button
          disabled={count < 1 ? true : false}
            onClick={decrement}
            className="px-6 py-2 bg-red-500 text-white text-2xl font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-75 transition-colors duration-300"
          >
            -
          </button>
          <span className="text-4xl font-bold text-foreground">{count}</span>
          <button
            onClick={increment}
            className="px-6 py-2 bg-green-500 text-white font-semibold text-2xl rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-75 transition-colors duration-300"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
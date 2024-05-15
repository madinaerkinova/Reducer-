/*
import React, { useState } from 'react';

const Yellow = () => {
  const [colorIntensity, setColorIntensity] = useState(0);

  const handleIncrement = () => {
    setColorIntensity((prev) => Math.min(prev + 10, 255));
  };

  const handleDecrement = () => {
    setColorIntensity((prev) => Math.max(prev - 10, 0));
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white shadow-lg rounded-lg">
      <div className="mb-4 text-xl font-semibold">Yellow Intensity: {colorIntensity}</div>
      <div
        className="w-32 h-32 mb-4 rounded-md shadow-lg"
        style={{ backgroundColor: `rgb(${colorIntensity}, ${colorIntensity}, 0)` }}
      ></div>
      <div className="space-x-4">
        <button
          onClick={handleIncrement}
          className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 transition duration-300"
        >
          Increment
        </button>
        <button
          onClick={handleDecrement}
          className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700 transition duration-300"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Yellow;*/

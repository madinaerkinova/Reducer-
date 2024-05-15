import React, { useReducer } from 'react';

const initialState = {
  activeSlide: 0,
  redIntensity: 0,
  yellowIntensity: 0,
  blueIntensity: 0,

  backgrounds: [
    'url(https://source.unsplash.com/1600x900/?nature,forest)',
    'url(https://source.unsplash.com/1600x900/?nature,desert)',
    'url(https://source.unsplash.com/1600x900/?nature,water)',
  ],
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      switch (state.activeSlide) {
        case 0:
          return { ...state, redIntensity: Math.min(state.redIntensity + 10, 255) };
        case 1:
          return { ...state, yellowIntensity: Math.min(state.yellowIntensity + 10, 255) };
        case 2:
          return { ...state, blueIntensity: Math.min(state.blueIntensity + 10, 255) };
        default:
          return state;
      }
    case 'DECREMENT':
      switch (state.activeSlide) {
        case 0:
          return { ...state, redIntensity: Math.max(state.redIntensity - 10, 0) };
        case 1:
          return { ...state, yellowIntensity: Math.max(state.yellowIntensity - 10, 0) };
        case 2:
          return { ...state, blueIntensity: Math.max(state.blueIntensity - 10, 0) };
        default:
          return state;
      }
    case 'NEXT':
      return { ...state, activeSlide: (state.activeSlide + 1) % 3 };
    case 'PREV':
      return { ...state, activeSlide: (state.activeSlide - 1 + 3) % 3 };
    default:
      return state;
  }
};

const Carousel = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };

  const handleNext = () => {
    dispatch({ type: 'NEXT' });
  };

  const handlePrev = () => {
    dispatch({ type: 'PREV' });
  };

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-4"
      style={{
        backgroundImage: state.backgrounds[state.activeSlide], // Aktiv slaydga mos ravishda fonni tanlash
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="flex space-x-4 mb-4">
        <button
          onClick={handlePrev}
          className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 transition duration-300"
        >
          Previous
        </button>
        <button
          onClick={handleNext}
          className="px-4 py-2 font-bold text-white bg-green-500 rounded-full hover:bg-green-700 transition duration-300"
        >
          Next
        </button>
      </div>
      <div className="flex flex-col items-center justify-center bg-white shadow-lg rounded-lg p-6 w-80">
        {state.activeSlide === 0 && (
          <>
            <div className="mb-4 text-xl font-semibold">Red Intensity: {state.redIntensity}</div>
            <div
              className="w-32 h-32 mb-4 rounded-md shadow-lg"
              style={{ backgroundColor: `rgb(${state.redIntensity}, 0, 0)` }}
            ></div>
          </>
        )}
        {state.activeSlide === 1 && (
          <>
            <div className="mb-4 text-xl font-semibold">Yellow Intensity: {state.yellowIntensity}</div>
            <div
              className="w-32 h-32 mb-4 rounded-md shadow-lg"
              style={{ backgroundColor: `rgb(${state.yellowIntensity}, ${state.yellowIntensity}, 0)` }}
            ></div>
          </>
        )}
        {state.activeSlide === 2 && (
          <>
            <div className="mb-4 text-xl font-semibold">Blue Intensity: {state.blueIntensity}</div>
            <div
              className="w-32 h-32 mb-4 rounded-md shadow-lg"
              style={{ backgroundColor: `rgb(0, 0, ${state.blueIntensity})` }}
            ></div>
          </>
        )}
        <div className="space-x-4">
          <button
            onClick={handleIncrement}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 transition duration-300"
          >
            Increment
          </button>
          <button
            onClick={handleDecrement}
            className="px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 transition duration-300"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carousel;

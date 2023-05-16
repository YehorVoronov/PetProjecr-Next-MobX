"use client"
import React, { useState } from 'react';
import { observer } from "mobx-react-lite";

const Carousel = ({ photos }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="pt-[80px] pb-[80px] relative z-10">
      <div className="overflow-hidden">
        <div className="flex transition-transform duration-300 ease-in-out">
          {photos.map((photos, index) => (
            <img
              key={index}
              src={photos.src}
              alt={photos.alt}
              className={`${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              } w-full flex-none transition-opacity duration-300 ease-in-out`}
            />
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-l shadow-md hover:bg-gray-700 focus:outline-none"
        onClick={prevSlide}
      >
        Previous
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-2 rounded-r shadow-md hover:bg-gray-700 focus:outline-none"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default Carousel;

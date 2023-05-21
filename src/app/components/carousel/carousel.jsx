import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = (props) => {
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Allow infinite loop
    speed: 500, // Transition speed in milliseconds
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
  };

  return (
    <Slider {...settings}>
      {/* Add your carousel slides here */}
      {props.photos.map((photo, index) => (
        <div key={index} className=" full-screen-image">
          <img
            src={photo.src}
            alt={photo.alt}
            className="w-[100%]"
          />
        </div>
      ))}
      
    </Slider>
  );
};

export default Carousel;

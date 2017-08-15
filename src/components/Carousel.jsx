import React from 'react';
import Slider from 'react-slick';
import '../../public/scss/_carousel.scss';

const Carousel = (props) => {
  const settings = {
    autoplay: props.autoplay,
    autoplaySpeed: props.autoplaySpeed,
    dots: props.dots,
    infinite: props.infinite,
    speed: props.speed,
    slidesToShow: props.slidesToShow,
    slidesToScroll: props.slidesToScroll,
  };
  return (
    <div className="Hero_Panel">
      <Slider {...settings}>
        <img className="sliderImage" src="../assets/carousel1.png" alt="carousel1" />
        <img className="sliderImage" src="../assets/carousel2.png" alt="carousel2" />
        <img className="sliderImage" src="../assets/carousel3.png" alt="carousel3" />
      </Slider>
      <p className="carousel-header">Screening <br /> DVF Secret Agent Part 2 <br /></p>
      <p className="carousel-subHeader1">October 15, 2017</p>
      <p className="carousel-subHeader2">Join us for a private screening of DVF Secret Agent Part 2
        <br />
        with our special guest, director Peter Lindburgh
      </p>
    </div>
  );
};

export default Carousel;

import React, { useEffect, useState } from "react";
import "../../assets/css/Section3.css";
// import Section4 from "./Section4";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import star from '../../../images/star.png'

const Section3 = () => {
  useEffect(() => {
    // This will run once when the component mounts
    // It's used to initialize any third-party libraries or perform other setup tasks
    // For Slick slider, no additional setup is required here because we've imported the necessary CSS files
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    // autoplaySpeed: 10,

    slidesToShow: 4, // Show 4 cards on laptops
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Apply these settings when screen width is less than 1024px
        settings: {
          slidesToShow: 3, // Show 3 cards on screens less than 1024px
        },
      },
      {
        breakpoint: 600, // Apply these settings when screen width is less than 600px
        settings: {
          slidesToShow: 2, // Show 2 cards on screens less than 600px
        },
      },
      {
        breakpoint: 480, // Apply these settings when screen width is less than 480px
        settings: {
          slidesToShow: 1, // Show 1 card on screens less than 480px
        },
      },
    ],
    beforeChange: (oldIndex, newIndex) => {
    },
  };
  return (
    <>
      <div className="container">
        <div className="winner-container">
          <div className="heding-sec heading-sec-custom m-2 d-flex text-center justify-content-center align-items-center">
            <img
              src={star}
              alt=""
            />
            <h1 className="mb-0 ms-2 me-2 font-700">Today's Top Winners</h1>
            <img
              src={star}
              alt=""
            />
          </div>
          <Slider {...settings}>
            <div>
              <div className="custom-card custom-card-padding">
                <h4 className="primary-color">Divya</h4>
                <h4 className="font-700 color-primary">$61,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card">
                <h4 className="primary-color">Arjun</h4>
                <h4 className="font-700 color-primary">$35,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card">
                <h4 className="primary-color">Avani</h4>
                <h4 className="font-700 color-primary">$51,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card">
                <h4 className="primary-color">Kiara</h4>
                <h4 className="font-700 color-primary">$25,000</h4>
              </div>
            </div>
            <div>
              <div className="custom-card">
                <h4 className="primary-color">Pari</h4>
                <h4 className="font-700 color-primary">$45,200</h4>
              </div>
            </div>
            {/* Add more slides here */}
          </Slider>
        </div>

        {/* ..................................... */}
      </div>
    </>
  );
};

export default Section3;

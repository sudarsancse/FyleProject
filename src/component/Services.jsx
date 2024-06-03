import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from "../assect/1.png";
import img2 from "../assect/2.png";
import img3 from "../assect/3.png";
import logo from "../assect/icon.png";
import arrow from "../assect/arrow.png";

// crusal function
function Services() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
  };

  const newTab = (url) => {
    window.open(url, "https://www.fylehq.com/");
  };

  return (
    <>
      <div className="flex justify-center gap-[220px] items-center px-[250px] pt-[60px] pb-[40px]">
        <div>
          <h1 className=" uppercase text-[#FF3147] text-3xl py-1">
            what we do
          </h1>
          <h1 className=" uppercase text-black font-bold w-[300px] text-3xl py-3">
            Services provide for you
          </h1>
        </div>
        <div>
          <p className=" py-3 pb-[35px] text-sm w-[350px]">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
        </div>
      </div>
      <div className=" px-[250px]">
        <Slider {...settings}>
          <div className="relative overflow-hidden group">
            <img src={img1} alt="image"></img>
            <div className="absolute w-full h-full bg-[#FF3147] flex flex-col items-center justify-center bottom-[-100%] group-hover:bottom-0 overlay space-y-4">
              <img src={logo} alt="Logo" />
              <h1 className="text-center text-white text-lg">
                WEB DEVELOPMENT
              </h1>
              <p className="text-xs text-center text-white">
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque
              </p>
              <button
                onClick={() => newTab("https://www.fylehq.com/")}
                className="bg-white text-[#FF3147] px-4 py-2 text-xs flex justify-center items-center gap-1"
              >
                <span> READ MORE</span>
                <img className=" mt-[4px] w-6" src={arrow}></img>
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img src={img2} alt="image"></img>
            <div className="absolute w-full h-full bg-[#FF3147] flex flex-col items-center justify-center bottom-[-100%] group-hover:bottom-0 overlay space-y-4">
              <img src={logo} alt="Logo" />
              <h1 className="text-center text-white text-lg">
                WEB DEVELOPMENT
              </h1>
              <p className="text-xs text-center text-white">
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque
              </p>
              <button
                onClick={() => newTab("https://www.fylehq.com/")}
                className="bg-white text-[#FF3147] px-4 py-2 text-xs flex justify-center items-center gap-1"
              >
                <span> READ MORE</span>
                <img className=" mt-[4px] w-6" src={arrow}></img>
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img src={img3} alt="image"></img>
            <div className="absolute w-full h-full bg-[#FF3147] flex flex-col items-center justify-center bottom-[-100%] group-hover:bottom-0 overlay space-y-4">
              <img src={logo} alt="Logo" />
              <h1 className="text-center text-white text-lg">
                WEB DEVELOPMENT
              </h1>
              <p className="text-xs text-center text-white">
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque
              </p>
              <button
                onClick={() => newTab("https://www.fylehq.com/")}
                className="bg-white text-[#FF3147] px-4 py-2 text-xs flex justify-center items-center gap-1"
              >
                <span> READ MORE</span>
                <img className=" mt-[4px] w-6" src={arrow}></img>
              </button>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img src={img2} alt="Image" />
            <div className="absolute w-full h-full bg-[#FF3147] flex flex-col items-center justify-center bottom-[-100%] group-hover:bottom-0 overlay space-y-4">
              <img src={logo} alt="Logo" />
              <h1 className="text-center text-white text-lg">
                WEB DEVELOPMENT
              </h1>
              <p className="text-xs text-center text-white">
                Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
                Pellentesque
              </p>
              <button
                onClick={() => newTab("https://www.fylehq.com/")}
                className="bg-white text-[#FF3147] px-4 py-2 text-xs flex justify-center items-center gap-1"
              >
                <span> READ MORE</span>
                <img className=" mt-[4px] w-6" src={arrow}></img>
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default Services;

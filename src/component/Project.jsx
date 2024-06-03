import React, {useState} from "react";
import img1 from "../assect/image.png";
import img2 from "../assect/orenge.jpg";
import img3 from "../assect/b.jpg";

function Project() {
  const [currentImage, setCurrentImage] = useState(img1);

  const images = {
    section1: img1,
    section2: img2,
    section3: img3,
  };
  return (
    <>
      <div className="px-[250px] pt-[60px]">
        <h1 className=" uppercase text-[#FF3147] text-3xl py-1 text-center">
          Our project
        </h1>
        <h1 className=" uppercase text-black font-bold text-4xl py-3 text-center">
          Why We Are Best
        </h1>
        <div className=" flex justify-center gap-8 pt-10">
          <img className=" w-[500px]" src={currentImage}></img>
          <div className=" flex-col gap-10 bg-[#F6F6F6]">
            <div
              onMouseEnter={() => setCurrentImage(images.section1)}
              className=" hover:bg-[#FF3147] px-9 py-5  hover:text-white"
            >
              <h1 className=" font-semibold">Genderless Kei – Japan’s Hot</h1>
              <p className=" text-xs py-3 w-[200px]">
                Set to launch on the manufacturer’s new A330neo aircraft in
                2017, it’s offering lots of
              </p>
            </div>
            <div
              onMouseEnter={() => setCurrentImage(images.section2)}
              className=" hover:bg-[#FF3147] px-9 py-5  hover:text-white"
            >
              <h1 className=" font-semibold">Better Strategy & Quality</h1>
              <p className=" text-xs py-3 w-[200px]">
                Set to launch on the manufacturer’s new A330neo aircraft in
                2017, it’s offering lots of
              </p>
            </div>
            <div
              onMouseEnter={() => setCurrentImage(images.section3)}
              className=" hover:bg-[#FF3147] py-5 px-9  hover:text-white"
            >
              <h1 className=" font-semibold">Genderless Kei – Japan’s Hot</h1>
              <p className=" text-xs py-3 w-[200px] ">
                Set to launch on the manufacturer’s new A330neo aircraft in
                2017, it’s offering lots of
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;

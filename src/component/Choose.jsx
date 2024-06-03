import React from "react";
import icon1 from "../assect/icon 1.png";
import icon2 from "../assect/icon 2.png";
import icon3 from "../assect/icon 3.png";
import icon4 from "../assect/icon 4.png";

function Choose() {
  return (
    <>
      <div className=" px-[250px] pt-[60px]">
        <h1 className=" uppercase text-[#FF3147] text-3xl py-1 text-center">
          WHY CHOOSE US
        </h1>
        <h1 className=" uppercase text-black font-bold text-4xl py-3 text-center">
          Why We Are Best
        </h1>
        <div className=" flex justify-center mt-5">
          <div className=" pr-5">
            {" "}
            <img className=" w-10 h-10 mb-2" src={icon1}></img>
            <h1 className=" mb-2 font-medium ">Clarified Vision & Target</h1>
            <p className=" text-xs">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div className=" pr-5">
            {" "}
            <img className=" w-10 h-10 mb-2" src={icon2}></img>
            <h1 className=" mb-2 font-medium ">High Performance</h1>
            <p className=" text-xs">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div className=" pr-5">
            {" "}
            <img className=" w-10 h-10 mb-2" src={icon3}></img>
            <h1 className=" mb-2 font-medium ">Maintain Security</h1>
            <p className=" text-xs">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
          <div className=" pr-5">
            {" "}
            <img className=" w-10 h-10 mb-2" src={icon4}></img>
            <h1 className=" mb-2 font-medium ">Better Strategy & Quality</h1>
            <p className=" text-xs">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Choose;

import React from "react";
import clock from "../assect/clock (3).png";
import heart from "../assect/heart (2).png";
import right from "../assect/Path 4402.png";
import trophy from "../assect/Path 4406.png";

function Groweth() {
  return (
    <>
      <div className=" px-[250px] mt-[60px] pt-[50px] bg-[#FAFAFA]">
        <h1 className=" uppercase text-[#FF3147] text-3xl py-1 text-center">
          Experts growts
        </h1>
        <h1 className=" uppercase text-black font-bold text-4xl py-3 text-center">
          Our Company Growth
        </h1>
        <div className=" flex justify-center gap-10 p-4">
          <div className=" hover:bg-white hover:drop-shadow-xl w-[150px] flex flex-col items-center p-4 gap-2">
            <img className=" w-5 h-5" src={heart}></img>
            <h1 className=" text-2xl font-semibold">199 +</h1>
            <p className=" text-xs">Staticfied Customers</p>
          </div>
          <div className=" hover:bg-white hover:drop-shadow-xl w-[150px] flex flex-col items-center p-4 gap-2">
            <img className=" w-5 h-5" src={clock}></img>
            <h1 className=" text-2xl font-semibold">1591 +</h1>
            <p className=" text-xs">Days Of Operation</p>
          </div>
          <div className=" hover:bg-white hover:drop-shadow-xl w-[150px] flex flex-col items-center p-4 gap-2">
            <img className=" w-5 h-5" src={right}></img>
            <h1 className=" text-2xl font-semibold">283 +</h1>
            <p className=" text-xs">Complete Project</p>
          </div>
          <div className=" hover:bg-white hover:drop-shadow-xl w-[150px] flex flex-col items-center p-4 gap-2">
            <img className=" w-5 h-5" src={trophy}></img>
            <h1 className=" text-2xl font-semibold">75 +</h1>
            <p className=" text-xs">Win Awards</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Groweth;

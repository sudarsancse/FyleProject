import React from "react";
import colon from "../assect/Quotemarks-left.png";

function Feedback() {
  return (
    <>
      <div className=" px-[250px] mt-[60px] mb-[60px]">
        <h1 className=" uppercase text-[#FF3147] text-3xl py-1 text-center">
          client's feedback
        </h1>
        <h1 className=" uppercase text-black font-bold text-4xl py-3 text-center">
          people say's about us !
        </h1>
        <div className=" flex justify-center px-44 gap-2">
          <img className=" w-5 h-5" src={colon} alt="" srcset="" />
          <div>
            <p className=" font-semibold text-xs py-5">
              Jannat Tumpa The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections Bonorum
              et Malorum original.
            </p>
            <p className=" font-bold text-sm uppercase text-[#FF3147] ">
              JANNAT TUMPA{" "}
              <span className=" uppercase text-[#808080] font-normal">
                - COO, AMERIMAR ENTERPRISES, INC.
              </span>
            </p>
          </div>
          <img
            className=" w-5 h-5 rotate-180 mt-[80px] "
            src={colon}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </>
  );
}

export default Feedback;

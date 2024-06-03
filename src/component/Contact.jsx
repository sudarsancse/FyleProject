import React, {useState} from "react";
import Model from "../component/Page/Model";
import hero from "../assect/hero.png";

function Contact() {
  const [showModel, setShowModel] = useState(false);

  return (
    <>
      <div className=" flex justify-center gap-10 items-center px-[250px] pt-[60px]">
        <div>
          <h1 className=" uppercase text-[#FF3147] text-3xl py-1">
            Award winning
          </h1>
          <h1 className=" uppercase text-black font-bold w-[300px] text-3xl py-3">
            Digital Marketing Agency
          </h1>
          <p className=" py-3 pb-[35px] text-sm">
            Morbi sed lacus nec risus finibus feugiat et fermentum nibh.
            Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed
            lacus nec risus finibus feugiat et fermentum
          </p>
          <button
            onClick={() => setShowModel(true)}
            className=" h-8 w-32 text-sm  text-center btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-[#FF3147]  hover:bg-white group"
          >
            <span className="w-0 h-0 bg-black absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>{" "}
            <span className="w-full font-semibold text-white transition-colors duration-300 ease-in-out group-hover:text-white z-10">
              CONTACT US
            </span>
          </button>
          {showModel && <Model onClose={() => setShowModel(false)} />}
        </div>
        <div>
          <img src={hero} />
        </div>
      </div>
    </>
  );
}

export default Contact;

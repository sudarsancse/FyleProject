import React, {useState, useRef} from "react";
import {X} from "lucide-react";

function FloatingLabelInput({label, type, value, onChange, name}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative mt-6">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-red-500 peer"
        required
      />
      <label
        className={`absolute left-2 transition-all duration-200 ${
          isFocused || value
            ? "-top-6 text-xs text-gray-300"
            : "top-2 text-gray-400"
        }`}
      >
        {label}
      </label>
    </div>
  );
}

function Model({onClose}) {
  const modelRef = useRef();

  const closeModel = (e) => {
    if (modelRef.current === e.target) {
      onClose();
    }
  };

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <>
      <div
        ref={modelRef}
        onClick={closeModel}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-10"
      >
        <div className="mt-10 flex-col gap-5 text-white">
          <button onClick={onClose} className="place-self-end">
            <X size={30} />
          </button>
          <div className="bg-slate-900 rounded-xl px-4 py-4 flex flex-col gap-5 mx-4 w-[550px]">
            <form
              className="flex flex-col gap-4"
              action="https://getform.io/f/pbqgplxb"
              method="POST"
            >
              <h1 className="text-xl font-semibold">Talk to us</h1>
              <FloatingLabelInput
                label="Work email*"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div className="flex gap-4">
                <FloatingLabelInput
                  label="First name*"
                  name="firstName"
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
                <FloatingLabelInput
                  label="Last name*"
                  name="lastName"
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div className="flex items-start mt-6">
                <input
                  name="check"
                  type="checkbox"
                  className="mt-1 mr-2"
                  required
                />
                <label className="text-gray-300">
                  I agree to Fyle's terms and conditions, and provide consent to
                  send me communication.
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#ED3C64] text-white py-2 rounded-md hover:bg-green-600 transition-colors mt-4"
              >
                Contact Us
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Model;

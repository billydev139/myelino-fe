import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";

const PasswordField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility state
  };

  return (
    <div className="container mx-auto">
      <h1 className=" text-secondary font-bold lg:text-[34px] text-[28px] mt-20 lg:px-0 px-4">
        Enter Your password:
      </h1>
      <div className="flex justify-between lg:px-3 px-4 mx-4 items-center border border-primary rounded-xl lg:mx-auto lg:mt-40 mt-20 py-1 px-auto lg:w-[40%]">
        <input
          type={showPassword ? "text" : "password"}
          className="text-[#134040] lg:w-[360px] outline-none"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <div className="flex gap-4">
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="text-primary outline-none border-none bg-transparent"
          >
            {showPassword ? <FaEyeSlash /> : <FaRegEye />}
          </button>

          <button className="bg-primary hover:bg-secondary text-white whitespace-nowrap lg:text-[19px] text-[14px] lg:px-5 px-4 lg:py-2 py-2 rounded-2xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordField;

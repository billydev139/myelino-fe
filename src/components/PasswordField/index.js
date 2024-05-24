import React, { useState } from "react";
import { FaEyeSlash, FaRegEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const PasswordField = () => {
  const navigate = useNavigate();
  const [myPassword, setMyPassword] = useState("Pa$$w0rd!");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); // Toggle password visibility state
  };

  const handleSubmit = () => {
    if (password === "") {
      setError("Please Enter the Password");
      return
    }
    if (password === "Pa$$w0rd!") {
      navigate("/data", {
        state: { password: password },
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Enter a Valid Password",
        confirmButtonColor: "#2B8D8D",
      });
    }
  };
  return (
    <div className="container mx-auto">
      <h1 className=" text-secondary text-center font-bold lg:text-[34px] text-[28px] mt-20 lg:px-0 px-4">
        Enter Your Password
      </h1>
      <div className="flex justify-between lg:px-3 px-4 mx-4 items-center border border-primary rounded-md lg:mx-auto mt-4  py-1 px-auto lg:w-[40%]">
        <input
          type={showPassword ? "text" : "password"}
          className="text-[#134040] lg:w-[360px] outline-none"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setError("")
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

          <button
            onClick={handleSubmit}
            className="bg-primary hover:bg-secondary text-white whitespace-nowrap lg:text-[19px] text-[14px] lg:px-5 px-4 lg:py-2 py-2 rounded-2xl"
          >
            Submit
          </button>
         
        </div>
        
      </div>
      <p className="text-red-500 text-center">{error}</p>
    </div>
  );
};

export default PasswordField;

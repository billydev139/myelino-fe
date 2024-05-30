import React from "react";
import { IoMailSharp } from "react-icons/io5";
import herobg from "../../assets/herobg.png";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import gifimage1 from "../../assets/gifimage1.gif";
import gifimage2 from "../../assets/gif2.gif";
import gifimage3 from "../../assets/Group-291.gif";
import gifimage4 from "../../assets/Frame 323 (3).gif";
import gifimage5 from "../../assets/Frame 320.gif";

const Hero = ({ setUpdateData, updateData }) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const handlesubmit = async () => {
    if (!email) {
      setError("please enter your email");
      return;
    }

    const payload = { email: email };

    try {
      const response = await axios.post(
        "https://api.myelino.com/public/subscribeEmail",
        payload
      );
      if (response?.status === 203) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: response?.data?.message,
          confirmButtonColor: "#2B8D8D",
        });
        return;
      }
      Swal.fire({
        icon: "success",
        title: "Subscribed!",
        text: response?.data?.message,
        confirmButtonColor: "#2B8D8D",
      });
      setEmail("");
      setUpdateData(!updateData);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.message,
        confirmButtonColor: "#2B8D8D",
      });
    }
  };

  return (
    <>
      <div
        className="container relative flex flex-col items-center justify-center pt-20 lg:pb-48 pb-[8rem]  lg:px-0 px-4 mx-auto "
        // style={{
        //   backgroundImage: `url(${herobg})`,
        //   backgroundSize: "contain",
        //   backgroundRepeat: "no-repeat",
        // }}
      >
        {/* <div className="hidden lg:block text-center">
          <p className="text-secondary lg:text-[59px]  font-bold ">
            Create <span className="text-primary">plans that meet</span> your
          </p>
          <p className="text-secondary lg:text-[59px]  font-bold ">
            preferences and exceed
          </p>
          <p className="text-primary lg:text-[59px]  font-bold">
            your expectations.
          </p>
        </div> */}
        <img
          src={gifimage1}
          className="absolute lg:w-28 w-14 right-3 top-3 "
        />
        <img
          src={gifimage2}
          className="absolute lg:w-28 w-14 left-3  animate-bounce"
        />
         <img
          src={gifimage3}
          className="absolute lg:w-20 w-8 lg:top-0 top-72  right-48 animate-bounce"
        />
         <img
          src={gifimage4}
          className="absolute w-12 lg:left-60 lg:top-96 lg:bottom-0 bottom-16  animate-bounce"
        />
          <img
          src={gifimage5}
          className="absolute lg:w-24 w-12 lg:bottom-24 bottom-12 right-10  animate-bounce"
        />
        <div className=" mx-auto text-center lg:w-[70%] ">
          <p className="text-secondary lg:text-[59px] text-[33px] font-bold lg:pb-10 pb-2">
            Create <span className="text-primary">plans that meet </span>
            <span className="text-secondary"> your preferences and exceed</span>
            <span className="text-primary"> your expectations.</span>
          </p>
        </div>

        <p className="text-secondary font-regular text-[2.063rem] lg:pt-16 pt-10">
          Join the waitlist
        </p>
        <div className="flex justify-center items-center gap-5 border border-primary pl-4 rounded-3xl mt-4  ">
          <IoMailSharp className="text-primary text-[24px]" />
          <input
            type="email"
            className="text-[#134040] pl-3 lg:w-[360px] outline-none border-l border-primary"
            placeholder="example@email.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setError("");
            }}
          />

          <button
            onClick={handlesubmit}
            className="bg-primary hover:bg-secondary text-white whitespace-nowrap rounded-full lg:text-[17px] text-[14px] lg:px-5 px-4 lg:py-2 py-2"
          >
            Join now
          </button>
        </div>
        <p className="pt-1  text-red-500">{error}</p>
        <p className="hidden lg:block text-secondary font-regular text-xs pt-2 text-center ">
          Don’t worry we won’t send you anything except when we launch the app
          or send out Beta-Testings :)
        </p>
        <p className="lg:hidden text-secondary font-regular text-xs pt-2 text-center ">
          Don’t worry we won’t send you anything except when we <br />
          launch the app or send out Beta-Testings :)
        </p>
      </div>
      <div className="overflow-hidden mt-5">
        <div className="bg-primary h-4 w-[100%] 2xl:ml-52 xl:ml-24 ml-4"></div>
      </div>
      {/* <img src={gifimage} /> */}
    </>
  );
};

export default Hero;

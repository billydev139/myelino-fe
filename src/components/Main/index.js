import React from 'react'
import peoplewhitlisted from '../../assets/peoplewhitlisted.png'
import { IoMailSharp } from "react-icons/io5";

const Main = () => {
    return (
      <>
        {/* Dekstop */}
        <div className="hidden lg:grid container grid lg:grid-cols-[1fr_1fr]  gap-6 place-items-start mx-auto lg:px-0 px-4 mt-20 lg:mb-40 mb-10">
          <div className="flex flex-col order-2 lg:order-1 items-start justify-start mb-10">
            <p className="text-[#2A4D4D] text-[28px]  font-bold ">
              Myelino{" "}
              <span className="text-[#2A4D4D] text-[28px] font-normal">
                is an all in one application that allows you to socialize,
                unlock new experiences, and create outings seamlessly all from
                what other users have shared on the app.
              </span>
            </p>
            <div className="flex flex-col justify-center mt-28">
              <p className="text-secondary font-bold lg:text-[59px] pb-3 text-[40px] lg:pt-32 pt-14">
                Got any questions?
              </p>
              <p className="text-secondary font-normal text-[24px] pt-7 lg:text-center ">
                Contact us at
              </p>
              <button className="bg-[#113939]  hover:bg-primary flex justify-start px-8 py-2 gap-8 rounded-md place-items-center  mt-4	">
                <IoMailSharp className="text-white text-[20px]" />

                <p className="text-white font-medium text-[24px]  lg:pr-32">
                  {" "}
                  Contact@myelino.com
                </p>
              </button>
            </div>
          </div>
          <div className="flex flex-col order-1 lg:order-2 items-center justify-center mt-10">
            <img
              className="mt-10 lg:w-full w-[70%]"
              src={peoplewhitlisted}
              alt="target image"
            />
          </div>
        </div>

        {/* Mobile */}
        <div className="container lg:hidden  mx-auto  px-4 mt-20 mb-10">
          <div className="flex flex-col items-start justify-start mb-10">
            <p className="text-[#2A4D4D] text-[28px]  font-bold ">
              Myelino{" "}
              <span className="text-[#2A4D4D] text-[28px] font-normal">
                is an all in one application that allows you to socialize,
                unlock new experiences, and create outings seamlessly all from
                what other users have shared on the app.
              </span>
            </p>
            <div className="flex flex-col  items-center justify-center mt-10">
              <img
                className="mt-10 lg:w-full w-[70%]"
                src={peoplewhitlisted}
                alt="target image"
              />
            </div>
            <div className="flex flex-col justify-center mt-14 mx-auto items-center">
              <p className="text-secondary font-bold lg:text-[59px] pb-3 text-[40px] lg:pt-32 pt-14">
                Got any questions?
              </p>
              <p className="text-secondary font-normal text-[24px] pt-2 lg:text-center ">
                Contact us at
              </p>
              <button className="bg-[#113939]  hover:bg-primary flex justify-start mt-5 px-8 py-2 gap-8 rounded-md place-items-center  mt-4	">
                <IoMailSharp className="text-white text-[20px]" />

                <p className="text-white font-medium text-[24px]  lg:pr-32">
                  {" "}
                  Contact@myelino.com
                </p>
              </button>
            </div>
          </div>
        </div>
      </>
    );
}

export default Main

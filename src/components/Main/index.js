import React from 'react'
import peoplewhitlisted from '../../assets/peoplewhitlisted.png'
import { IoMailSharp } from "react-icons/io5";

const Main = () => {
    return (
        <>
            <div className='container grid lg:grid-cols-[1fr_1fr]  gap-6 place-items-center mx-auto lg:px-0 px-4 lg:mb-40 mb-10'>
                <div className='flex flex-col order-2 lg:order-1 items-start justify-start mb-10'>
                    <p className='text-[#2A4D4D] lg:text-[28px] text-[18px] font-bold '>
                        Myelino <span className='text-[#2A4D4D] lg:text-[28px] text-[18px] font-normal'>is an all in one application that
                            allows you to socialize, unlock new experiences, and create outings seamlessly all
                            from what other users have shared on the app.</span>
                    </p>
                    <div className='flex flex-col justify-center '>
                        <p className='text-secondary font-bold lg:text-6xl text-2xl lg:pt-32 pt-14'>
                            Got any questions?
                        </p>
                        <p className='text-secondary font-normal lg:text-[24px] text-[16px] pt-7 lg:text-center '>
                            Contact us at
                        </p>
                        <button className='bg-[#113939] flex justify-start px-8 py-2 gap-8 rounded-md place-items-center  mt-4	'>
                            <IoMailSharp className='text-white text-[20px]' />

                            <p className='text-white font-medium lg:text-[24px] text-[16px] lg:pr-32'> Contact@myelino.com</p>
                        </button>

                    </div>

                </div>
                <div className='flex flex-col order-1 lg:order-2 items-center justify-center mt-10'>
                    <img className='pt-10 lg:w-full w-[70%]' src={peoplewhitlisted} alt='target image' />
                </div>

            </div>
        </>
    )
}

export default Main

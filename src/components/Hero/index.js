import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import herobg from '../../assets/herobg.png'
import { useState } from 'react';

const Hero = () => {
    const[email,setemail]=useState()
    
    return (
        <>
            <div className='flex flex-col items-center justify-center pt-16 pb-48' style={{
                backgroundImage: `url(${herobg})`,
                backgroundSize: "contain",
                backgroundRepeat:"no-repeat",


            }}>
                <p className='text-secondary text-6xl font-bold pb-4 '  >
                    Create <span className='text-primary'>plans that meet</span> your
                </p>
                <p className='text-secondary text-6xl font-bold pb-4'>
                    preferences and exceed
                </p>
                <p className='text-primary text-6xl font-bold pb-4'>
                    your expectations.
                </p>
                <p className='text-secondary font-regular text-[2.063rem] pt-16'>
                    Join the waitlist
                </p>
                <div className='flex items-center gap-5 border  border-primary rounded-xl mt-4 py-1	px-3'>
                    <IoMailSharp className='text-primary text-[24px] ' />
                    <input type='email' className='text-[#134040] pl-3 pr-20 outline-none border-l  border-primary	' placeholder='example@email.com' value={email}
                    onChange={(e)=>{
                        setemail(e.target.value)
                    }} />
                    <btn className='bg-primary  text-white text-[19px] px-5 py-2  rounded-2xl'>Join now</btn>

                </div>
                <p className='text-secondary font-regular text-xs pt-2 '>
                    Don’t worry we won’t send you anything except when we launch the app or send out Beta-Testings :)
                </p>
            </div>
            <div className='relevant overflow-hidden mt-5'>
            <div className='bg-primary h-4  w-[90%] absolute ' ></div>
            </div>
        </>
    )
}

export default Hero

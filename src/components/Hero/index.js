import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import herobg from '../../assets/herobg.png'
import { useState } from 'react';

const Hero = () => {
    const[email,setEmail]=useState()
    
    return (
        <>
            <div className='container flex flex-col items-center justify-center pt-16 lg:pb-48 pb-14 lg:px-0 px-4 mx-auto' style={{
                backgroundImage: `url(${herobg})`,
                backgroundSize: "contain",
                backgroundRepeat:"no-repeat",


            }}>
                
                <p className='text-secondary lg:text-6xl text-2xl  font-bold lg:pb-4 pb-2'  >
                    Create <span className='text-primary'>plans that meet</span> your
                </p>
                <p className='text-secondary lg:text-6xl text-2x font-bold lg:pb-4 pb-2'>
                    preferences and exceed
                </p>
                <p className='text-primary lg:text-6xl text-2x font-bold lg:pb-4 pb-2'>
                    your expectations.
                </p>
                <p className='text-secondary font-regular lg:text-[2.063rem] text-2xl lg:pt-16 pt-6'>
                    Join the waitlist
                </p>
                <div className='flex justify-center items-center gap-5 border  border-primary rounded-xl mt-4 py-1	px-3'>
                    <IoMailSharp className='text-primary text-[24px] ' />
                    <input type='email' className='text-[#134040] pl-3 lg:pr-20 outline-none border-l  border-primary	' placeholder='example@email.com' value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }} />
                    <btn className='bg-primary  text-white lg:text-[19px] text-[10px] lg:px-5 px-4 lg:py-2 py-2 rounded-2xl'>Join now</btn>

                </div>
                <p className='text-secondary font-regular text-xs pt-2 text-center '>
                    Don’t worry we won’t send you anything except when we launch the app or send out Beta-Testings :)
                </p>
            </div>
            <div className=' overflow-hidden mt-5'>
            <div className='bg-primary h-4  w-[100%] lg:ml-52 ml-6' ></div>
            </div>
        </>
    )
}

export default Hero

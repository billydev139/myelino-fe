import React from 'react'
import peoplewhitlisted from '../../assets/peoplewhitlisted.png'
import { IoMailSharp } from "react-icons/io5";

const Main = () => {
    return (
        <>
            <div className='grid grid-cols-[1fr_1fr]  gap-6 place-items-center   mb-40'>
                <div className='flex flex-col items-start justify-start mb-10'>
                    <p className='text-[#2A4D4D] text-[28px] font-bold '>
                        Myelino <span className='text-[#2A4D4D] text-[28px] font-normal'>is an all in one application that
                            allows you to socialize, unlock new experiences, and create outings seamlessly all
                            from what other users have shared on the app.</span>
                    </p>
                    <p className='text-secondary font-bold text-6xl pt-32'>
                        Got any questions?
                    </p>
                    <p className='text-secondary font-normal text-[24px] pt-7 text-center mx-auto'>
                        Contact us at
                    </p>
                    <div className='bg-[#113939] flex justify-start px-8 py-2 gap-8 rounded-md place-items-center w-2/3 mt-4	'>
                    <IoMailSharp className='text-white text-[20px]' />

                        <p className='text-white font-medium text-[24px] pr-32'> Contact@myelino.com</p>

                    </div>

                </div>
                <div className='flex flex-col items-center justify-center mt-10'>
                    <img className='pt-10' src={peoplewhitlisted} alt='target image' />
                </div>

            </div>
        </>
    )
}

export default Main

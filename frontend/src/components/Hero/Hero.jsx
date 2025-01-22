import React from 'react'
import hand_icon from '../assets/hand_icon.png'
import arrow_icon from '../assets/arrow.png'
import hero_image from "../assets/hero_image.png"

export default function Hero() {
  return (

    // hero 
    <div className="h-screen bg-[#FCE7FE] flex">

        {/* hero-left */}
        <div className="flex flex-col flex-1 justify-center gap-8 pl-28">
            <h2 className='text-[#090909] text-3xl font-normal leading-none'>New Arrivals Only</h2>

            {/* new collections for everyone */}
            <div>

                {/* new + hero-hand-icon */}
                <div className="flex items-center gap-4">
                    <p className='text-[#171717] text-7xl font-semibold gap-5'>new</p>
                    <img src= {hand_icon} alt="hand-icon" className='w-20' />
                </div>

                <p className='text-[#171717] text-7xl font-semibold gap-5 '>collections</p>
                <p className='text-[#171717] text-7xl font-semibold gap-5 '>for everyone</p>
            </div>

            {/* hero-latest-button */}
            <div className="flex justify-center items-center gap-4 px-8 py-4 bg-[#d62929] hover:bg-[#b61616]  text-white rounded-full text-lg w-fit">
                <div>Latest Collections</div>
                <img src= {arrow_icon} alt="arrow-icon" />
            </div>
        </div>

        {/* hero-right */}
        <div className="flex flex-1 items-center justify-center">
            <img src={hero_image} alt="hero_image" className='w-[64%]' />
        </div>
        
    </div>
  )
}

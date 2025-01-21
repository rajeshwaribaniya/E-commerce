import React from 'react'
import exclusive_image from '../assets/exclusive_image.png'

export default function Offers() {
  return (
    <>
        {/* offers */}
        <div className="w-5/6 h-[64vh] flex mx-auto my-12 px-12 py-0 bg-[#FCE7FE] rounded-3xl gap-6">

            {/* offers-left */}
            <div className="flex flex-1 flex-col justify-center gap-3 pl-12">
                
                <h1 className='text-[#171717] text-6xl font-semibold gap-5'>Exclusive</h1>
                <h1 className='text-[#171717] text-6xl font-semibold gap-5'>Offers For You</h1>
                <p className='text-[#171717] text-lg font-medium'>ONLY ON BEST SELLER PRODUCTS</p>
                <button className='px-8 py-3 bg-[#d62929] hover:bg-[#b61616]  text-white rounded-full text-base mt-2 w-fit cursor-pointer'>Check Now</button>
            </div>

            {/* offers-right */}
            <div className="flex flex-1 items-center justify-end ">
                <img src= {exclusive_image} alt="exclusive-image" className= "h-[64vh]" />
            </div>
        </div>
    </>
  )
}

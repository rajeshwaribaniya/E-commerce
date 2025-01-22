import React from 'react'

export default function NewsLetter() {
  return (
    <>

      {/* newsletter */}
      <div className="w-5/6 h-[40vh] flex flex-col items-center justify-center mx-auto my-12 px-12 py-0 bg-[#FCE7FE] rounded-3xl gap-6">
        <h1 className='text-[#202020] text-4xl font-semibold gap-5'>Get Exclusive Offers On Your Email</h1>
        <p className='text-[#202020] text-base font-normal'>Subscribe to our newsletter and stay updated</p>

        <div className='flex items-center justify-between  w-2/3  '>
          <input type="email"  placeholder='Your email id' className='border-none outline-none text-[#616161] text-base bg-white rounded-tl-full rounded-bl-full border border-[#e3e3e3] pl-6 py-4 w-full' />
          <button className='h-full rounded-tr-full rounded-br-full bg-[#171717] text-white px-4 py-2 cursor-pointer'>Subscribe</button>
        </div>
      </div>
    </>
  )
}

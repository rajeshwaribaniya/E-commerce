import React from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'

export default function Navbar() {
  return (

    // navbar
    <div className='flex justify-between shadow-md px-10 py-2'>

        {/* nav-logo */}
        <div className="flex items-center gap-2">
            <img src= {logo} alt="logo" className='w-12' />
            <p className="text-[#171717] text-xl font-semibold">Shopper</p>
        </div>

        {/* nav menu */}
        <ul className='flex items-center list-none gap-8 text-[#626262] text-xl ' >
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Shop<hr className = "border-none w-[80%] h-1 rounded-lg bg-[#FF4141]"/></li>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Men</li>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Women</li>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer'>Kids</li>
        </ul>

        {/* nav-login-cart */}
        <div className="flex items-center gap-4 cursor-pointer">
            <button className='active:text-[#d62929] hover:text-[#d62929]'>Login</button>
            <button className='px-4 py-2 bg-[#d62929] hover:bg-[#b61616] active:bg-[#b61616] text-white rounded-md text-base'>Create account</button>
            <img src = {cart_icon} alt='cart_icon' className='w-7'/>
        </div>
        
    </div>
  )
}

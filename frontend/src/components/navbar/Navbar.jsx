import React from 'react'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (

    // navbar
    <div className='flex justify-between  px-10 py-2'>

        {/* nav-logo */}
        <div className="flex items-center gap-2">
            <img src= {logo} alt="logo" className='w-12' />
            <p className="text-[#171717] text-xl font-semibold">Shopper</p>
        </div>

        {/* nav menu */}
        <ul className='flex items-center list-none gap-8 text-[#626262] text-base ' >
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer p-1 border hover:border-b-2 hover:text-[#d62929] border-y-0 border-x-0 border-[#d62929] '><Link to = "/">Shop</Link></li>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer p-1 border hover:border-b-2 hover:text-[#d62929] border-y-0 border-x-0 border-[#d62929]'><Link to = '/men'>Men</Link></li>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer p-1 border hover:border-b-2 hover:text-[#d62929] border-y-0 border-x-0 border-[#d62929]'><Link to = '/women'>Women</Link></li>
            <li className='flex flex-col items-center justify-center gap-1 cursor-pointer p-1 border hover:border-b-2 hover:text-[#d62929] border-y-0 border-x-0 border-[#d62929]'><Link to = '/kids'>Kids</Link></li>
        </ul>

        {/* nav-login-cart */}
        <div className="flex items-center gap-4 cursor-pointer">
            {/* <button className='active:text-[#d62929] hover:text-[#d62929]'>Login</button> */}
            {/* <button className='px-4 py-2 bg-[#d62929] hover:bg-[#b61616] active:bg-[#b61616] text-white rounded-md text-base'>Create account</button> */}
            <Link to = '/login'><button className='px-6 py-3 bg-[#d62929] hover:bg-[#b61616] active:bg-[#b61616] text-white rounded-full text-base'>Get Started</button></Link>

            
            <div className="relative">

            <Link to = "/cart"><img src = {cart_icon} alt='cart_icon' className='w-7'/></Link>
            

            {/* nav_cart_count */}
            <span className="w-5 absolute flex items-center justify-center -top-2 -right-2 rounded-full text-xs leading-3 px-2 py-1 bg-[#d62929] text-white">0</span>
            </div>
        </div>
        
    </div>
  )
}

import React from 'react'
import footer_logo from '../assets/logo_big.png'
import instagram_icon from '../assets/instagram_icon.png'
import pinterest_icon from '../assets/pintester_icon.png'
import whatsapp_icon from '../assets/whatsapp_icon.png'

export default function Footer() {
  return (
    <>

        {/* footer */}
        <div className="flex flex-col justify-center items-center gap-6 m-6">

            {/* footer-logo */}
            <div className="flex items-end gap-5">
                <img src= {footer_logo} alt="footer-logo" className='w-14'/>
                <p className='text-[#383838] text-4xl font-medium '>SHOPPER</p>
            </div>

            {/* footer-links */}
            <ul className='flex list-none gap-8 text-[#252525] text-base'>
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Offices</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>

            {/* footer-social-icons */}
            <div className="flex gap-5">

                <div className="p-2">
                    <img src= {instagram_icon} alt="instagram-icon " className='w-6'/>
                </div>

                <div className="p-2">
                    <img src= {pinterest_icon} alt="pinterest_icon" className='w-6' />
                </div>

                <div className="p-2">
                    <img src= {whatsapp_icon} alt="whatsapp_icon"  className='w-6' />
                </div>


            </div>

            {/* footercopyright */}
            <div className="flex flex-col items-center gap-6 w-full text-[#1a1a1a] text-base">
                <hr className='w-4/5 border-t-2 border-[#c7c7c7]' />
                <p>Copyright @ 2025. All Rights Reserved.</p>
            </div>
        </div>
    </>
  )
}

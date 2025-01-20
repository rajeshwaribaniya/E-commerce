import React from 'react'

export default function Item(props) {
  return (
    <>
        {/* item-main */}
        <div className=" w-full max-w-72 hover:scale-105 hover:transition duration-500 justify-center ">
            <img src={props.image} alt="image" className="w-full h-auto object-contain "/>
            <p className='my-2 mx-0  line-clamp-2 '>{props.name}</p>
            
            {/* items-prices */}
            <div className="flex gap-4">

                {/* items-price-new */}
                <div className="text-[#374141] text-base font-medium">Rs. {props.new_price}

                </div>


                <div className="text-[#8c8c8c] text-base font-normal line-through">Rs. {props.old_price}</div>
                
            </div>
        </div>
    </>
  )
}

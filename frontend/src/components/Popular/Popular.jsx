import React from 'react'
import data_product from '../assets/data'
import Item from '../Item/Item'

export default function Popular() {
  return (
    <>

        {/* popular */}
        <div className="flex flex-col items-center gap-4 h-[90vh] w-full my-12 ">
            <h1 className='  text-[#171717] text-5xl font-medium text-center'>POPULAR IN WOMEN</h1>
            <hr className='w-48 border-t-4 border-[#252525]' />

            {/* popular items */}
            <div className="flex flex-wrap m-12 gap-4">
                {data_product.map((item, i)=> {
                    return <Item key= {i} id={item.id} name= {item.name} image= {item.image} new_price = {item.new_price} old_price = {item.old_price} />
                })}
            </div>

        </div>
    </>
  )
}

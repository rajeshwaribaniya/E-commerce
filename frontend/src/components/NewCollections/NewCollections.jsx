import React from 'react'
import new_collections from '../assets/new_collections'
import Item from '../Item/Item'

export default function NewCollections() {
  return (
    <>

      {/* new-collections */}
      <div className="flex flex-col items-center gap-4 h-fit w-full my-12 ">
        <h1 className='text-[#171717] text-3xl font-medium text-center'>NEW COLLECTIONS</h1>
        <hr className='w-48 border-t-4 border-[#252525]' />

        {/* collections */}
        <div className="flex flex-wrap justify-center items-center m-12 gap-4">

          {new_collections.map((item, i)=> {
            return <Item key= {i} id={item.id} name= {item.name} image= {item.image} new_price = {item.new_price} old_price = {item.old_price} />
          })}

        </div>
      </div>
    </>
  )
}

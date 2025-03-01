import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/Item'

export  function ShopCategory(props) {
  const {all_product} = useContext(ShopContext)
  return (
    <>
      <div className="shop-cateory">
        <img src= {props.banner} alt="banner" />

        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1 - 12</span> out of 36 products
          </p>

          <div className="shopcategory-sort">
            Sort by <img src= {dropdown_icon} alt="dropdown" />
          </div>

        </div>

        <div className="shopcategory-products">
          {all_product
          .filter( item => props.category === item.category)
          .map((item, i)=> {
            return <Item key= {i} id={item.id} name= {item.name} image= {item.image} new_price = {item.new_price} old_price = {item.old_price} />
          })}
        </div>

      </div>
    </>
  )
}

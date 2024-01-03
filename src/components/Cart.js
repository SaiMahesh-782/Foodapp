import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from './ItemList'
import { clearCart } from '../utils/CardSlice'

const Cart = () => {
  const cartItems=useSelector((store)=>store.cart.items)

const dispatch=useDispatch()
  const clearcart=()=>{
    dispatch(clearCart())
  }
  return (
    <>
    <div className='text-center m-2 p-2'>
      <div className="text-2xl font-bold">Cart</div>
      <div  className='w-6/12 m-auto'>
        <button type="button" className='m-2 p-2 bg-black text-white rounded-lg' onClick={clearcart}>ClearCart</button>
        <ItemList items={cartItems} />
      </div>
      {cartItems.length===0?<h1>Add items to cart</h1>:<h4>" "</h4>}
    </div>
    </>
  )
}

export default Cart

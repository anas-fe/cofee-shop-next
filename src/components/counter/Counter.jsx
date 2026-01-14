import { FaPlus, FaMinus } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import classes from './counter.module.css'
import { addToCart, removeFromCart } from '@/store/cartSlice'
// import { useState } from 'react'

function Counter({product}) {

  const dispatch = useDispatch()

  function handleIncrement(productObj){
    // console.log(productObj);
    
    dispatch(addToCart(productObj))
  }

  function handleDecrement(productObj){
    dispatch(removeFromCart(productObj))
  }

  const countVal = useSelector(state => state.cart.items.find(item => item.id === product?.id)?.quantity || 0)
  return (
    <div className={classes.cart_counter}>
        <button className={classes.decrease_btn} onClick={() => handleDecrement(product)}><FaMinus /></button>
        <p className={classes.count_label}>{countVal}</p>
        <button className={classes.increase_btn} onClick={() => handleIncrement(product)}><FaPlus /></button>
    </div>
  )
}

export default Counter

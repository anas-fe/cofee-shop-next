import { createSlice } from '@reduxjs/toolkit'

// Define initialState BEFORE using it
const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,  // Now it's defined
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload
      
      const existingItem = state.items.find(item => item.id === newItem.id)

      state.totalQuantity += 1

      // state.totalPrice += newItem.price

      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          price: newItem.price,
          image: newItem.image,
          quantity: 1,
          totalPrice: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += newItem.price
      }
      
      state.totalPrice += newItem.price
    },
    
    removeFromCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find(item => item.id === newItem.id)
      
      if (!existingItem) return
      
      state.totalQuantity--
      state.totalPrice -= existingItem.price
      
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== newItem.id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
    },
    
    clearCart(state, action) {

      const newItem = action.payload
      const existingItem = state.items.filter(item => item.id !== newItem.item.id)
      
      state.items = existingItem
      state.totalQuantity -= newItem.item.quantity
      state.totalPrice -= newItem.item.price*newItem.item.quantity
      
    },
  },
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
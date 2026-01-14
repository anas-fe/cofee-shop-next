import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProductsList(state, action) {
      state.products = action.payload 
    }
  },
})

export const { setProductsList } = productsSlice.actions
export default productsSlice.reducer
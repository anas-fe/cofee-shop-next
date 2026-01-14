import { configureStore } from "@reduxjs/toolkit";
import cartReducer from '@/store/cartSlice';
import productsReducer from '@/store/productsSlice'

export const store = configureStore({
    reducer:{
        cart: cartReducer,
        products: productsReducer
    },
});
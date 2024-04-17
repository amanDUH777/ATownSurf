import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../cart/cartSlice';
// import modalReducer from './features/modal/modalSlice';
import productReducer from '../products/productSlice'
import learnReducer from '../learn/learnSlice'
import customerSlice from '../customer-purchase/customerSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    learn: learnReducer,
    customer: customerSlice
  }
});

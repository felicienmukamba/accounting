import { configureStore } from '@reduxjs/toolkit';
import productsReducer from './productsSlice';
import apiMiddleware from './middleware/api';

export default configureStore({
  reducer: {
    products: productsReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiMiddleware),
});

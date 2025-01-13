import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
    addProduct: (state, action) => [...state, action.payload],
    updateProduct: (state, action) => state.map(product => 
      product.id === action.payload.id ? action.payload : product),
    deleteProduct: (state, action) => state.filter(product => product.id !== action.payload.id)
  }
});

export const { setProducts, addProduct, updateProduct, deleteProduct } = productsSlice.actions;

export const fetchProducts = () => ({ type: 'products/fetchProducts' });
export const createProduct = (product) => ({ type: 'products/addProduct', payload: product });
export const modifyProduct = (product) => ({ type: 'products/updateProduct', payload: product });
export const removeProduct = (productId) => ({ type: 'products/deleteProduct', payload: { id: productId } });
export const detailsProduct = (productId) => ({ type: `product/${productId}`, payload: { id: productId } });

export default productsSlice.reducer;

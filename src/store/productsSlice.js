import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action asynchrone pour récupérer les détails d'un produit
export const detailsProduct = createAsyncThunk(
  'products/detailsProduct',
  async (productId) => {
    const response = await axios.get(`http://localhost:5000/products/${productId}`);
    return response.data;
  }
);

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await axios.get('http://localhost:5000/products');
    return response.data;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
    addProduct: (state, action) => [...state, action.payload],
    updateProduct: (state, action) => state.map(product =>
      product.id === action.payload.id ? action.payload : product),
    deleteProduct: (state, action) => state.filter(product => product.id !== action.payload.id),
    detailProduct: (state, action) => state.map(product =>
      product.id === action.payload.id ? action.payload : product),
  },
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(detailsProduct.fulfilled, (state, action) => {
      const productIndex = state.findIndex(product => product.id === action.payload.id);
      if (productIndex !== -1) {
        state[productIndex] = action.payload;
      } else {
        state.push(action.payload);
      }
    });
  }
});

export const { setProducts, addProduct, updateProduct, deleteProduct, detailProduct } = productsSlice.actions;

export default productsSlice.reducer;

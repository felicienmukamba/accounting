import axios from 'axios';
import { setProducts, addProduct, updateProduct, deleteProduct } from '../productsSlice';

const apiMiddleware = store => next => action => {
  switch(action.type) {
    case 'products/fetchProducts':
      axios.get('http://localhost:5000/products')
        .then(response => {
          store.dispatch(setProducts(response.data));
        });
      break;
    case 'products/addProduct':
      axios.post('http://localhost:5000/products', action.payload)
        .then(response => {
          store.dispatch(addProduct(response.data));
        });
      break;
    case 'products/updateProduct':
      axios.put(`http://localhost:5000/products/${action.payload.id}`, action.payload)
        .then(response => {
          store.dispatch(updateProduct(response.data));
        });
      break;
    case 'products/deleteProduct':
      axios.delete(`http://localhost:5000/products/${action.payload.id}`)
        .then(() => {
          store.dispatch(deleteProduct(action.payload.id));
        });
      break;
    default:
      break;
  }
  return next(action);
};

export default apiMiddleware;

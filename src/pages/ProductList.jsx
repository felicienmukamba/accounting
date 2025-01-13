import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, removeProduct } from '../store/productsSlice';
import UpdateProduct from './UpdateProduct';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import toast from 'react-hot-toast';




const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(removeProduct(id));
    toast.success('Product added successfully!');
  };

  return (
     <table>
      <tbody>
        {
        products.map((product) => 
        <tr key={product.id}>
        <td>{product.name}</td>
        <td>{product.price}</td>
        <td><img src={product.imageUrl} alt={product.name} /></td>
        <td><IconButton size="small" color="error"  aria-label="delete" onClick={() => handleDelete(product.id)}>Delete <DeleteIcon fontSize="small" /></IconButton></td>
        <td><UpdateProduct product={product} /></td>
        </tr>)
        }
      </tbody>
     </table>
  );
};

export default ProductList;

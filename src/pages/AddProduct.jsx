import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/productsSlice';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const AddProduct = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addProduct({ name, price: parseFloat(price), imageUrl }));
    setName('');
    setPrice('');
    setImageUrl('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2} mt={1}>
        <FormControl>
          <InputLabel htmlFor="product-name">Product Name:</InputLabel>
          <Input id="product-name" value={name} onChange={(e) => setName(e.target.value)} required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="product-price">Product Price:</InputLabel>
          <Input id="product-price" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="product-image">Product Image:</InputLabel>
          <Input id="product-image" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </FormControl>
        <Button type="submit" size="small" variant="contained" color="primary">Add</Button>
      </Stack>
    </form>
  );
};

export default AddProduct;

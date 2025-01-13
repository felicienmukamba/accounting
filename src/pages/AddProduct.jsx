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
          <InputLabel htmlFor="my-input">Product Name:</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={name} onChange={(e) => setName(e.target.value)} required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Product Price:</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Product Image:</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required />
        </FormControl>
        <Button type="submit" size="small" variant="contained" color="primary">Ajouter</Button>
      </Stack>
    </form>
  );
};

export default AddProduct;

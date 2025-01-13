import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { modifyProduct } from '../store/productsSlice';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';







const UpdateProduct = ({ product }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(product.name);
  const [price, setPrice] = useState(product.price);
  const [imageUrl, setImageUrl] = useState(product.imageUrl);


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(modifyProduct({ id: product.id, name, price: parseFloat(price), imageUrl: imageUrl }));
  };

  return (
    <form  onSubmit={handleSubmit}>
      <Stack spacing={2} mt={1}>
        <TextField size="small" label="Product Name:" name="name" value={price} onChange={(e) => setName(e.target.value)} required/>
        <TextField size="small" label="Product Price:" name="price" value={price} onChange={(e) => setPrice(e.target.value)} required/>
        <TextField size="small" label="Image URL:" name="imageUrl" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} required/>
        <Tooltip title="Edit PRODUCT">
          <IconButton aria-label="edit" type="submit" size="small">
          <EditIcon fontSize= "small" />
          </IconButton>
        </Tooltip>
      </Stack>
    </form>
  );
};

export default UpdateProduct;

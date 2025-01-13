import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProducts } from '../store/productsSlice';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 600,
    margin: 'auto',
    marginTop: theme.spacing ? theme.spacing(2) : 16,
  },
  media: {
    height: 300,
  },
}));

const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const classes = useStyles();

  useEffect(() => {
    if (products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products.length]);

  const product = products.find((product) => product.id === parseInt(productId, 10));

  if (!product) {
    return <Typography variant="h6">Product not found</Typography>;
  }

  return (
    <Card className={classes.card}>
      <CardHeader title={product.name} subheader={`Price: $${product.price}`} />
      <CardMedia
        className={classes.media}
        image={product.imageUrl}
        title={product.name}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {product.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;

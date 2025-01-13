
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { detailsProduct } from '../store/productsSlice';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';

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
  const product = useSelector((state) => 
    state.products.find((product) => product.id === parseInt(productId, 10))
  );
  const classes = useStyles();

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  if (!product) {
    return <Typography variant="h6" align="center">Loading...</Typography>;
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

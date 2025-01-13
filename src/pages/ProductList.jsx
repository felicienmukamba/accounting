import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productsSlice';
import Cart from '../components/Cart';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '16px',
    marginTop: '16px',
  },
  item: {
    flex: '1 1 calc(33.333% - 32px)',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      flex: '1 1 calc(50% - 16px)',
    },
    [theme.breakpoints.down('sm')]: {
      flex: '1 1 100%',
    },
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={classes.container}>
      {products.map((product) => (
        <Link to={`/products/${product.id}`} className={classes.item} key={product.id}>
          <Cart 
            name={product.name} 
            price={product.price} 
            imageUrl={product.imageUrl} 
          />
        </Link>
      ))}
    </div>
  );
};

export default ProductList;

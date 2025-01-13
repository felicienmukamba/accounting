import React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 345,
    margin: 'auto',
    marginBottom: theme.spacing ? theme.spacing(2) : 16,
  },
  media: {
    height: 200,
    [theme.breakpoints.down('sm')]: {
      height: 150,
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  price: {
    marginTop: theme.spacing ? theme.spacing(1) : 8,
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
}));

const Cart = ({ name, price, imageUrl }) => {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.card}>
        <CardHeader title={name} subheader="Red" />
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={name}
        />
        <CardContent className={classes.content}>
          <Typography className={classes.price}>
            ${price}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Cart;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productsSlice';
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button, IconButton, Tooltip, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import UpdateProduct from './UpdateProduct'; // Assurez-vous que le chemin est correct

const useStyles = makeStyles((theme) => ({
  container: {
    height: 400,
    width: '100%',
    marginTop: '16px',
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleClickOpen = (product) => {
    setSelectedProduct(product);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'name', headerName: 'Name', width: 150, editable: true },
    { field: 'price', headerName: 'Price', width: 150, editable: true },
    { field: 'imageUrl', headerName: 'Image URL', width: 200, editable: true },
    {
      field: 'actions',
      headerName: 'Actions',
      sortable: false,
      width: 200,
      renderCell: (params) => (
        <div>
          <Link to={`/products/${params.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button size="small" color="primary">View</Button>
          </Link>
          <Tooltip title="Edit Product">
            <IconButton aria-label="edit" size="small" onClick={() => handleClickOpen(params.row)}>
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  const rows = products.map((product) => ({
    id: product.id,
    name: product.name,
    price: product.price,
    imageUrl: product.imageUrl,
  }));

  return (
    <div className={classes.container}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Product</DialogTitle>
        <DialogContent>
          {selectedProduct && <UpdateProduct product={selectedProduct} />}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProductList;

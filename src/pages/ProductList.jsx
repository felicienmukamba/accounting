import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct } from '../store/productsSlice';
import { makeStyles } from '@mui/styles';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button, IconButton, Tooltip, Dialog, DialogActions, DialogContent, DialogTitle, Fab, TextField, Stack } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateProduct from './UpdateProduct'; // Assurez-vous que le chemin est correct

const useStyles = makeStyles((theme) => ({
  container: {
    height: 400,
    width: '100%',
    marginTop: '16px',
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

const ProductList = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openAdd, setOpenAdd] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', imageUrl: '' });

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

  const handleClickOpenAdd = () => {
    setOpenAdd(true);
  };

  const handleCloseAdd = () => {
    setOpenAdd(false);
    setNewProduct({ name: '', price: '', imageUrl: '' });
  };

  const handleAddProduct = () => {
    dispatch(addProduct(newProduct));
    handleCloseAdd();
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
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
          <Tooltip title="Delete Product">
            <IconButton aria-label="delete" size="small" onClick={() => handleDeleteProduct(params.id)}>
              <DeleteIcon fontSize="small" />
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
      <Dialog open={openAdd} onClose={handleCloseAdd}>
        <DialogTitle>Add Product</DialogTitle>
        <DialogContent>
          <Stack spacing={2} mt={1}>
            <TextField size="small" label="Product Name" name="name" value={newProduct.name} onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })} required />
            <TextField size="small" label="Product Price" name="price" value={newProduct.price} onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })} required />
            <TextField size="small" label="Image URL" name="imageUrl" value={newProduct.imageUrl} onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })} required />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseAdd} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddProduct} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
      <Tooltip title="Add Product">
        <Fab color="primary" className={classes.fab} onClick={handleClickOpenAdd}>
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  );
};

export default ProductList;

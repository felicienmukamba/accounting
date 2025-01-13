import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import store from './store/store';
import ProductList from './pages/ProductList';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <div className="App">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/add" element={<AddProduct />} />
              <Route path="/products/:productId" element={<ProductDetails />} />
              <Route path="/products" element={<ProductList />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
};

export default App;

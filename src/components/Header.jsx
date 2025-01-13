import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: '100%',
    position: 'fixed',
    top: 0,
    marginBottom: theme.spacing ? theme.spacing(2) : 16,
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: theme.spacing ? theme.spacing(1) : 8,
    height: '40px',
    width: '40px',
    cursor: 'pointer',
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    marginRight: theme.spacing ? theme.spacing(2) : 16,
  },
  offset: theme.mixins.toolbar, // Helper to create space below the AppBar
}));

const Header = () => {
  const classes = useStyles();

  return (
    <>
      <AppBar className={classes.appBar} color="primary">
        <Toolbar className={classes.toolbar}>
          <div className={classes.title}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Logo de l'entreprise" className={classes.logo} />
            <Typography variant="h6">
              Products Manager
            </Typography>
          </div>
          <div>
            <Button color="inherit" className={classes.button}>
              <Link to="/" className={classes.link}>Accueil</Link>
            </Button>
            <Button color="inherit" className={classes.button}>
              <Link to="/products" className={classes.link}>Liste</Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </>
  );
};

export default Header;

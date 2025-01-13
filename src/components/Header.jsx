import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  appBar: {
    marginBottom: theme.spacing ? theme.spacing(2) : 16,
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    marginRight: theme.spacing ? theme.spacing(1) : 8,
    height: '20px', // Ajustez la taille du logo selon vos besoins
    width: '20px', // Ajustez la taille du logo selon vos besoins
    cursor: 'pointer',
    
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
  button: {
    marginRight: theme.spacing ? theme.spacing(2) : 16,
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary" className={classes.appBar}>
      <Toolbar>
        <div className={classes.title}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Logo de l'entreprise" className={classes.logo} />
          <Typography variant="h6">
            Products Manager
          </Typography>
        </div>
        <Button color="inherit" className={classes.button}>
          <Link to="/" className={classes.link}>Accueil</Link>
        </Button>
        <Button color="inherit" className={classes.button}>
          <Link to="/add" className={classes.link}>Ajouter</Link>
        </Button>
        <Button color="inherit" className={classes.button}>
          <Link to="/products" className={classes.link}>Liste</Link>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

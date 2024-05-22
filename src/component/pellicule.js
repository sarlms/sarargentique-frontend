import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import FeatureProduct from "./featureProduct";


const StyledRouterLink = styled(RouterLink)(({ theme }) => ({
  color: 'white',
  marginRight: '20px',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  fontFamily: 'Grafton, sans-serif',
}));

const Pellicule = () => {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ bgcolor: "#965242" }}>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <RouterLink to="/accueil">
              <img src="https://i.imgur.com/1N3I3E4.png" alt="Logo" style={{ width: '300px', marginRight: '20px' }} />
            </RouterLink>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <StyledRouterLink to="/shop">SHOP</StyledRouterLink>
              <StyledRouterLink to="/pellicule">PELLICULE</StyledRouterLink>
              <StyledRouterLink to="/appareil-photo">APPAREIL PHOTO</StyledRouterLink>
              <StyledRouterLink to="/localisation">LOCALISATION</StyledRouterLink>
            </Box>
            <Typography component="div">
              <StyledRouterLink to="/connexion" style={{ marginRight: '20px'}}>SE CONNECTER</StyledRouterLink>
              <StyledRouterLink to="/panier">
                <IconButton size="large" edge="end" color="inherit">
                  <ShoppingCartIcon />
                </IconButton>
              </StyledRouterLink>
            </Typography>
          </Toolbar>
        </AppBar>
        <h2 className="text-muted text-center mt-4 mb-3">New Arrival</h2>
        <div className="container pb-5 px-lg-5">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
            {Array.from({ length: 6 }, (_, i) => {
                return <FeatureProduct key={i} />;
            })}
            </div>
        </div>
        </Box>
  );
}

export default Pellicule;
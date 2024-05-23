import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const StyledRouterLink = styled(RouterLink)(({ theme }) => ({
  color: 'white',
  marginRight: '20px',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
  fontFamily: 'Grafton, sans-serif',
}));

const NavBar = () => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#42240F" }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <RouterLink to="/accueil">
          <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/logo.png" alt="Logo" style={{ width: '300px', marginRight: '20px' }} />
        </RouterLink>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <RouterLink to="/pellicule">
            <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/pellicules.png" alt="Pellicules" style={{ width: '120px', marginRight: '20px' }} />
          </RouterLink>
          <RouterLink to="/feed">
            <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/feed.png" alt="Feed" style={{ width: '55px', marginRight: '20px' }} />
          </RouterLink>
        </Box>
        <RouterLink to="/connexion" style={{ marginRight: '20px'}}>
          <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/connecter.png" alt="Se Connecter" style={{ width: '150px', marginRight: '20px' }} />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

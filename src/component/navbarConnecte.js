import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Link as RouterLink } from 'react-router-dom';

const NavBarConnecte = ({ user, onLogout }) => {
  return (
    <AppBar position="static" sx={{ bgcolor: "#42240F" }}>
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <RouterLink to="/accueil">
          <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/logo.png" alt="Logo" style={{ width: '300px', marginRight: '20px' }} />
        </RouterLink>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>

        {user ? ( // Vérifie si l'utilisateur est connecté en vérifiant si l'objet user est défini
          <>
            <p className="user-info">{`Bienvenue, ${user.pseudo} `}</p>
            <button className="logout-btn" onClick={onLogout}>Se déconnecter</button>
          </>
        ) : (
          <p className="user-info">Non Connecté</p>
        )}

        </Box>
        <RouterLink to="/pellicule">
            <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/pellicules.png" alt="Pellicules" style={{ width: '120px', marginRight: '20px' }} />
          </RouterLink>
          <RouterLink to="/feed">
            <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/feed.png" alt="Feed" style={{ width: '55px', marginRight: '20px' }} />
          </RouterLink>
        <RouterLink to="/profil" style={{ marginRight: '20px'}}>
          <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/profil.png" alt="Profil" style={{ width: '150px', marginRight: '20px' }} />
        </RouterLink>
      </Toolbar>
    </AppBar>
  );
}

export default NavBarConnecte;

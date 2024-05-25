import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Inscription({ socket }) {
  const [formData, setFormData] = useState({
    email: '',
    pseudo: '',
    password: '',
    confirmPassword: '',
    nom: '',
    prenom: ''
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      console.error("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/user/signup`, formData);
      localStorage.setItem('token', response.data.token);
      console.log('Données envoyées avec succès !');
      navigate('/accueil');
    } catch (error) {
      console.error('Erreur lors de l\'envoi des données :', error);
    }
  };

  return (
    <ThemeProvider theme={createTheme()}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: '#ffffff',
          }}
        >
          <Box
            sx={{
              my: 1,
              mx: 15,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ mt: 1, bgcolor: '#1e2c28'}}>
              <AccountBoxRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: '#1e2c28', mt: 2, fontWeight: 'bold' }}>
              INSCRIPTION
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="prenom"
                label="Prénom"
                name="prenom"
                autoFocus
                value={formData.prenom}
                onChange={handleChange}
                sx={{
                  '& label.Mui-focused': {
                    color: '#1e2c28',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1e2c28',
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="nom"
                label="Nom"
                name="nom"
                autoComplete="family-name"
                value={formData.nom}
                onChange={handleChange}
                sx={{
                  '& label.Mui-focused': {
                    color: '#1e2c28',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1e2c28',
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="pseudo"
                label="Pseudo"
                name="pseudo"
                autoComplete="username"
                value={formData.pseudo}
                onChange={handleChange}
                sx={{
                  '& label.Mui-focused': {
                    color: '#1e2c28',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1e2c28',
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse Email"
                name="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                sx={{
                  '& label.Mui-focused': {
                    color: '#1e2c28',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1e2c28',
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Mot de passe"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                onChange={handleChange}
                sx={{
                  '& label.Mui-focused': {
                    color: '#1e2c28',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1e2c28',
                    },
                  },
                }}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="confirmPassword"
                label="Confirmer le mot de passe"
                type="password"
                id="confirmPassword"
                autoComplete="current-password"
                value={formData.confirmPassword}
                onChange={handleChange}
                sx={{
                  '& label.Mui-focused': {
                    color: '#1e2c28',
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&:hover fieldset': {
                      borderColor: '#1e2c28',
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: '#1e2c28',
                    },
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, bgcolor: '#283b39', '&:hover': { bgcolor: '#1e2c28' } }}
              >
                S'inscrire
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/connexion" variant="body2" sx={{ color: '#1e2c28' }}>
                    Déjà un compte ? Connectez-vous
                  </Link>
                </Grid>
              </Grid>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="/accueil" variant="body2" sx={{ color: '#1e2c28' }}>
                    Continuer sans connexion ?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.imgur.com/3gig540.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </Grid>
    </ThemeProvider>
  );
}

export default Inscription;
import * as React from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockPersonRoundedIcon from '@mui/icons-material/LockPersonRounded';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { brown } from '@mui/material/colors';
import axios from 'axios';

const defaultTheme = createTheme();

export default function Connexion({ onLogin, socket }) {
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    try {
      const response = await axios.post('http://localhost:3000/api/user/login', {
        email: data.get('email'),
        password: data.get('password'),
      });

      // Stocker le token dans le localStorage
      localStorage.setItem('token', response.data.token);

      // Appeler la fonction de gestion de la connexion avec le token JWT
      if (typeof onLogin === 'function') {
        onLogin(response.data.token);
      }

      // Redirigez vers la page d'accueil après une connexion réussie
      navigate('/accueilConnecte');
    } catch (error) {
      console.error('Erreur lors de la connexion :(', error);
      setError('Mot de passe ou email incorrect :((');
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://i.imgur.com/8wg7aX3.png)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={4} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              mt: 10,
            }}
          >
            <img src="https://i.imgur.com/cZj22C9.png" alt="Logo" style={{ width: '400px', marginBottom: '20px' }} />
            <Avatar sx={{ mt: 5.5, bgcolor: brown[500] }}>
              <LockPersonRoundedIcon />
            </Avatar>
            <Typography component="h1" variant="h5" sx={{ color: brown[500], mt: 2, fontWeight: 'bold' }}>
              CONNEXION
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse Email"
                name="email"
                autoComplete="email"
                autoFocus
                sx={{
                  '& label.Mui-focused': {
                    color: brown[500],
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: brown[500],
                    },
                    '&:hover fieldset': {
                      borderColor: brown[700],
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: brown[500],
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
                autoComplete="current-password"
                sx={{
                  '& label.Mui-focused': {
                    color: brown[500],
                  },
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      borderColor: brown[500],
                    },
                    '&:hover fieldset': {
                      borderColor: brown[700],
                    },
                    '&.Mui-focused fieldset': {
                      borderColor: brown[500],
                    },
                  },
                }}
              />
              {error && <Typography color="error" variant="body2">{error}</Typography>}
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" sx={{ color: brown[500], '&.Mui-checked': { color: brown[500] } }} />}
                label="Se souvenir de moi"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2, bgcolor: brown[500], '&:hover': { bgcolor: brown[700] } }}
              >
                se connecter
              </Button>
              <Grid container>
                <Grid item>
                  <RouterLink to="/inscription" style={{ textDecoration: 'none' }}>
                    <Link
                      component="button"
                      variant="body2"
                      sx={{
                        mt: 0,
                        mb: 3,
                        color: 'brown',
                        textDecoration: 'underline',
                        '&:hover': {
                          color: 'brown',
                        },
                      }}
                    >
                      {"Pas de compte ? Inscrivez-vous !"}
                    </Link>
                  </RouterLink>
                </Grid>
              </Grid>
            </Box>
            <RouterLink to="/accueil" style={{ textDecoration: 'none' }}>
              <Link
                component="button"
                variant="body2"
                sx={{
                  mt: 2,
                  mb: 0,
                  color: 'brown',
                  textDecoration: 'underline',
                  '&:hover': {
                    color: 'brown',
                  },
                }}
              >
                {"continuer sans connexion"}
              </Link>
            </RouterLink>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

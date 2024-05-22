import * as React from 'react';
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

function Inscription({ onLogin }) { // onLogin pour gérer le token JWT
  const [error, setError] = React.useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const backendUrl = process.env.NODE_ENV === 'production'
  ? process.env.REACT_APP_URL_BACKEND_PROD
  : process.env.REACT_APP_URL_BACKEND;

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const pseudo = data.get('pseudo');
    const password = data.get('password');
    const confirmPassword = data.get('confirmPassword');
    const firstName = data.get('firstName');
    const lastName = data.get('lastName');

    if (!email || !password || !confirmPassword || !firstName || !lastName || !pseudo) {
      setError('Tous les champs sont obligatoires');
      return;
    }

    if (!validateEmail(email)) {
      setError('Adresse email invalide');
      return;
    }

    if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
      return;
    }

    const userData = {
      email,
      pseudo,
      password,
      prenom: firstName,
      nom: lastName,
    };

    try {
      
      //    `   du 7 !!!
      //si vite : git de WAYNE !!!!

      const response = await axios.post(`${backendUrl}/api/user/create`, userData); // Envoyez les données au backend
      console.log(response.data); // Affichez la réponse du serveur
      setError(''); // Réinitialisez l'erreur si l'inscription est réussie
      
      // Appeler la fonction de gestion de la connexion avec le token JWT
      if (response.data.token) {
        onLogin(response.data.token);
      }
      
      // Rediriger vers la page d'accueil après une inscription réussie
      navigate('/accueil');
    } catch (error) {
      console.error('Error registering new user:', error);
      // Afficher le message d'erreur spécifique du serveur s'il existe
      const errorMessage = error.response?.data?.message || 'Erreur lors de l\'inscription de l\'utilisateur';
      setError(errorMessage);
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
            bgcolor: '#ffffff', // Arrière-plan blanc
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
              {/* Les champs de saisie pour le nom, prénom et pseudo */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="Prénom"
                name="firstName"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Nom"
                name="lastName"
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="pseudo"
                label="Pseudo"
                name="pseudo"
              />
              {/* Les champs de saisie pour l'email et le mot de passe */}
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Adresse Email"
                name="email"
                autoComplete="email"
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
              />
              {error && <Typography color="error" variant="body2">{error}</Typography>}
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2, bgcolor: '#283b39', '&:hover': { bgcolor: '#1e2c28' } }} // Bouton vert foncé
              >
                S'inscrire
              </Button>
              {/* Le lien pour retourner à la page de connexion */}
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
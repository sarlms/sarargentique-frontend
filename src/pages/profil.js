import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './profil.css';

const Profil = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem('token');
      console.log('Token récupéré :', token); // Log du token

      if (!token) {
        console.error('Aucun token trouvé, redirection vers la page de connexion');
        navigate('/connexion');
        return;
      }

      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/user/me`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        console.log('Réponse de l\'API :', response.data); // Log de la réponse
        setUser(response.data.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données utilisateur :', error);
        navigate('/connexion');
      }
    };

    fetchUserData();
  }, [navigate]);

  if (!user) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="profil-container">
      <h1 className="profil-title">Mon Profil</h1>
      <div className="profil-details">
        <p><strong>Nom :</strong> {user.nom}</p>
        <p><strong>Prénom :</strong> {user.prenom}</p>
        <p><strong>Pseudo :</strong> {user.pseudo}</p>
        <p><strong>Email :</strong> {user.email}</p>
        <p><strong>Rôle :</strong> {user.role}</p>
      </div>
    </div>
  );
};

export default Profil;

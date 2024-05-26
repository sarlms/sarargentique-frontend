import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../component/navbar';
import Masonry from '@mui/lab/Masonry';
import './pelliculePhotos.css';

function PelliculePhotos() {
  // Récupération de l'identifiant de la pellicule depuis les paramètres d'URL
  const { pelliculeId } = useParams();
  // Déclaration des états pour stocker les photos et les détails de la pellicule
  const [photos, setPhotos] = useState([]);
  const [pellicule, setPellicule] = useState(null);

  // Effet de chargement pour récupérer les photos et les détails de la pellicule
  useEffect(() => {
    // Fonction asynchrone pour récupérer les photos de la pellicule
    const fetchPhotos = async () => {
      try {
        // Requête GET vers l'API pour obtenir les photos de la pellicule spécifiée
        const response = await axios.get(`http://localhost:3000/api/photo/pellicule/${pelliculeId}`);
        // Mise à jour de l'état avec les données des photos
        setPhotos(response.data);
      } catch (error) {
        // Gestion des erreurs en cas d'échec de la récupération des photos
        console.error('Error fetching photos:', error);
      }
    };

    // Fonction asynchrone pour récupérer les détails de la pellicule
    const fetchPellicule = async () => {
      try {
        // Requête GET vers l'API pour obtenir les détails de la pellicule spécifiée
        const response = await axios.get(`http://localhost:3000/api/pellicule/${pelliculeId}`);
        // Mise à jour de l'état avec les données de la pellicule
        setPellicule(response.data);
      } catch (error) {
        // Gestion des erreurs en cas d'échec de la récupération des détails de la pellicule
        console.error('Error fetching pellicule details:', error);
      }
    };

    // Appel des fonctions de récupération des photos et des détails de la pellicule
    fetchPhotos();
    fetchPellicule();
  }, [pelliculeId]); // Déclenchement de l'effet lorsque l'identifiant de la pellicule change

  // Affichage des éléments JSX pour la pellicule
  return (
    <div>
      <NavBar /> {/* Composant de barre de navigation */}
      {/* Titre de la pellicule */}
      <h1 className="center-title">
        {/* Affichage du nom de la pellicule si disponible, sinon affichage de "Loading..." */}
        {pellicule ? `${pellicule.nom}` : 'Loading...'}
      </h1>
      {/* Conteneur des photos */}
      <div className="photos-container">
        {/* Vérification si des photos sont disponibles */}
        {photos.length === 0 ? (
          // Affichage d'un message si aucune photo n'est disponible pour cette pellicule
          <p>No photos available for this pellicule.</p>
        ) : (
          // Utilisation du composant Masonry pour la disposition des photos en grille
          <Masonry columns={3} spacing={3}>
            {/* Boucle sur chaque photo pour afficher ses détails */}
            {photos.map((photo) => (
              // Conteneur de chaque photo avec un lien vers les détails de la photo
              <div key={photo._id} className="photo-container">
                <Link to={`/photoDetail/${photo._id}`}>
                  {/* Image de la photo avec sa légende et ses détails */}
                  <img src={photo.photoURL} alt={photo.legende} className="photo" />
                  {/* Overlay pour afficher les compteurs de likes et de commentaires */}
                  <div className="photo-overlay">
                    {/* Contenu de l'overlay avec les compteurs de likes et de commentaires */}
                    <div className="overlay-content">
                      {/* Icône de like avec le nombre de likes */}
                      <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/white-heart_1f90d.png" alt="Likes" />
                      <span>{photo.likesCount}</span>
                      {/* Icône de commentaire avec le nombre de commentaires */}
                      <img src="https://static.vecteezy.com/system/resources/previews/018/887/859/non_2x/speech-bubble-icon-png.png" alt="Comments" style={{ marginLeft: '10px' }} />
                      <span>{photo.commentsCount}</span>
                    </div>
                  </div>
                  {/* Affichage de la légende de la photo si disponible */}
                  {photo.legende && <p className="photo-legende">{photo.legende}</p>}
                </Link>
              </div>
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
}

export default PelliculePhotos;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavBar from '../component/navbar';
import './pellicule.css'; // Importer le fichier CSS

function Pellicule() {
  const [pellicules, setPellicules] = useState([]); // State pour stocker les pellicules

  useEffect(() => {
    // Fonction pour récupérer toutes les pellicules
    const fetchPellicules = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/pellicule');
        setPellicules(response.data); // Mettre à jour le state avec les données des pellicules
      } catch (error) {
        console.error('Error fetching pellicules:', error);
      }
    };

    fetchPellicules();
  }, []);

  return (
    <div>
      <NavBar/>
      <h1 className="center-title">LISTE DES PELLICULES</h1>
      <div className="card-container">
        {pellicules.map((pellicule) => (
          <div 
            key={pellicule._id} 
            className="card" 
          >
            <h2 className="card-title">{pellicule.nom}</h2>
            <p><strong>ISO :</strong> {pellicule.iso}</p>
            <p><strong>Description :</strong> {pellicule.description}</p>
            <p><strong>Couleur :</strong> {pellicule.couleur}</p>
            <img src={pellicule.url} alt={pellicule.nom} />
            <div className="button-container"> {/* Container pour le bouton */}
              <hr className="button-line" /> {/* Trait au-dessus du bouton */}
              <button className="photos-button">PHOTOS</button> {/* Bouton "PHOTOS" */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pellicule;

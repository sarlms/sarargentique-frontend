import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../component/navbar';
import Masonry from '@mui/lab/Masonry';
import './pelliculePhotos.css'; // Importer le fichier CSS

function PelliculePhotos() {
  const { pelliculeId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [pellicule, setPellicule] = useState(null);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/photo/pellicule/${pelliculeId}`);
        console.log('Fetched photos:', response.data);
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    const fetchPellicule = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/pellicule/${pelliculeId}`);
        console.log('Fetched pellicule:', response.data);
        setPellicule(response.data);
      } catch (error) {
        console.error('Error fetching pellicule details:', error);
      }
    };

    fetchPhotos();
    fetchPellicule();
  }, [pelliculeId]);

  return (
    <div>
      <NavBar />
      <h1 className="center-title">
        {pellicule ? `${pellicule.nom}` : 'Loading...'}
      </h1>
      <div className="photos-container">
        {photos.length === 0 ? (
          <p>No photos available for this pellicule.</p>
        ) : (
          <Masonry columns={3} spacing={3}>
            {photos.map((photo) => (
              <div key={photo._id}>
                <img src={photo.photoURL} alt={photo.legende} className="photo" />
                {photo.legende && <p className="photo-legende">{photo.legende}</p>}
              </div>
            ))}
          </Masonry>
        )}
      </div>
    </div>
  );
}

export default PelliculePhotos;

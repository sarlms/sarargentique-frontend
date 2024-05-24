import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import NavBar from '../component/navbar';
import './feed.css';

const PhotoContainer = styled('div')({
  padding: '20px',
});

const Feed = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchRandomPhotos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/photo');
        // Obtenez un sous-ensemble de 20 photos aléatoires
        const randomPhotos = response.data.sort(() => 0.5 - Math.random()).slice(0, 20);
        setPhotos(randomPhotos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };

    fetchRandomPhotos();
  }, []);

  return (
    <div>
      <NavBar />
      <h1 className="center-title">
        FEED
      </h1>
      <h2 className="sub-title">
        Découvrez de nouveaux photographes !
      </h2>
      <h2 className="description">
        Vos 20 photos aléatoires
      </h2>
      <PhotoContainer>
        <Masonry columns={3} spacing={3}>
          {photos.map((photo) => (
            <div key={photo._id}>
              <img src={photo.photoURL} alt={photo.legende} style={{ width: '100%', height: 'auto', display: 'block' }} />
              {photo.legende && <Typography variant="body1" align="center" sx={{ mt: 1 }}>{photo.legende}</Typography>}
            </div>
          ))}
        </Masonry>
      </PhotoContainer>
    </div>
  );
};

export default Feed;

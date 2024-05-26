import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
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
        const randomPhotos = response.data.sort(() => 0.5 - Math.random()).slice(0, 20);
        setPhotos(randomPhotos); // Modification ici
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    };
  
    fetchRandomPhotos();
  }, []);

  return (
    <div>
      <NavBar />
      <h1 className="center-title">FEED</h1>
      <h2 className="sub-title">Découvrez de nouveaux photographes !</h2>
      <h2 className="description">Vos 20 photos aléatoires</h2>
      <PhotoContainer>
        <Masonry columns={3} spacing={3}>
          {photos && photos.length > 0 && photos.map((photo) => (
            <div key={photo._id} className="photo-container">
              <Link to={`/photoDetail/${photo._id}`}>
                <img src={photo.photoURL} alt={photo.legende} className="photo" />
                <div className="photo-overlay">
                  <div className="overlay-content">
                    <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/white-heart_1f90d.png" alt="Likes" />
                    <span>{photo.likesCount}</span>
                    <img src="https://static.vecteezy.com/system/resources/previews/018/887/859/non_2x/speech-bubble-icon-png.png" alt="Comments" style={{ marginLeft: '10px' }} />
                    <span>{photo.commentsCount}</span>
                  </div>
                </div>
                {photo.legende && <p className="photo-legende">{photo.legende}</p>}
              </Link>
            </div>
          ))}
        </Masonry>
      </PhotoContainer>
    </div>
  );
};

export default Feed;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import NavBar from '../component/navbar';
import './photoDetail.css';

function PhotoDetail() {
  const { id } = useParams();
  const [photo, setPhoto] = useState(null);
  const [likes, setLikes] = useState([]);
  const [commentaires, setCommentaires] = useState([]);

  useEffect(() => {
    const fetchPhoto = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/photo/details/${id}`);
        setPhoto(response.data);
      } catch (error) {
        console.error('Error fetching photo details:', error);
      }
    };

    const fetchLikes = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/photo/${id}/likes`);
        setLikes(response.data);
      } catch (error) {
        console.error('Error fetching likes:', error);
      }
    };

    const fetchCommentaires = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/photo/${id}/comments`);
        setCommentaires(response.data);
      } catch (error) {
        console.error('Error fetching comments:', error);
      }
    };

    fetchPhoto();
    fetchLikes();
    fetchCommentaires();
  }, [id]);

  return (
    <div>
      <NavBar />
      {photo ? (
        <div className="photo-container">
          <img src={photo.photoURL} alt={photo.legende} className="photo-detail" />
          <div className="info-container">
            {photo.legende && <p>{photo.legende}</p>}
            {photo.userId && <p>Postée par @{photo.userId}</p>} {/* Afficher le pseudo de l'utilisateur */}
            <p>{likes.length} likes</p>
            <ul>
              {likes.map((like) => (
                <li key={like._id}>{like.userId}</li>
              ))}
            </ul>
            <h3>Commentaires</h3>
            <ul>
              {commentaires.map((comment) => (
                <li key={comment._id}>
                  <p><strong>{comment.userId}:</strong> {comment.content}</p>
                  <p>{new Date(comment.date).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default PhotoDetail;

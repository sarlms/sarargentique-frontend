import React, { useState } from 'react';
import NavBar from '../component/navbar';
import { Checkbox, FormControlLabel } from '@material-ui/core'; // Importez Checkbox et FormControlLabel depuis @material-ui/core
import './profil.css';

const Profil = () => {
  const [selectedPellicules, setSelectedPellicules] = useState([]);
  const [isAddingPhoto, setIsAddingPhoto] = useState(false);

  const handlePelliculeChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setSelectedPellicules([value]);
    } else {
      setSelectedPellicules([]);
    }
  };

  const toggleAddPhotoForm = () => {
    setIsAddingPhoto(!isAddingPhoto);
  };

  const pellicules = [
    "FUJICOLOR - C200",
    "FUJIFILM - XTRA",
    "KODAK - 400 TMAX",
    "KODAK - COLORPLUS",
    "KODAK - EKTRA",
    "KODAK - GOLD",
    "KODAK - PORTRA",
    "KODAK - PRO IMAGE",
    "KODAK - ULTRAMAX",
    "WASHI - A",
    "WASHI - X"
  ];

  return (
    <div className="page-container">
      <NavBar />
      <h1 className="center-title">
        PROFIL
      </h1>
      <div className="profile-wrapper">
        <div className="profile-container">
          <div className="profile-picture">
            <img src="https://raw.githubusercontent.com/sarlms/sarargentique-pellicules-photos/main/depositphotos_526270308-stock-illustration-smile-emotion-vector-icon-illustration.jpg" alt="Profil" />
          </div>
          <div className="user-info">
            <h2>VOS INFOS</h2>
            <p>Nom :</p>
            <p>Prénom :</p>
            <p>Pseudo :</p>
            <p>Adresse email :</p>
          </div>
          <div className="add-photo">
            <button onClick={toggleAddPhotoForm}>POSTER UNE PHOTO</button>
            {isAddingPhoto && (
              <form>
                <div className="form-group">
                  <input type="text" placeholder="URL" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Légende (facultatif)" />
                </div>
                <h3 className="film-label">Pellicule utilisée :</h3>
                {pellicules.map(pellicule => (
                  <div key={pellicule}>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={selectedPellicules.includes(pellicule)}
                          onChange={handlePelliculeChange}
                          value={pellicule}
                          color="#DD4C2E"
                        />
                      }
                      label={pellicule}
                    />
                  </div>
                ))}
                <button type="submit">Ajouter</button>
              </form>
            )}
          </div>
        </div>
        <div className="user-photos">
          <h2>Toutes mes photos :</h2>
        </div>
      </div>
    </div>
  );
}

export default Profil;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Connexion from './pages/connexion';
import Inscription from './pages/inscription';
import Accueil from './pages/accueil';
import Pellicule from './pages/pellicules';
import PelliculeDetail from './pages/pelliculeDetail';
import PelliculePhotos from './pages/pelliculePhotos';
import Profil from './pages/profil';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/accueil" />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/pellicule" element={<Pellicule />} />
        <Route path="/pelliculeDetail" element={<PelliculeDetail />} />
        <Route path="/pelliculePhotos/:pelliculeId" element={<PelliculePhotos />} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </Router>
  );
}

export default App;

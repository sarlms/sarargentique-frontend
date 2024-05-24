import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Connexion from './pages/connexion';
import Inscription from './pages/inscription';
import Accueil from './pages/accueil';
import AccueilConnecte from './pages/accueilConnecte';  
import Pellicule from './pages/pellicule';
import PelliculeDetail from './pages/pelliculeDetail';
import PelliculePhotos from './pages/pelliculePhotos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/accueil" />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/accueilConnecte" element={<AccueilConnecte />} />
        <Route path="/pellicule" element={<Pellicule />} />
        <Route path="/pelliculeDetail" element={<PelliculeDetail />} />
        <Route path="/pelliculePhotos/:pelliculeId" element={<PelliculePhotos />} />
      </Routes>
    </Router>
  );
}

export default App;

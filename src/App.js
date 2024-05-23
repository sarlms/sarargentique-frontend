import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Connexion from './pages/connexion';
import Inscription from './pages/inscription';
import Accueil from './pages/accueil';
//import Localisation from './component/localisation';
import Pellicule from './pages/pellicule';
//import Shop from './component/shop';
//import Panier from './component/panier';
import FeatureProduct from './pages/featureProduct';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/accueil" />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/accueil" element={<Accueil />} />
        {/* <Route path="/localisation" element={<Localisation />} /> */}
        <Route path="/pellicule" element={<Pellicule />} />
        {/* <Route path="/shop" element={<Shop />} />
        <Route path="/panier" element={<Panier />} /> */}
        <Route path="/featureProduct" element={<FeatureProduct />} />
      </Routes>
    </Router>
  );
}

export default App;

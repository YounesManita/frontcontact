import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Home from './pages/Home';
import Contact from './pages/ContactPage'; // Import de la page Contact
import LoadingPage from './pages/LandingPages';
import AboutUs  from './pages/AboutUSPage';
import Service  from './pages/ServicePage';
import ServiceDetails from "./pages/DetailsPage"; 
import LoginPage from "./pages/loginPage"
import MessagePage from "./pages/MessagePage"
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simule un temps de chargement
    return () => clearTimeout(timer); // Nettoyage du timer
  }, []);

  return (
    <>
      {loading ? (
        <LoadingPage />
      ) : (
        <Router>
          {/* Navbar visible sur toutes les pages */}
          <Navbar />
          
          {/* Définition des routes pour chaque page */}
          <Routes>
            <Route path="/" element={<Home />} /> {/* Route pour la page d'accueil */}
            <Route path="/contact" element={<Contact />} /> {/* Route pour la page de contact */}
            <Route path="/aboutus" element={<AboutUs />} /> {/* Route pour la page de contact */}
            <Route path="/services" element={<Service />} /> {/* Route pour la page de contact */}
            <Route path="/details/:id" element={<ServiceDetails />}  />
            <Route path="/login" element={<LoginPage />}  />
            <Route path="/messages" element={<MessagePage />}  />

          </Routes>
          
          
          {/* Footer visible sur toutes les pages */}
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;

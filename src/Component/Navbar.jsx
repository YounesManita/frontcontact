import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaCog, FaPhoneAlt, FaInfoCircle, FaUser, FaSignOutAlt, FaCommentAlt, FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css'; 
import Logo from '../../public/assets/wael.jpeg';
const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

 
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false); 
  };

  const colors = ['#ADD8E6', '#4682B4', '#808080', '#000000', '#8A2BE2'];
  const word = 'portorrealobros';

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
        <img src={Logo} alt="Logo" className="logo-image" />
      <h1 className="logo">
        {word.split('').map((letter, index) => (
          <span key={index} style={{ color: colors[index % colors.length] }}>
            {letter}
          </span>
        ))}
      </h1>
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/" onClick={() => setIsMenuOpen(false)}>
            <FaHome /> Inicio
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={() => setIsMenuOpen(false)}>
            <FaCog /> Servicios
          </Link>
        </li>
        <li>
          {isLoggedIn ? (
            <Link to="/messages" onClick={() => setIsMenuOpen(false)}>
              <FaCommentAlt /> Mensajes
            </Link>
          ) : (
            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
              <FaPhoneAlt /> Contacto
            </Link>
          )}
        </li>
        <li>
          <Link to="/aboutus" onClick={() => setIsMenuOpen(false)}>
            <FaInfoCircle /> Sobre Nosotros
          </Link>
        </li>
        <li>
          {!isLoggedIn ? (
            <Link to="/login" onClick={() => setIsMenuOpen(false)}>
              <FaUser /> Iniciar Sesión
            </Link>
          ) : (
            <Link to="#" onClick={handleLogout}>
              <FaSignOutAlt /> Cerrar Sesión
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

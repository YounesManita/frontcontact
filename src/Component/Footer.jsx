import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => (
  <footer style={styles.footer}>
    <div style={styles.container}>
      <div style={styles.infoSection}>
        <p style={styles.copy}>&copy; 2024 OUTDOOR. Todos los derechos reservados.</p>
        <p style={styles.socialText}>Síguenos:</p>
        <div style={styles.socialIcons}>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61571395015331"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.icon}
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      <div style={styles.contactSection}>
        <p style={styles.contactText}>Contactanos: <strong>Portorreal.obras@gmail.com</strong></p>
        <p style={styles.workHours}>
          Horarios de trabajo: Lunes - Viernes: 9:00 AM - 6:00 PM | Sábado: 10:00 AM - 2:00 PM
        </p>
      </div>

      <div style={styles.newsletterSection}>
        <h3 style={styles.newsletterTitle}>¡Suscríbete a nuestro boletín!</h3>
        <p style={styles.newsletterSubtitle}>Recibe las últimas noticias y actualizaciones.</p>
        <form style={styles.newsletterForm}>
          <input
            type="email"
            placeholder="Tu correo electrónico"
            style={styles.newsletterInput}
            required
          />
          <button type="submit" style={styles.newsletterButton}>Suscribirse</button>
        </form>
      </div>
    </div>
  </footer>
);

const styles = {
  footer: {
    backgroundImage: 'linear-gradient(to bottom, #ADD8E6, #FFFFFF)',
    color: '#fff',
    padding: '2rem 0',
    fontSize: '1rem',
    marginTop: '3rem',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoSection: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  copy: {
    fontSize: '1rem',
    marginBottom: '0.5rem',
  },
  socialText: {
    fontSize: '1.2rem',
    marginBottom: '1rem',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  icon: {
    fontSize: '2rem',
    color: '#333',
    textDecoration: 'none',
    transition: 'color 0.3s',
  },
  contactSection: {
    textAlign: 'center',
    marginBottom: '2rem',
  },
  contactText: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
  },
  workHours: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  newsletterSection: {
    textAlign: 'center',
    marginTop: '2rem',
  },
  newsletterTitle: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
  },
  newsletterSubtitle: {
    fontSize: '1.1rem',
    marginBottom: '1rem',
  },
  newsletterForm: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  newsletterInput: {
    padding: '0.8rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: '1px solid #ddd',
    width: '250px',
  },
  newsletterButton: {
    padding: '0.8rem 1.5rem',
    fontSize: '1rem',
    borderRadius: '5px',
    border: 'none',
    backgroundColor: '#ffc107',
    color: '#222',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
  },
};

export default Footer;

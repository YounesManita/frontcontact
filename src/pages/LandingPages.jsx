import React from 'react';
import { motion } from 'framer-motion'; // Pour des animations fluides et modernes

const LoadingPage = () => (
  <div style={styles.container}>
    <motion.div
      style={styles.spinnerContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 10 }}
    >
      <motion.div
        style={styles.spinner}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          duration: 2,
          ease: "linear",
        }}
      />
    </motion.div>
    <motion.h2
      style={styles.loadingText}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 1 }} // Délai de 1 seconde avant l'apparition
    >
   Estamos realizando mantenimiento. Volveremos pronto. ¡Gracias por tu paciencia!
    </motion.h2>
    <motion.p
      style={styles.description}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 5 }} // Délai de 3 secondes pour ce paragraphe
    >
      Nous préparons les meilleures solutions de rénovation pour vous !
    </motion.p>
    <motion.p
      style={styles.extraDescription}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay: 10 }}  // Apparition après un délai supplémentaire de 5 secondes
    >
      Découvrez nos services sur mesure pour transformer vos espaces et les rendre plus modernes et fonctionnels.
    </motion.p>
  </div>
);

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#1c1c1c', // Fond sombre élégant
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  spinner: {
    width: '100px',
    height: '100px',
    border: '10px solid transparent',
    borderTop: '10px solid #ff9800', // Couleur d'accent pour le spinner
    borderRadius: '50%',
    transformStyle: 'preserve-3d',
    transformOrigin: 'center',
    animation: 'rotateSpinner 2s linear infinite',
  },
  loadingText: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    color: '#ff9800',
  },
  description: {
    fontSize: '1.2rem',
    color: '#e0e0e0',
    marginTop: '1rem',
  },
  extraDescription: {
    fontSize: '1.2rem',
    color: '#e0e0e0',
    marginTop: '1rem',
    fontStyle: 'italic', // Style pour différencier ce paragraphe
  },
  '@keyframes rotateSpinner': {
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  },
};

export default LoadingPage;

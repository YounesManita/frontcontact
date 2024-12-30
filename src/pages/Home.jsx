import React from 'react';
import { motion } from 'framer-motion';
import './index.css';
import { useNavigate } from 'react-router-dom'; 

import background from "../assets/background.mp4"
const Home = () => {
  const navigate = useNavigate();
  const handleClickabout=()=>{
    navigate(`/aboutus`);
  }
  const handleClick = () => {
    navigate(`/services`);
  };
  const realisation = [
    {
      src: '/assets/wael1.jpg', 
      title: 'Service 1',
    },
    {
      src: '/assets/image2.jpg', 

      title: 'Service 2',
    },
    {
      src: '/assets/image3.jpg', 

      title: 'Service 3',
    },
    {
      src: '/assets/image4.jpg',

      title: 'Service 4',
    },
    {
      src: '/assets/image5.jpg', 
      title: 'Service 1',
    },
    {
      src: '/assets/image6.jpg', 

      title: 'Service 2',
    },
    {
      src: '/assets/image7.jpg', 

      title: 'Service 3',
    },
    {
      src: '/assets/image8.jpg',

      title: 'Service 4',
    },

  ];
  
  const testimonials = [
    {
      name: "Juan Pérez",
      profession: "Gerente de Empresa",
      feedback:
        "El trabajo de mantenimiento que realizaron en nuestras instalaciones fue impecable. La empresa se encargó de la fontanería y los paneles solares, y todo quedó perfectamente instalado. Estoy muy satisfecho con la calidad y el servicio.",
      rating: 5,
      image: "data:image/jpeg;base64,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", // Remplacer par l'URL de l'image réelle
    },
    {
      name: "Ana García",
      profession: "Directora de Operaciones",
      feedback:
        "Contratamos el servicio de albañilería para realizar una reforma en la oficina y quedamos encantados. Todo se hizo con rapidez y precisión, ¡el equipo es muy profesional!",
      rating: 5,
      image: "data:image/jpeg;base64,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", // Remplacer par l'URL de l'image réelle
    },
    {
      name: "Carlos López",
      profession: "Propietario de Vivienda",
      feedback:
        "El servicio de pintura que contraté para mi hogar fue excepcional. Pintaron las paredes de la casa con mucho detalle y sin hacer ningún desorden. ¡Recomiendo esta empresa sin dudar!",
      rating: 5,
      image: "data:image/jpeg;base64,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", // Remplacer par l'URL de l'image réelle
    },
    
  
  
  ];
  
  const services = [
    {
      src: "/assets/image10.jpg",
      title: "Paneles Solares",
      desc: "Instalación y mantenimiento de paneles solares para hogares y empresas.",
    },
    {
      src: "/assets/462572392_574286441873966_4481292426819294374_n.jpg",
      title: "Aires Acondicionados",
      desc: "Servicio de instalación y reparación de aires acondicionados.",
    },
    {
      src: "/assets/imag1.jpg",
      title: "Pintura",
      desc: "Pintura profesional para interiores y exteriores con acabados impecables.",
    },
    {
      src: "/assets/image5.jpg",
      title: "Electricidad",
      desc: "Reparación e instalación eléctrica para proyectos residenciales y comerciales.",
    },
    {
      src: "assets/image2.jpg",
      title: "Albañilería",
      desc: "Reformas de albañilería para oficinas y hogares con diseño personalizado.",
    },
  ];
  
  return (
    <div style={styles.container}>
 
      
      <section style={styles.home}>
      
  <div style={styles.hero}>
     <a
      href="https://wa.me/+34656891064" 
      target="_blank"
      rel="noopener noreferrer"
      style={styles.whatsappButton}
    >
      WhatsApp
    </a>
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
    
      <h1 style={styles.heroTitle}>
        Bienvenidos a <span style={styles.brand}>portorrealobras</span>
      </h1>
      <p style={styles.heroSubtitle}>
        Líder en renovación y mantenimiento para casas y locales comerciales.
      </p>
      <p style={styles.sectionText}>
          Ofrecemos una amplia gama de servicios, desde renovaciones completas hasta mantenimiento regular. 
          Nos especializamos en adaptar nuestros servicios a las necesidades de cada cliente, garantizando resultados de alta calidad.
        </p>
        <button  onClick={() => handleClick()} style={styles.button}>Ver Más Servicios</button>
     
     

     
 
    </motion.div>
  </div>
</section>


      <div class="container">
  <div class="section">
    <div class="image-text">
     
      <div class="text">
        <h2>Estamos preparados para ayudarte con tus reformas.</h2>
        <p>“DeReformas”, reformas integrales de pisos, chalets y locales comerciales en Madrid.</p>
        <p>Somos líderes en el sector debido a nuestra política de calidad y precios.</p>
        <p>Vea nuestras reformas integrales, reformas de cocinas, reformas de exteriores y reformas de baño.</p>
        <p>Somos especialistas en muebles de cocina, muebles de baño, albañilería, carpintería y pintura.</p>
      </div>
      <div class="image">
        <img src="/assets/image8.jpg" alt="Reformas"/>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="image-text">
      <div class="image">
        <img src="/assets/image5.jpg" alt="Reformas"/>
      </div>
      <div class="text">
        <h2>Reformas de cocinas y baños personalizadas.</h2>
        <p>Trabajamos con materiales de la más alta calidad para ofrecer soluciones duraderas.</p>
        <p>Nuestro equipo de expertos garantiza una ejecución rápida y eficiente.</p>
        <p>Garantizamos satisfacción en cada uno de nuestros proyectos.</p>
        <p>Nuetros precios son competitivos, ajustados a las necesidades de cada cliente.</p>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="image-text">
      
      <div class="text">
        <h2>Especialistas en reformas de exteriores.</h2>
        <p>Transformamos el aspecto exterior de tu vivienda o local comercial.</p>
        <p>Trabajamos con materiales resistentes para garantizar la durabilidad de nuestros proyectos.</p>
        <p>Desde jardines hasta terrazas, contamos con un equipo capacitado para realizar reformas completas.</p>
        <p>Brindamos un servicio completo, desde el diseño hasta la ejecución final.</p>
      </div>
      <div class="image">
        <img src="/assets/image6.jpg" alt="Reformas"/>
      </div>
    </div>
  </div>

  <div class="section">
    <div class="image-text">
      <div class="image">
        <img src="https://portorrealobros-com.preview-domain.com/wp-content/uploads/2024/12/pexels-shkrabaanthony-5493664-1-1536x1024.jpg" alt="Reformas"/>
      </div>
      <div class="text">
        <h2>Reformas integrales de viviendas.</h2>
        <p>Realizamos reformas de viviendas completas, desde la demolición hasta la finalización.</p>
        <p>Nos encargamos de todas las fases del proyecto: planificación, ejecución y acabados finales.</p>
        <p>Adaptamos nuestros proyectos a tus necesidades y gustos personales.</p>
        <p>Tu satisfacción es nuestra prioridad, garantizando un trabajo de calidad.</p>
      </div>
    </div>
  </div>
</div>




 
      <div className="container">

  <video src={background} autoPlay loop muted className="video">
    <source src="background.mp4" type="video/mp4" />
    Votre navigateur ne supporte pas la balise vidéo.
  </video>


  <motion.div
    className="services"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.3 }}
  >
    <h2 className='sectionTitle'>Nuestros Servicios</h2>
    <div className='serviceCards'>
      {services.map((service, index) => (
        <motion.div
          key={index}
          className="card"
          whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
          onClick={() => handleClick()}
        >
          <img src={service.src} alt={service.title} className='image' />
          <h3 className='cardTitle'>{service.title}</h3>
          <p className="cardDesc">{service.desc}</p>
        </motion.div>
      ))}
    </div>
  </motion.div>
</div>


      <motion.div
    style={styles.gallery}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1.2, delay: 0.5 }}
  >
    <h2 style={styles.sectionTitle}>
    Nuestras Realizaciones</h2>
    <div style={styles.photos}>
      {realisation.map((service, index) => (
        <motion.div
          key={index}
          style={styles.photoCard}
          whileHover={{ scale: 1.1, boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)' }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={service.src} alt={service.title} style={index % 2 === 0 ? styles.smallPhoto : styles.largePhoto} />
          <motion.p
            style={styles.photoDesc}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {service.title}
          </motion.p>
        </motion.div>
      ))}
    </div>
  </motion.div>
      <div className="testimonials-section" >
      <h2>Lo Que Dicen Nuestros Clientes</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial-card" key={index}>
            <div className="client-image">
              <img src={testimonial.image} alt={`${testimonial.name}`} />
            </div>
            <h3>{testimonial.name}</h3>
            <p className="profession">{testimonial.profession}</p>
            <div className="rating">
              {"⭐".repeat(testimonial.rating)}
            </div>
            <p className="feedback">{testimonial.feedback}</p>
          </div>
        ))}
      </div>
    </div>


    </div>
  );
};

const styles = {
  
  gallery: {
    textAlign: 'center',
    marginTop: '2rem',
    padding: '2rem',
    background: '#f8f9fa',
  },
  sectionTitle: {
    fontSize: '2rem',
    marginBottom: '1rem',
    color: '#333',
  },
  photos: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '1rem',
  },
  photoCard: {
    position: 'relative',
    width: 'auto',
    marginBottom: '1rem',
    overflow: 'hidden',
  },
  smallPhoto: {
    width: '200px',
    height: '150px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  largePhoto: {
    width: '300px',
    height: '225px',
    objectFit: 'cover',
    transition: 'transform 0.3s ease',
  },
  whatsappButton: {
    marginTop: '-20px',
    display: 'inline-block',
    backgroundColor: '#25D366', 
    color: '#fff',
    padding: '10px 25px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderRadius: '50px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
  },
  photoDesc: {
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '0.5rem',
    background: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    fontSize: '1rem',
    textAlign: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
  },
  home: {
    backgroundImage:
      'url("/assets/bacckground.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',

    backgroundAttachment: 'fixed',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    marginBottom: "20%",
  },
  hero: {
    textAlign: 'center',
    backgroundColor: 'rgba(156, 172, 189, 0.5)', 
    borderRadius: '50px',
    margin: '2rem auto',
    width: '90%',
    height: '300px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    padding: '1rem',
  },
  heroTitle: {
    fontSize: '3rem',
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  brand: {
    color: '#ffc107',
  },
  heroSubtitle: {
    fontSize: '1.2rem',
    color: '#e0e0e0',
    marginTop: '1rem',
    fontStyle: 'italic',
  },
  sectionContent: {
    margin: '10rem 0',
    padding: '1.5rem',
    backgroundColor: 'rgba(255, 255, 255, 0.4)', 
    marginBottom:'15%',
    borderRadius: '10px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s, transform 0.3s',
  },
  
  sectionText: {
    fontSize: '1.1rem',
    lineHeight: '1.6',
    color: '#444',
    textAlign: 'justify',
    marginBottom: '1.5rem',
  },
  button: {
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    padding: '0.8rem 2rem',
    fontSize: '1rem',
    fontWeight: 'bold',
    borderRadius: '25px',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    textTransform: 'uppercase',
  },
  buttonHover: {
    backgroundColor: '#0056b3',
  },

  

  
   
    services: {
      padding: '2rem 0',
      backgroundColor: 'rgba(248, 249, 250, 0.7)',
      
    },
    serviceCards: {
      display: 'flex',
      gap: '2rem',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    card: {
      textAlign: 'center',
      maxWidth: '280px',
      padding: '1.5rem',
      border: '1px solid #ddd',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      transition: 'box-shadow 0.3s, transform 0.3s',
    },
    cardTitle: {
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: '1rem',
      color: '#007bff',
    },
    cardDesc: {
      fontSize: '1rem',
      color: '#666',
      marginTop: '0.5rem',
    },
    image: {
      width: '100%',
      borderRadius: '10px',
      transition: 'transform 0.3s',
      objectFit: 'cover',
    },
   
    
   
   
  
  
    '@media (max-width: 768px)': {
      hero: {
        height: '250px', 
        padding: '0.5rem',
      },
      heroTitle: {
        fontSize: '2rem',
      },
      heroSubtitle: {
        fontSize: '1rem',
      },
      sectionTitle: {
        fontSize: '2rem', 
      },
      serviceCards: {
        gap: '1rem', 
        flexDirection: 'column',
      },
      card: {
        maxWidth: '100%', 
        padding: '1rem',
      },
      gallery: {
        marginTop: '2rem',
      },
      photoCard: {
        maxWidth: '150px', 
      },
    },
  

    '@media (max-width: 480px)': {
      heroTitle: {
        fontSize: '1.5rem', 
      },
      heroSubtitle: {
        fontSize: '0.9rem', 
      },
      sectionTitle: {
        fontSize: '1.8rem', 
      },
      photoDesc: {
        fontSize: '0.8rem',
      },
    },
    
  };
  

export default Home;

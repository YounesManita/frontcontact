import React, { useState } from "react";
import Slider from "react-slick";
import { useLocation } from "react-router-dom";
import "./serviceDetails.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContactModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 
  
    return (
      <div className={`modal-overlay ${isOpen ? 'active' : ''}`}> 
        <div className="modal-container">
          <h2>Presupuesto con Mejor Calidad Precio Madrid</h2>
          <form className="contact-form">
            <label htmlFor="nombre">Nombre</label>
            <input type="text" id="nombre" placeholder="Tu nombre" required />
            
            <label htmlFor="direccion">Dirección</label>
            <input type="text" id="direccion" placeholder="Tu dirección" required />
            
            <label htmlFor="email">E-mail</label>
            <input type="email" id="email" placeholder="Tu email" required />
            
            <label htmlFor="telefono">Teléfono</label>
            <input type="tel" id="telefono" placeholder="Tu teléfono" required />
            
            <label htmlFor="reforma">¿Qué tipo de reforma quieres realizar?</label>
            <textarea id="reforma" placeholder="Describe tu reforma" required></textarea>
            
            <div className="privacy-policy">
              <input type="checkbox" id="privacy" required />
              <label htmlFor="privacy">Acepto la política de privacidad</label>
            </div>
            
            <button type="submit" className="contact-submit">Presupuesto Gratis</button>
          </form>
          <button className="modal-close" onClick={onClose}>Cerrar</button>
        </div>
      </div>
    );
  };
  

const ServiceDetails = () => {
  const location = useLocation();
  const { service } = location.state;

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); 
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  return (
    <div className="service-details-page">
      <h1 className="service-title">{service.title}</h1>
      <div className="service-header">
        <div className="service-icon">{service.icon}</div>
      </div>
      <Slider {...sliderSettings} className="service-carousel">
        {service.images.map((img, index) => (
          <div key={index} className="carousel-image-wrapper">
            <img src={img} alt={`Image ${index + 1}`} className="service-image" />
          </div>
        ))}
      </Slider>
      <div className="service-description">
        {service.paragraphs.map((para, index) => (
          <p key={index} className="service-paragraph">{para}</p>
        ))}
      </div>

      <button onClick={handleOpenModal} className="contact-btn">
      Contactos
      </button>

      
      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ServiceDetails;

import React from "react";
import Slider from "react-slick";
import "./Services.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom'; 
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Albañilería",
      paragraphs: [
        "Reformas de albañilería para mejorar y renovar tu hogar o espacio comercial.",
        "Trabajamos con materiales de alta calidad para garantizar durabilidad.",
      ],
      images: [
        "/assets/image2.jpg",
        "/assets/imagesalb.jpeg",
        "/assets/imagesalb1.jpeg",
      ],
      icon: "🧱",
    },
    {
      id: 2,
      title: "Fontaneria",
      paragraphs: [
        "Instalación y reparación de sistemas de fontanería para tu hogar o negocio.",
        "Soluciones rápidas y efectivas para problemas de plomería.",
      ],
      images: [
        "/assets/Fontaneria.jpeg",
        "/assets/Fontaneria1.jpeg",
        "/assets/Fontaneria2.jpeg",
      ],
      icon: "🚰",
    },
    {
      id: 3,
      title: "Electricidad",
      paragraphs: [
        "Servicios de electricidad para asegurar el funcionamiento de tus instalaciones.",
        "Reparación e instalación de sistemas eléctricos de manera segura y eficiente.",
      ],
      images: [
        "/assets/elctrica (2).jpg",
        "/assets/elctrica.jpg",
      ],
      icon: "⚡",
    },
    {
      id: 4,
      title: "Paneles Solares",
      paragraphs: [
        "Instalación de paneles solares para una energía más limpia y económica.",
        "Aprovecha el sol y reduce tus costos energéticos.",
      ],
      images: [
        "/assets/image3.jpg",
        ,
        "/assets/image9.jpg",
        "/assets/466050098_947524060112505_5745889558631030824_n.jpg",
      ],
      icon: "☀️",
    },
    {
      id: 5,
      title: "Pintura",
      paragraphs: [
        "Servicios de pintura para renovar y embellecer tu espacio.",
        "Colores y acabados que se adaptan a tu estilo.",
      ],
      images: [
          "/assets/pintura.jpeg",
          "/assets/image4.jpg",
          "/assets/imag1.jpg"
        
       
      ],
      icon: "🎨",
    },
    {
      id: 6,
      title: "Baño",
      paragraphs: [
        "Renovación de baños con diseños modernos y funcionales.",
        "Creación de espacios confortables con materiales de calidad.",
      ],
      images: [
        "/assets/image6.jpg",
        "/assets/pintura2.jpeg",
      ],
      icon: "🛁",
    },
    {
      id: 7,
      title: "Carpinteria",
      paragraphs: [
        "Servicios de carpintería para crear muebles personalizados y más.",
        "Trabajo a medida para satisfacer tus necesidades y gustos.",
      ],
      images: [
        "/assets/najar2.jpeg",
        "/assets/najar3.jpeg",
      ],
      icon: "🪚",
      
    },
      {
        id: 8, 
        title: "Pladur",
        paragraphs: [
          "Especialistas en instalación de pladur para paredes y techos.",
          "Soluciones rápidas, económicas y estéticas para tus reformas.",
        ],
        images: [
"/assets/pladur.jpeg",
"/assets/pladur2.jpeg",   
"/assets/pl dur3.jpeg",   
        ],
        icon: "🛠️",
      },
 
  ];

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
    <div>
      {services.map((service) => (
        <section
          key={service.id}
          className={`service-section ${service.id === 1
            ? "albanileria"
            : service.id === 2
            ? "fontaneria"
            : service.id === 3
            ? "electricidad"
            : service.id === 4
            ? "paneles-solares"
            : service.id === 5
            ? "pintura"
            : service.id === 6
            ? "bano"
            
            : service.id === 8
            ? "pladur"
            : "carpinteria"
           
          }`}
        >
          <div className="service-content">
            <div className="service-icon">{service.icon}</div>
            <h2 className="service-title">{service.title}</h2>
            {service.paragraphs.map((para, index) => (
              <p key={index} className="service-description">
                {para}
              </p>
            ))}
            <Slider {...sliderSettings} className="service-carousel">
              {service.images.map((img, index) => (
                <div key={index} className="carousel-image-wrapper">
                  <img
                    src={img}
                    alt={`Image ${index + 1}`}
                    className="service-image"
                  />
                </div>
              ))}
            </Slider>
            <Link to={`/details/${service.id}`}  state={{ service }} className="service-button">
            Ver Más
            </Link>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Services;

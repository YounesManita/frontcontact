import React from 'react';
import './aboutUs.css';
import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const teamMembers = [
    { name: "Andrés Portorreal obras", position: "CEO", image: "" },
    
  ];
  
 
  const navigate = useNavigate();
  const handleClickabout=()=>{
    navigate(`/contact`);
  }
  return (
    <div className="about-us">
     
      <header className="hero-section">
        <div className="hero-content">
          <h1>Sobre Nosotros</h1>
          <p>Descubre nuestra historia y conoce a las personas increíbles detrás de nuestra empresa.</p>
          <button onClick={() => handleClickabout()}  className="cta-button">Saber Más</button>
        </div>
      </header>

   
      <section className="company-section">
        <div className="container">
          <h2>Nuestra Empresa</h2>
          <p>
            Estamos dedicados a proporcionar soluciones innovadoras para empresas en todo el mundo. 
            Desde nuestra fundación en 2010, hemos ayudado a numerosos clientes a alcanzar sus metas.
          </p>
        </div>
      </section>

      {/* Sección de miembros del equipo */}
      <section className="team-section">
        <div className="container">
          <h2>Conoce a Nuestro Equipo</h2>
          <div className="team-members">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.image} alt={member.name} className="team-member-img" />
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sección de valores */}
      <section className="values-section">
        <div className="container">
          <h2>Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-card">Innovación</div>
            <div className="value-card">Integridad</div>
            <div className="value-card">Éxito del Cliente</div>
            <div className="value-card">Trabajo en Equipo</div>
          </div>
        </div>
      </section>

      {/* Nueva sección: Misión y Visión */}
      <section className="mission-vision-section">
        <div className="container">
          <h2>Nuestra Misión y Visión</h2>
          <p>
            <strong>Misión:</strong> Capacitar a las empresas mediante soluciones tecnológicas que impulsen el crecimiento y la eficiencia.
          </p>
          <p>
            <strong>Visión:</strong> Ser líderes globales en la transformación digital, creando un impacto positivo y sostenible en el mundo.
          </p>
        </div>
      </section>

      {/* Nueva sección: Historia */}
      <section className="history-section">
        <div className="container">
          <h2>Nuestra Historia</h2>
          <p>
            Fundada en 2010, nuestra empresa comenzó con una visión simple: ayudar a las empresas a adaptarse a la era digital. 
            Con los años, hemos crecido hasta convertirnos en una organización global con clientes en más de 20 países.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

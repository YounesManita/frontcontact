import React, { useState } from "react";
import axios from "axios";

const ContactPage = () => {
 
  const [formData, setFormData] = useState({
    name: "",
    prename: "",
    email: "",
    numtel: "",
    message: "",
  });

 
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault(); 
    
    try {
   
      const response = await axios.post("http://localhost:5000/contact/sendcontact", formData);
      
    
      setStatusMessage("¡Gracias por tu mensaje! Te responderemos pronto.");
      setFormData({
        name: "",
        prename: "",
        email: "",
        numtel: "",
        message: "",
      }); 
    } catch (error) {
      
      setStatusMessage("Ha ocurrido un error. Por favor, intenta más tarde.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Contacto Para Cualquier Consulta</h1>
      <p style={styles.description}>
        Si tienes alguna pregunta o necesitas ayuda, ¡no dudes en contactarnos!
      </p>

     
      {statusMessage && <p>{statusMessage}</p>}

  
      <div style={styles.formAndMapContainer}>
       
        <form style={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Tu Nombre"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="text"
            placeholder="Tu Apellido"
            name="prename"
            value={formData.prename}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            placeholder="Tu Correo Electrónico"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
            required
            pattern=".+@.+\..+"
          />
          <input
            type="tel"
            placeholder="Tu Número de Teléfono"
            name="numtel"
            value={formData.numtel}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <textarea
            placeholder="Tu Mensaje"
            name="message"
            value={formData.message}
            onChange={handleChange}
            style={styles.textarea}
            rows="5"
            required
          ></textarea>
          <button type="submit" style={styles.button}>Enviar</button>
        </form>

       
        <div style={styles.map}>
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193547.0509071365!2d-3.7037902!3d40.4167754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd42288b5f98a207%3A0x65b01f6b60b19bfb!2sMadrid!5e0!3m2!1ses!2ses!4v1644472132843!5m2!1ses!2ses"
            style={styles.iframe}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};


const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    backgroundColor: "rgba(234, 240, 244, 0.84)", 
    color: "#333",
    fontFamily: "Arial, sans-serif",
    margin: "0 auto",
    maxWidth: "1200px",
  },
  title: {
    fontSize: "2.5em",
    color: "#5a5aad", 
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.2em",
    marginBottom: "40px",
  },
  formAndMapContainer: {
    display: "flex",
    justifyContent: "space-between", 
    marginTop: "40px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "48%", 
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#fff",
  },
  input: {
    width: "100%",
    margin: "10px 0",
    padding: "12px",
    border: "2px solid #5a5aad",
    borderRadius: "5px",
    fontSize: "1em",
    transition: "border 0.3s ease, background-color 0.3s ease",
  },
  textarea: {
    width: "100%",
    margin: "10px 0",
    padding: "12px",
    border: "2px solid #5a5aad",
    borderRadius: "5px",
    fontSize: "1em",
    transition: "border 0.3s ease, background-color 0.3s ease",
  },
  button: {
    width: "100%",
    padding: "14px",
    marginTop: "20px",
    backgroundColor: "#5a5aad",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1.2em",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.3s ease",
  },
  map: {
    width: "48%", 
    height: "400px", 
    textAlign: "center",
    borderRadius: "10px",
  },
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
    borderRadius: "10px",
  },
};

export default ContactPage;

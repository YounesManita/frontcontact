import React, { useState, useEffect } from "react";
import axios from "axios";

const MessagesListPage = () => {

  const [messages, setMessages] = useState([]);
  const [statusMessage, setStatusMessage] = useState("");

  
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get("http://localhost:5000/contact/getallcontacts");
        
        if (Array.isArray(response.data.data)) {
          setMessages(response.data.data); 
        } else {
          setStatusMessage("Les données reçues ne sont pas sous forme de liste.");
        }
        
      } catch (error) {
        setStatusMessage("Erreur lors de la récupération des messages. Essayez plus tard.");
      }
    };
  
    fetchMessages();
  }, [])

  return (
    <div style={styles.container}>
    <h1 style={styles.title}>Lista de Mensajes</h1>
    <p style={styles.description}>Aquí puedes ver todos los mensajes que hemos recibido.</p>
  
    {statusMessage && <p>{statusMessage}</p>}
  
   
    <div style={styles.messagesList}>
      {messages.length === 0 ? (
        <p>No se encontraron mensajes.</p>
      ) : (
        messages.map((message, index) => (
          <div key={index} style={styles.messageCard}>
            <h3 style={styles.messageTitle}>{message.name} {message.prename}</h3>
            <p style={styles.messageDetails}><strong>Correo electrónico:</strong> {message.email}</p>
            <p style={styles.messageDetails}><strong>Teléfono:</strong> {message.numtel}</p>
            <p style={styles.messageContent}><strong>Mensaje:</strong> {message.message}</p>
          </div>
        ))
      )}
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
  messagesList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  messageCard: {
    backgroundColor: "#fff",
    border: "2px solid #5a5aad",
    borderRadius: "10px",
    padding: "20px",
    width: "80%",
    marginBottom: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  messageTitle: {
    fontSize: "1.5em",
    color: "#5a5aad",
    marginBottom: "10px",
  },
  messageDetails: {
    fontSize: "1.1em",
    marginBottom: "8px",
  },
  messageContent: {
    fontSize: "1.2em",
    marginTop: "10px",
    color: "#555",
  },
};

export default MessagesListPage;

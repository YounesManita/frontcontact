import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Por favor, complete ambos campos.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await axios.post("http://localhost:5000/user/login", {
        email: email,
        password: password,
      });

      if (response.status === 200) {
        localStorage.setItem('authToken', response.data.token);
        navigate('/');
        window.location.reload();
      } else {
        setError(response.data.message || "Inicio de sesión fallido. Por favor, intente nuevamente.");
      }
    } catch (error) {

      setError(error.response?.data?.message || "Algo salió mal. Por favor, intente nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1 style={styles.logo}>
        port<span style={{ color: "dodgerblue" }}>orr</span>ealo<span style={{ color: "purple" }}>br</span>as
        </h1>
      </header>
      <div style={styles.loginBox}>
        <h2 style={styles.title}>Bienvenido de nuevo</h2>
        <p style={styles.subtitle}>Por favor, introduzca sus credenciales para acceder a su cuenta</p>
        
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.inputWrapper}>
            <i className="fa fa-envelope" style={styles.icon}></i>
            <input
              type="email"
              placeholder="Correo electrónico"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div style={styles.inputWrapper}>
            <i className="fa fa-lock" style={styles.icon}></i>
            <input
              type="password"
              placeholder="Contraseña"
              style={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" style={styles.button} disabled={loading}>
            {loading ? "Cargando..." : "Iniciar sesión"}
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: "center",
    background: "linear-gradient(135deg, rgb(170, 174, 192), rgb(155, 185, 253))",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  header: {
    marginBottom: "20px",
  },
  logo: {
    fontSize: "3em",
    fontWeight: "bold",
    letterSpacing: "3px",
    textTransform: "uppercase",
    color: "#fff",
  },
  loginBox: {
    width: "400px",
    backgroundColor: "#fff",
    padding: "40px",
    borderRadius: "49px",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
    textAlign: "left",
    color: "#333",
    position: "relative",
    overflow: "hidden",
    transition: "transform 0.3s ease-in-out",
    background: "linear-gradient(135deg, #f0f0f0 30%, #e0e0e0 100%)",
  },
  title: {
    fontSize: "2em",
    color: "#333",
    marginBottom: "15px",
    fontFamily: "'Poppins', sans-serif",
    textAlign: "center",
    fontWeight: "600",
  },
  subtitle: {
    fontSize: "1.1em",
    color: "#555",
    marginBottom: "25px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  inputWrapper: {
    position: "relative",
  },
  input: {
    width: "100%",
    padding: "15px 20px",
    marginBottom: "15px",
    border: "2px solid #ddd",
    borderRadius: "10px",
    fontSize: "1em",
    boxSizing: "border-box",
    transition: "all 0.3s ease",
    paddingLeft: "40px",
  },
  icon: {
    position: "absolute",
    top: "50%",
    left: "15px",
    transform: "translateY(-50%)",
    color: "#888",
    fontSize: "20px",
  },
  button: {
    width: "100%",
    padding: "15px",
    backgroundColor: "dodgerblue",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "1.2em",
    cursor: "pointer",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    fontWeight: "bold",
  },
};

export default LoginPage;

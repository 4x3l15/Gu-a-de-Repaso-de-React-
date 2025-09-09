import React, { useState } from "react";

function Formulario() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });

  // Manejar cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nombre: ${formData.nombre} \nEmail: ${formData.email}`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Formulario Controlado</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="nombre"
            placeholder="Ingresa tu nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <input
            type="email"
            name="email"
            placeholder="Ingresa tu email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit" style={{ marginTop: "10px" }}>
          Enviar
        </button>
      </form>

      <h3>Vista Previa:</h3>
      <p>Nombre: {formData.nombre}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default Formulario;

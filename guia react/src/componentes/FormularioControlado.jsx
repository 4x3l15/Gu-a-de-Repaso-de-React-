import React, { useState } from "react";

function FormularioControlado() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <form>
        <div style={{ margin: "10px" }}>
          <input
            type="text"
            name="nombre"
            placeholder="Escrive tu nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <input
            type="email"
            name="email"
            placeholder="Escrive tu email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </form>

      <h3>Vista previa:</h3>
      <p>Nombre: {formData.nombre}</p>
      <p>Email: {formData.email}</p>
    </div>
  );
}

export default FormularioControlado;

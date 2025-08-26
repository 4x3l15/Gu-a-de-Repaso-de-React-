import React, { useState } from "react";

function MostrarTexto() {
    const [texto, setTexto] = useState("");
    const [mensaje, setMensaje] = useState("");

    const handleChange = (e) => {
        setTexto(e.target.value);
      };

      const handleClick = () => {
        setMensaje(texto);
      };

    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <input 
          type="text" 
          value={texto} 
          onChange={handleChange} 
          placeholder="Escribe algo..."
        />
        <button onClick={handleClick}>Mostrar</button>
        <p>{mensaje}</p>
      </div>
    );
};

export default MostrarTexto;
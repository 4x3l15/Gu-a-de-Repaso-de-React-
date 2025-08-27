import React, { useState } from "react";

function CambiarFondo() {
    const[fondo,setFondo]=useState();

    const handleChange = (e) => {
        setFondo(e.target.value);
      };

    return(
        <div       style={{
            textAlign: "center",
            marginTop: "50px",
            padding: "50px",
            backgroundColor: fondo,
            transition: "0.3s"
            }}
            >
            <h2>Selecciona un color de fondo</h2>
        <select value={fondo} onChange={handleChange}>
            <option value="white">Blanco</option>
            <option value="lightblue">Celeste</option>
            <option value="lightgreen">Verde Claro</option>
            <option value="lightpink">Rosa</option>
            <option value="lightyellow">Amarillo</option>
            <option value="lightgray">Gris</option>
        </select>
        </div>
    );
}

export default CambiarFondo;
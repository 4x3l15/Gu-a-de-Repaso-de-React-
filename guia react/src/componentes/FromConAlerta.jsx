import React, { useState } from "react";

function FromConAlerta() {
    const[texto,setTexto] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (texto.trim() === "") {
            alert("Por favor, ingresa un texto");
        } else {
            alert("Texto ingresado: " + texto);
        }
        setTexto("");
    };

    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            placeholder="Escribe algo..."
            />
            <button type="submit">Enviar</button>
        </form>
        </div>
    );
}

export default FromConAlerta;
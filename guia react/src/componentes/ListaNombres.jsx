import React from "react";

function ListaNombres() {
  const nombres = ["Axel", "mili", "May", "santi", "cami"];

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Lista de Nombres</h2>
            <ul>
            {nombres.map((nombre, index) => (
               <li key={index}>{nombre}</li>
            ))}
        </ul>
    </div>
);
}

export default ListaNombres;

import React, { useState } from "react";

function FiltroFrutas() {
  const [frutas] = useState(["Manzana", "Banana", "Pera", "Naranja", "Uva", "Durazno"]);
  const [busqueda, setBusqueda] = useState("");

  const frutasFiltradas = frutas.filter((fruta) =>
    fruta.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Filtro de Frutas</h2>
      <input
        type="text"
        placeholder="Buscar fruta..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
      <ul style={{ listStyle: "none", padding: 0 }}>
        {frutasFiltradas.map((fruta, index) => (
          <li key={index}>{fruta}</li>
        ))}
      </ul>
    </div>
  );
}

export default FiltroFrutas;

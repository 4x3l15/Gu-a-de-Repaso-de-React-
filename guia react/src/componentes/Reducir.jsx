import React, { useState } from "react";

function Reducir() {
    
    const [precios] = useState([10, 20, 30, 40, 50]);

    const total = precios.reduce((acumulador, precio) => acumulador + precio, 0);

    return(
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Lista de Precios</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {precios.map((precio, index) => (
            <li key={index}>${precio}</li>
          ))}
        </ul>
        <h3>Total: ${total}</h3>
      </div>
  
    );
}
export default Reducir;
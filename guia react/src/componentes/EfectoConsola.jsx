import React, { useEffect } from "react";

function EfectoConsola() {
  useEffect(() => {
    console.log("El componente se ha montado ✅");
  }, []);
  
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Ejercicio 12: useEffect</h2>
      <p>Abre la consola para ver el mensaje cuando este componente se monte.</p>
    </div>
  );
}

export default EfectoConsola;

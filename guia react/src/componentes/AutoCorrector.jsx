import React, { useState, useEffect } from "react";

function ContadorAuto() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setContador((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Ejercicio 13: Contador con useEffect</h2>
      <p>Contador: {contador}</p>
    </div>
  );
}

export default ContadorAuto;

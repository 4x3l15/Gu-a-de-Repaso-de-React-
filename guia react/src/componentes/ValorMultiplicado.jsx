import React, { useState } from "react";

function ValorMultiplicar() {
  const [numero, setNumero] = useState(0);

  const handleChange = (e) => {
    setNumero(Number(e.target.value));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <input
        type=""
        value={numero}
        onChange={handleChange}
        placeholder="Ingresa un número"
      />
      <p>Resultado x2: {numero * 2}</p>
    </div>
  );
}

export default ValorMultiplicar;

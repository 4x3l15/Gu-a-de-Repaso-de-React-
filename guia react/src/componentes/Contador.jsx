import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador: {contador}</h1>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}

export default Contador;

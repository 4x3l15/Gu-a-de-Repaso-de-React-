import React from "react";

function ArrayObjetos() {
  const productos = [
    { item: "Manzana", precio: 1.5 },
    { item: "Pan", precio: 2 },
    { item: "Leche", precio: 3 },
    { item: "Queso", precio: 4.5 },
  ];

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Lista de Productos</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {productos.map((producto, index) => (
          <li key={index}>
            {producto.item} - ${producto.precio}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayObjetos;

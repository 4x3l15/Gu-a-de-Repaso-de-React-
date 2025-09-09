import React, { useState } from "react";

function AppTareas() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState("");

  const agregarTarea = () => {
    if (nuevaTarea.trim() === "") return;

    const tarea = {
      id: Date.now(),
      titulo: nuevaTarea,
      completada: false
    };

    setTareas([...tareas, tarea]);
    setNuevaTarea("");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>App de Tareas</h2>
      <input
        type="text"
        placeholder="Escribe una tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar</button>

      <h3>Listado de tareas:</h3>
      <ul>
        {tareas.map((tarea) => (
          <li key={tarea.id}>{tarea.titulo}</li>
        ))}
      </ul>
    </div>
  );
}

export default AppTareas;

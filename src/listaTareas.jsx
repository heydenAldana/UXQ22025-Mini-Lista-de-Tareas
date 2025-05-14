function ListaTareas({ tareas, onEliminarTarea }) {
    return (
      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            {tarea}
            <button onClick={() => onEliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ListaTareas;
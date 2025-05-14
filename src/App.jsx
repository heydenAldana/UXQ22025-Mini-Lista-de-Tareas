import { useState } from 'react'
import FormularioTarea from './FormularioTarea'
import ListaTareas from './listaTareas'
import './App.css'

function App() {
  const [tareas, setTareas] = useState([]);

  const agregarNuevaTarea = (nuevaTarea) => {
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTareaExistente = (indiceTarea) => {
    // Primera forma de hacerlo con filter (avanzado)
    const listaDeTareasRestantes = tareas.filter((_, index) => index !== indiceTarea);
    /* La manera en que lo hice: Creo un arreglo como temp en donde elimino la tarea,
      reemplazo el array de tareas que estaba con el nuevo ya con la tarea
      eliminada.
      NOTA: Lo intente pero tuve un problema con el indice ya que al rerenderizarse no se mostraban
      las tareas que eran, asi que deje el primero ahi.
    
    const listaDeTareasRestantes = [];
    const tareaActual = tareas[0];
    for(let i=0; i < tareas.length; i++){
      // Solo ignoro la tarea a eliminar (no se agrega al arreglo)
      if(i !== indiceTarea)
        listaDeTareasRestantes.push(tareaActual);
    }
    */
    setTareas(listaDeTareasRestantes);
  };

  return (
    <>
      <div>
      <h1>Mi Lista de Tareas</h1>
      <FormularioTarea onAgregarTarea={agregarNuevaTarea} />
      <h2>Tareas Pendientes:</h2>
      <ListaTareas tareas={tareas} onEliminarTarea={eliminarTareaExistente} />
      <p>Total de tareas: {tareas.length}</p>
    </div>
    </>
  )
}

export default App;

import TareaFormulario from './TareaFormulario'
import { useState } from 'react'
import './ListaTareas.css'
import Tarea from './Tarea'

function ListaTareas() {

  const [tareas, setTareas] = useState([])

  const agregarTarea = (tarea) => { //cmprobar que no este vacion el imput
    if (tarea.texto.trim()) {
      tarea.texto = tarea.texto.trim(); //quitar espacios vacios al inicio o final
      const tareaActualizadas = [tarea, ...tareas] //agreagr al inicio la nueva tarea
      setTareas(tareaActualizadas)
    }
  }

  const eliminarTarea=id=>{
    const tareasActualizadas=tareas.filter((tarea)=>tarea.id!==id);//filtra y solo muentra los id que no coinciden con el que se le pasa como parametro
    setTareas(tareasActualizadas)
  }
  const completarTarea=id=>{
    console.log("clic");
    const tareasActualizadas= tareas.map(tarea=>{
      if(tarea.id===id)
      {
        tarea.completada=!tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  }


  return (
    <>
      <TareaFormulario onSubmit={agregarTarea} />
      <div className="Tarea-lista-contenedor">
        {
          tareas.map((tarea) => (
            <Tarea
              key={tarea.id}
              id={tarea.id}
              texto={tarea.texto}
              completada={tarea.completada}
              completarTarea={completarTarea}
              eliminarTarea={eliminarTarea}
            />
          ))
        }
      </div>
    </>
  )
}

export default ListaTareas
 import React from 'react'
import {AiOutlineCloseCircle} from "react-icons/ai"
import './Tarea.css'

function Tarea({id, texto, completada, completarTarea, eliminarTarea }) {
    return (
        <div className={completada? 'tarea-contenededor completada': 'tarea-contenededor'}>
            <div className="tarea-texto"
            onClick={()=>completarTarea(id)}>
                {texto}
            </div>
            <div onClick={()=>eliminarTarea(id)} className="tarea-contenedor-iconos">
                <AiOutlineCloseCircle className="tarea-icono"/>
            </div>
        </div>
    )
}

export default Tarea
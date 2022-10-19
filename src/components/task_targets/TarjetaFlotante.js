import React from "react";
import './TarjetaFlotante.css';

export default function TarjetaFlotante({estado}){
    
    let estado_tarea = estado;
    let color;

    if (estado_tarea==='Pendiente'){
        color = {backgroundColor:'#17c0eb'}
    }
    if (estado_tarea==='Nueva'){
        color = {backgroundColor:'#3ae374'}
    }
    if (estado_tarea==='Vencida'){
        color = {backgroundColor:'#ff4d4d'}
    }
    
    return(
        
        <div className="task-target-flotante" style={color}>{estado_tarea}</div>

    )
}
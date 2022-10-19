import React from 'react';
import './InicioRapido.css';


export default function InicioRapido(){

    return(

        <div className="inicio-rapido">
            <p>Lunes, 3 de octubre de 2022</p>
            <div className="inicio-rapido-pendiente">
                <div className="inicio-rapido-pendiente-tareas">
                    <p>Tareas:</p>
                    <span>2</span>
                    <p>Pendientes</p>
                    <span>1</span>
                    <p>Vencidas</p>
                    <input type="button" value="Tareas pendientes"/>
                </div>
                <div className="separador"></div>
                <div className="inicio-rapido-pendiente-tareas">
                    <p>Solicitudes:</p>
                    <span>1</span>
                    <p>Pendientes</p>
                    <span>2</span>
                    <p>Vencidas</p>
                    <input type="button" value="Crear solicitud"/>
                </div>
            </div>
        </div>

    )

}
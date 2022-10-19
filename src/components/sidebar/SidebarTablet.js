import React from 'react';
import './SidebarTablet.css';
import signo_mas from '../../components/img/signo-mas.png';
import home from '../../components/img/home.png';
import logo from '../../components/img/icono-tarea.png';
import solicitud from '../../components/img/solicitud.png';
import historial from '../../components/img/historial.png';
// import organigrama from '../../components/img/organigrama2.png'
import persona from '../../components/img/persona.png';
import departamento from '../../components/img/departamento.png';
import pizarra from '../../components/img/pizarra.png';
import ayuda from '../../components/img/ayuda.png';


export default function SidebarTablet(){

    return(

        <div className="menu-tablet" id="menu-tablet">

            <div className="tablet-boton-solicitud"><a href="#/">
                <img src={signo_mas} alt=""/>
                <span>Crear Solicitud</span></a>
            </div>

            <div className="tablet-menu-usuario-uno">
                <ul className="tablet-menu-usuario-lista">
                    <a href="#/"><li className="tablet-menu-usuario-item">
                        <img src={home} alt=""/>
                        <span>Inicio</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item">
                        <img src={logo} alt=""/>
                        <span>Mis tareas</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item">
                        <img src={solicitud} alt=""/>
                        <span>Mis solicitudes</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item">
                        <img src={historial} alt=""/>
                        <span>Historial</span>
                    </li></a>
                </ul>
            </div>

            <div className="tablet-menu-usuario-dos">
                <ul className="tablet-menu-usuario-lista">
                    {/* <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={organigrama} alt=""/>
                        <span>Organigrama</span>
                    </li></a> */}
                    <a href="#/"><li className="tablet-menu-usuario-item">
                        <img src={persona} alt=""/>
                        <span>Personas</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item">
                        <img src={departamento} alt=""/>
                        <span>Departamentos</span>
                    </li></a>
                </ul>
            </div>

            <div className="tablet-menu-usuario-tres">
                <ul className="tablet-menu-usuario-lista">
                    <a href="#/"><li className="tablet-menu-usuario-item">
                        <img src={pizarra} alt=""/>
                        <span>La Pizarra</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item">
                        <img src={ayuda} alt=""/>
                        <span>Ayuda</span>
                    </li></a>
                </ul>
            </div>

        </div>

    )

}
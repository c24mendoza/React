import React from 'react';
import './SidebarGrande.css';
import avatar from '../../components/img/foto-avatar.png';
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
// import { Link } from 'react-router-dom';

export default function SidebarGrande(){

    return(

        <div className="menu-lateral" id="sidebar-grande">

            <div className="lateral-foto-usuario">
                <img src={avatar} alt=""/>
                <span>Usuario</span>
            </div>

            <a href="#/"><div className="lateral-boton-solicitud">
                <img src={signo_mas} alt=""/>
                <span>Crear Solicitud</span>
            </div></a>

            <div className="lateral-menu-usuario">
                <ul className="lateral-menu-usuario-lista">
                    
                    <a href="http://localhost:3000/"><li className="lateral-menu-usuario-item">
                        <img src={home} alt=""/>
                        <span>Inicio</span>
                    </li></a>
                    <a href="http://localhost:3000/mistareas"><li className="lateral-menu-usuario-item">
                        <img src={logo} alt=""/>
                        <span>Mis tareas</span>
                    </li></a>
                    <a href="http://localhost:3000/mistareas"><li className="lateral-menu-usuario-item">
                        <img src={solicitud} alt=""/>
                        <span>Mis solicitudes</span>
                    </li></a>
                    <a href="http://localhost:3000/mistareas"><li className="lateral-menu-usuario-item">
                        <img src={historial} alt=""/>
                        <span>Historial</span>
                    </li></a>

                </ul>

            </div>

            <div className="lateral-menu-usuario">
                <ul className="lateral-menu-usuario-lista">
                    {/* <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={organigrama} alt=""/>
                        <span>Organigrama</span>
                    </li></a> */}
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={persona} alt=""/>
                        <span>Personas</span>
                    </li></a>
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={departamento} alt=""/>
                        <span>Departamentos</span>
                    </li></a>
                </ul>
            </div>

            <div className="lateral-menu-usuario">
                <ul className="lateral-menu-usuario-lista">
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={pizarra} alt=""/>
                        <span>La Pizarra</span>
                    </li></a>
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={ayuda} alt=""/>
                        <span>Ayuda</span>
                    </li></a>
                </ul>
            </div>

        </div>

    )

}
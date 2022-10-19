import React from 'react';
import './SidebarPequeno.css';
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


export default function SidebarPequeno(){
    
    return(

        <div className="menu-lateral-pequeno" id="sidebar-pequeno">
            <div className="lateral-foto-usuario-pequeno">
                <img src={avatar} alt=""/>
            </div>

            <a href="#/"><div className="lateral-boton-solicitud-pequeno"  title="Crear Solicitud">
                <img src={signo_mas} alt="nueva-solicitud"/>
            </div></a>

            <div className="lateral-menu-usuario-pequeno">
                <ul className="lateral-menu-usuario-lista-pequeno">
                    <a href="index.html"><li className="lateral-menu-usuario-item">
                        <img src={home} alt="inicio" title="Inicio"/>
                    </li></a>
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={logo} alt="tareas" title="Mis Tareas"/>
                    </li></a>
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={solicitud} alt="solicitudes" title="Mis Solicitudes"/>
                    </li></a>
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={historial} alt="Historial" title="Historial"/>
                    </li></a>
                </ul>
            </div>

            <div className="lateral-menu-usuario-pequeno">
                <ul className="lateral-menu-usuario-lista-pequeno">
                    {/* <a href="#"><li className="lateral-menu-usuario-item">
                        <img src={organigrama} alt="Organigrama" title="Organigrama"/>
                    </li></a> */}
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={persona} alt="Personas" title="Personas"/>
                    </li></a>
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={departamento} alt="Departamentos" title="Departamentos"/>
                    </li></a>
                </ul>
            </div>

            <div className="lateral-menu-usuario-pequeno">
                <ul className="lateral-menu-usuario-lista-pequeno">
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={pizarra} alt="La Pizarra" title="La Pizarra"/>
                    </li></a>
                    <a href="#/"><li className="lateral-menu-usuario-item">
                        <img src={ayuda} alt="Ayuda" title="Ayuda"/>
                    </li></a>
                </ul>
            </div>
        </div>

    )

}
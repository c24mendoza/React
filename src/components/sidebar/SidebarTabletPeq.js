import React from 'react';
import './SidebarTabletPeq.css';
import signo_mas from '../../components/img/signo-mas.png';
import home from '../../components/img/home.png';
import logo from '../../components/img/icono-tarea.png';
import solicitud from '../../components/img/solicitud.png';
// import historial from '../../components/img/historial.png';
import organigrama from '../../components/img/organigrama2.png'
// import persona from '../../components/img/persona.png';
// import departamento from '../../components/img/departamento.png';
import pizarra from '../../components/img/pizarra.png';
import ayuda from '../../components/img/ayuda.png';

export default function SidebarTabletPeq(){
    return(

        <div className="menu-tablet-pequeno" id="menu-tablet-pequeno">

            <div className="tablet-menu-usuario-pequeno">
                <ul className="tablet-menu-usuario-lista-pequeno">
                    <a href="#/"><li className="tablet-menu-usuario-item-pequeno">
                        <img src={signo_mas} alt=""/>
                        <span>Crear Solicitud</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item-pequeno">
                        <img src={home} alt=""/>
                        <span>Inicio</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item-pequeno">
                        <img src={logo} alt=""/>
                        <span>Mis tareas</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item-pequeno">
                        <img src={solicitud} alt=""/>
                        <span>Mis solicitudes</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item-pequeno">
                        <img src={organigrama} alt=""/>
                        <span>Organigrama</span>
                    </li></a>
                    {/* <a href="#/"><li className="tablet-menu-usuario-item-pequeno">
                        <img src={persona} alt=""/>
                        <span>Personas</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item-pequeno">
                        <img src={departamento} alt=""/>
                        <span>Departamentos</span>
                    </li></a> */}
                    <a href="#/"><li className="tablet-menu-usuario-item-pequeno">
                        <img src={pizarra} alt=""/>
                        <span>La Pizarra</span>
                    </li></a>
                    <a href="#/"><li className="tablet-menu-usuario-item-pequeno">
                        <img src={ayuda} alt=""/>
                        <span>Ayuda</span>
                    </li></a>
                    {/* <a href="#/"><li className="tablet-menu-usuario-item-pequeno">
                        <img src={historial} alt=""/>
                        <span>Historial</span>
                    </li></a> */}
                </ul>
            </div>

        </div>

    )
}
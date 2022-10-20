import React, { Fragment } from 'react';
import './Nav.css';
import SidebarTablet from '../sidebar/SidebarTablet';
import logo from '../../components/img/icono-tarea.png';
import avatar from '../../components/img/foto-avatar.png';
import SidebarTabletPeq from '../sidebar/SidebarTabletPeq';

let bandera = 0;

export default function Nav(){

    return(

        <Fragment>
            <nav>
                <div className="hamburger" id="hamburger" onClick={()=>{CambiarEstadoMenu()}}>
                    <div className="menu-hamburger" id="menu-hamburger">
                        <div className="linea-hamburger"></div>
                        <div className="linea-hamburger"></div>
                        <div className="linea-hamburger"></div>
                    </div>
                </div>

                <div className="logotipo" id="logotipo">
                    <img src={logo} alt="{logo}"/>
                    <span>MyRequest</span>
                </div>

                <div className="buscar" id="buscar">

                </div>

                <div className="login" id="login">
                    <span>Usuario</span>
                    <img src={avatar} alt="{avatar}"/>
                </div>
            </nav>

            <SidebarTablet/>
            <SidebarTabletPeq/>
                                 
        </Fragment>

    );

    function CambiarEstadoMenu(){

        let sidebar_grande = document.getElementById('sidebar-grande');
        let sidebar_pequeno = document.getElementById('sidebar-pequeno');
        let contenido_central = document.getElementById('contenido-central');

        if (bandera===0){
        sidebar_grande.style.display = "none";
        sidebar_pequeno.style.display = "block"; 
        contenido_central.style.width = "95%";
        contenido_central.style.marginLeft = "5%";
        bandera=1;
        }
        else{
        sidebar_grande.style.display = "block";
        sidebar_pequeno.style.display = "none";   
        contenido_central.style.width = "85%";
        contenido_central.style.marginLeft = "15%";
        bandera=0;
        }
        
    }

}




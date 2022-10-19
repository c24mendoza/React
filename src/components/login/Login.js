import React from "react";
import './Login.css'
import contacto from '../../components/img/contacto4.png'
import fondo from '../../components/img/contacto2.jpg'

export default function Login(){

    return(

    <div className="formulario-login">

        <div className="formulario-login-imagen">

            <div className="formulario-login-imagen-trasera">
                <img src={fondo} alt=""/>
            </div>

            <div className="formulario-login-imagen-frontal">
                <p>MyRequest</p>
                <img src={contacto} alt=""/>
                <p>Login</p>
                <span>Trabajamos para que estes mas organizado</span>
            </div>

        </div>

        <div className="formulario-login-info">

            <p>Inicio de Sesión</p>
            <span>Por favor digita tu nombre de usuario y contraseña para poder continuar</span>

            <form action="" method="post">
                <label htmlFor="usuario">Usuario</label><br/>
                <input type="text" id="usuario" name="usuario" autoComplete="off" required/><br/><br/>
                <label htmlFor="password">Contraseña</label><br/>
                <input type="password" id="password" name="password" autoComplete="off" required/><br/><br/>

                <div className="mantener-sesion">
                    <input type="checkbox" name="mantener-sesion" id="mantener-sesion" value="mantener-sesion"/>
                    <label>Mantener abierta la sesión.</label>
                    <span>Olvidaste la contraseña?</span>
                </div>

                <div className="boton">
                    <input type="button" id="iniciar-sesion" name="iniciar-sesion" value="Iniciar Sesión"/>
                </div>
            </form>

        </div>

    </div>

    )

}
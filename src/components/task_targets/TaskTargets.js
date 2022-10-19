import React from "react";
import './TaskTargets.css'
import avatar from '../../components/img/foto-avatar.png';
import InicioRapido from "../inicio_rapido/InicioRapido";
import TarjetaFlotante from "./TarjetaFlotante";

export default function TaskTargets(){

    return(

        <div className="contenido-central" id="contenido-central">

            <InicioRapido/>

            <div className="contenedor-tareas">

                <div className="task-target">

                    <div className="task-target-titulo">
                        <span>Realizar mantenimiento impresora de ventas e instalacion de cartucho.</span>
                    </div>

                    <div className="tast-target-usuario">
                        <img className="task-target-usuario-imagen" src={avatar} alt=""/>
                        <div className="task-target-usuario-info">
                            <p>Erick Mendoza</p>
                            <p>Departamento de Sistemas</p>
                        </div>
                    </div>

                    <div className="task-target-fecha">
                        <span>Inicio:</span>
                        <span>1/oct/2022</span>
                    </div>

                    <div className="tast-target-boton">
                        <span>Ver detalle</span>
                    </div>

                    <TarjetaFlotante estado={'Pendiente'}/>
                    
                </div>

                <div className="task-target">

                    <div className="task-target-titulo">
                        <span>Realizar mantenimiento impresora de ventas e instalacion de cartucho.</span>
                    </div>

                    <div className="tast-target-usuario">
                        <img className="task-target-usuario-imagen" src={avatar} alt=""/>
                        <div className="task-target-usuario-info">
                            <p>Erick Mendoza</p>
                            <p>Departamento de Sistemas</p>
                        </div>
                    </div>

                    <div className="task-target-fecha">
                        <span>Inicio:</span>
                        <span>1/oct/2022</span>
                    </div>

                    <div className="tast-target-boton">
                        <span>Ver detalle</span>
                    </div>

                    <TarjetaFlotante estado={'Nueva'}/>

                </div>

                <div className="task-target">

                    <div className="task-target-titulo">
                        <span>Realizar mantenimiento impresora de ventas e instalacion de cartucho.</span>
                    </div>

                    <div className="tast-target-usuario">
                        <img className="task-target-usuario-imagen" src={avatar} alt=""/>
                        <div className="task-target-usuario-info">
                            <p>Erick Mendoza</p>
                            <p>Departamento de Sistemas</p>
                        </div>
                    </div>

                    <div className="task-target-fecha">
                        <span>Inicio:</span>
                        <span>1/oct/2022</span>
                    </div>

                    <div className="tast-target-boton">
                        <span>Ver detalle</span>
                    </div>

                    <TarjetaFlotante estado={'Vencida'}/>

                </div>

                <div className="task-target">

                    <div className="task-target-titulo">
                        <span>Realizar mantenimiento impresora de ventas e instalacion de cartucho.</span>
                    </div>

                    <div className="tast-target-usuario">
                        <img className="task-target-usuario-imagen" src={avatar} alt=""/>
                        <div className="task-target-usuario-info">
                            <p>Erick Mendoza</p>
                            <p>Departamento de Sistemas</p>
                        </div>
                    </div>

                    <div className="task-target-fecha">
                        <span>Inicio:</span>
                        <span>1/oct/2022</span>
                    </div>

                    <div className="tast-target-boton">
                        <span>Ver detalle</span>
                    </div>

                    <TarjetaFlotante estado={'Nueva'}/>

                </div>

                <div className="task-target">

                    <div className="task-target-titulo">
                        <span>Realizar mantenimiento impresora de ventas e instalacion de cartucho.</span>
                    </div>

                    <div className="tast-target-usuario">
                        <img className="task-target-usuario-imagen" src={avatar} alt=""/>
                        <div className="task-target-usuario-info">
                            <p>Erick Mendoza</p>
                            <p>Departamento de Sistemas</p>
                        </div>
                    </div>

                    <div className="task-target-fecha">
                        <span>Inicio:</span>
                        <span>1/oct/2022</span>
                    </div>

                    <div className="tast-target-boton">
                        <span>Ver detalle</span>
                    </div>

                    <TarjetaFlotante estado={'Pendiente'}/>

                </div>

                <div className="task-target">

                    <div className="task-target-titulo">
                        <span>Realizar mantenimiento impresora de ventas e instalacion de cartucho.</span>
                    </div>

                    <div className="tast-target-usuario">
                        <img className="task-target-usuario-imagen" src={avatar} alt=""/>
                        <div className="task-target-usuario-info">
                            <p>Erick Mendoza</p>
                            <p>Departamento de Sistemas</p>
                        </div>
                    </div>

                    <div className="task-target-fecha">
                        <span>Inicio:</span>
                        <span>1/oct/2022</span>
                    </div>

                    <div className="tast-target-boton">
                        <span>Ver detalle</span>
                    </div>

                    <TarjetaFlotante estado={'Vencida'}/>

                </div>

            </div>

        </div>


    )

}

import React from "react";
import './RequestMy.css';
import avatar from '../../components/img/foto-avatar.png';
import check from '../../components/img/check3.png';
import signo_mas from '../../components/img/signo-mas.png';


export default function RequestMy (){

    return(

        <div className="requestmy" id="requestmy">

            <div className="requestmy-contenido">
                <div className="contenedormy-lista">

                    <div className="contenedor-nueva-solicitud">
                        <a href="#/"><div className="boton-solicitud">
                        <img src={signo_mas} alt=""/>
                        <span>Crear Solicitud</span>
                        </div></a>
                    </div>

                    <div className="itemmy-lista">
                        <span className="itemmy-lista-titulo">Mantenimiento de impresora y cartucho de ventas.</span>
                        <div className="itemmy-lista-botones">
                            <img className="itemmy-lista-botones-imagen" src={avatar} alt=""/>
                            <span className="itemmy-lista-botones-fecha">10/oct/22</span>
                            {colorEstado('Pendiente')}
                        </div>
                    </div>
                    <div className="itemmy-lista">
                        <span className="itemmy-lista-titulo">Mantenimiento de impresora y cartucho de ventas.</span>
                        <div className="itemmy-lista-botones">
                            <img className="itemmy-lista-botones-imagen" src={avatar} alt=""/>
                            <span className="itemmy-lista-botones-fecha">10/oct/22</span>
                            {colorEstado('Pendiente')}
                        </div>
                    </div>
                    <div className="itemmy-lista"></div>
                    <div className="itemmy-lista"></div>
                    <div className="itemmy-lista"></div>
                    <div className="itemmy-lista"></div>

                </div>
                
                <div className="contenedor-requestmy">
                    
                    <div className="requestmy-encabezado">
                        <p className="requestmy-titulo">Mantenimiento de impresora y cartucho de ventas.</p>
                        <img className="requestmy-titulo-imagen" src={check} alt=""/>
                    </div>

                    <div className="requestmy-usuario">
                        <span className="requestmy-etiqueta">Solicitante:</span>
                        <img className="requestmy-usuario-imagen" src={avatar} alt=""/>
                        <div className="requestmy-usuario-info">
                            <p>Erick Mendoza</p>
                            <p>Departamento de Sistemas</p>
                        </div>
                    </div>
                    
                    <div className="requestmy-fecha-estado">
                        <div className="requestmy-fecha">
                            <span className="requestmy-etiqueta">Fecha:</span>
                            <span className="requestmy-date">1/oct/2022</span>
                        </div>

                        <div className="requestmy-estado">
                            <span className="requestmy-etiqueta">Estado: </span>
                            {colorEstado('Pendiente')}
                        </div>
                    </div>

                    <div className="requestmy-detalle">
                        <span className="requestmy-etiqueta">Detalle:</span>
                        <p>El Mantenimiento Preventivo de la impresora se realiza para prevenir posibles problemas de impresión, mala calidad en la impresión o fallas de los componentes electrónicos de la impresora.</p>
                    </div>

                    <div className="tabuladoresmy">
                        <div className="tabmy" id="tabmy-observaciones" onClick={()=>activarTabObservacionesMy()}>  Observaciones</div>
                        <div className="tabmy" id="tabmy-comentarios" onClick={()=>activarTabComentariosMy()}>Comentarios</div>
                        <div className="tabmy" id="tabmy-blanco"></div>
                    </div>

                    <div className="contenedormy-observaciones" id="contenedormy-observaciones">
                        <div className="observacionesmy">
                            
                            <div className="itemmy-observaciones">
                                <p>Esto es una observacion</p>
                                <div className="itemmy-observaciones-tipo">1/oct/2022</div>
                            </div>
                            <div className="itemmy-observaciones">
                                <p>Esto es una observacion. Esto es una observacion. Esto es una observacion. Esto es una observacion. Esto es una observacion.</p>
                                <div className="itemmy-observaciones-tipo">1/oct/2022</div>
                            </div>

                        </div>

                        <div className="nuevamy-observacion">
                            <input className="nuevamy-observacion-texto" type="text" id="inputmy-observacion" name="input-observacion" placeholder="Nueva Observacion"/>
                            <input className="nuevamy-observacion-boton" type="button" value="Guardar" />
                        </div>
                    </div>

                    <div className="contenedormy-observaciones" id="contenedormy-comentarios">
                        <div className="observacionesmy">
                            
                            <div className="itemmy-observaciones">
                                <p>Esto es un comentario</p>
                                <img className="itemmy-observaciones-imagen" src={avatar} alt="" title="Personal"/>
                            </div>
                            <div className="itemmy-observaciones">
                                <p>Esto es una comentario. Esto es un comentario. Esto es un comentario. Esto es un comentario. Esto es un comentario.</p>
                                <img className="itemmy-observaciones-imagen" src={avatar} alt="" title="Personal"/>
                            </div>

                        </div>

                        <div className="nuevamy-observacion">
                            <input className="nuevamy-observacion-texto" type="text" id="inputmy-observacion" name="input-observacion" placeholder="Nuevo Comentario"/>
                            <input className="nuevamy-observacion-boton" type="button" value="Guardar" />
                        </div>
                    </div>

                </div>
                
            </div>

        </div>

    )

    function colorEstado(estado){
    
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
            
            <span className="itemmy-lista-botones-estado" style={color}>{estado_tarea}</span>
    
        )

    }

    function activarTabComentariosMy(){
        let tab_observaciones = document.getElementById('tabmy-observaciones')
        let tab_comentarios = document.getElementById('tabmy-comentarios')
        let contenedor_observaciones = document.getElementById('contenedormy-observaciones')
        let contenedor_comentarios = document.getElementById('contenedormy-comentarios')

        tab_observaciones.style.backgroundColor = 'rgb(248, 241, 218)'
        tab_observaciones.style.fontStyle = 'normal'
        tab_observaciones.style.fontWeight = 'normal'
        tab_observaciones.style.borderBottom = '1px solid #c3cedb'
        tab_comentarios.style.backgroundColor = 'rgb(234, 233, 247)'
        tab_comentarios.style.fontStyle = 'italic'
        tab_comentarios.style.fontWeight = 'bold'
        tab_comentarios.style.borderBottom = 'none'
        contenedor_observaciones.style.display = 'none'
        contenedor_comentarios.style.display = 'block'

    }

    function activarTabObservacionesMy(){
        let tab_observaciones = document.getElementById('tabmy-observaciones')
        let tab_comentarios = document.getElementById('tabmy-comentarios')
        let contenedor_observaciones = document.getElementById('contenedormy-observaciones')
        let contenedor_comentarios = document.getElementById('contenedormy-comentarios')

        tab_comentarios.style.backgroundColor = 'rgb(248, 241, 218)'
        tab_comentarios.style.fontStyle = 'normal'
        tab_comentarios.style.fontWeight = 'normal'
        tab_comentarios.style.borderBottom = '1px solid #c3cedb'
        tab_observaciones.style.backgroundColor = 'rgb(234, 233, 247)'
        tab_observaciones.style.fontStyle = 'italic'
        tab_observaciones.style.fontWeight = 'bold'
        tab_observaciones.style.borderBottom = 'none'
        contenedor_comentarios.style.display = 'none'
        contenedor_observaciones.style.display = 'block'

    }
    

}
import React from "react";
import './RequestList.css';
import avatar from '../../components/img/foto-avatar.png';
import check from '../../components/img/check3.png';
import imgPersonal from '../../components/img/carita.png';
import imgExterna from '../../components/img/flecha.png';


export default function RequestList (){

    return(

        <div className="request" id="request">
            
            <div className="request-barra-titulo">
                <span className="request-list-titulo">Listado de solicitudes a realizar</span>
            </div>

            <div className="request-contenido">
                <div className="contenedor-lista">

                    <div className="item-lista">
                        <span className="item-lista-titulo">Mantenimiento de impresora y cartucho de ventas.</span>
                        <div className="item-lista-botones">
                            <img className="item-lista-botones-imagen" src={avatar} alt=""/>
                            <span className="item-lista-botones-fecha">10/oct/22</span>
                            <span className="item-lista-botones-estado">Pendiente</span>
                        </div>
                    </div>
                    <div className="item-lista"></div>
                    <div className="item-lista"></div>
                    <div className="item-lista"></div>
                    <div className="item-lista"></div>
                    <div className="item-lista"></div>

                </div>
                
                <div className="contenedor-request">
                    
                    <div className="request-encabezado">
                        <p className="request-titulo">Mantenimiento de impresora y cartucho de ventas.</p>
                        <img className="request-titulo-imagen" src={check} alt=""/>
                    </div>

                    <div className="request-usuario">
                        <span className="request-etiqueta">Solicitante:</span>
                        <img className="request-usuario-imagen" src={avatar} alt=""/>
                        <div className="request-usuario-info">
                            <p>Erick Mendoza</p>
                            <p>Departamento de Sistemas</p>
                        </div>
                    </div>
                    
                    <div className="request-fecha-estado">
                        <div className="request-fecha">
                            <span className="request-etiqueta">Fecha:</span>
                            <span className="request-date">1/oct/2022</span>
                        </div>

                        <div className="request-estado">
                            <span className="request-etiqueta">Estado: </span>
                            {colorEstado('Pendiente')}
                        </div>
                    </div>

                    <div className="request-detalle">
                        <span className="request-etiqueta">Detalle:</span>
                        <p>El Mantenimiento Preventivo de la impresora se realiza para prevenir posibles problemas de impresión, mala calidad en la impresión o fallas de los componentes electrónicos de la impresora.</p>
                    </div>

                    <div className="tabuladores">
                        <div className="tab" id="tab-observaciones" onClick={()=>activarTabObservaciones()}>  Observaciones</div>
                        <div className="tab" id="tab-comentarios" onClick={()=>activarTabComentarios()}>Comentarios</div>
                        <div className="tab" id="tab-blanco"></div>
                    </div>

                    <div className="contenedor-observaciones" id="contenedor-observaciones">
                        <div className="observaciones">
                            
                            <div className="item-observaciones">
                                <p>Esto es una observacion</p>
                                <div className="item-observaciones-tipo">
                                    <img className="item-observaciones-imagen" src={imgPersonal} alt="" title="Personal"/>
                                </div>
                            </div>
                            <div className="item-observaciones">
                                <p>Esto es una observacion. Esto es una observacion. Esto es una observacion. Esto es una observacion. Esto es una observacion.</p>
                                <div className="item-observaciones-tipo">
                                    <img className="item-observaciones-imagen" src={imgExterna} alt="" title="Externa"/>
                                </div>
                            </div>

                        </div>

                        <div className="nueva-observacion">
                            <input className="nueva-observacion-texto" type="text" id="input-observacion" name="input-observacion" placeholder="Nueva Observacion"/>
                            <input className="nueva-observacion-boton" type="button" value="Guardar" />
                        </div>
                    </div>

                    <div className="contenedor-observaciones" id="contenedor-comentarios">
                        <div className="observaciones">
                            
                            <div className="item-observaciones">
                                <p>Esto es un comentario</p>
                                <div className="item-observaciones-tipo">
                                    <img className="item-observaciones-imagen" src={imgPersonal} alt="" title="Personal"/>
                                </div>
                            </div>
                            <div className="item-observaciones">
                                <p>Esto es una comentario. Esto es un comentario. Esto es un comentario. Esto es un comentario. Esto es un comentario.</p>
                                <div className="item-observaciones-tipo">
                                    <img className="item-observaciones-imagen" src={imgExterna} alt="" title="Externa"/>
                                </div>
                            </div>

                        </div>

                        <div className="nueva-observacion">
                            <input className="nueva-observacion-texto" type="text" id="input-observacion" name="input-observacion" placeholder="Nuevo Comentario"/>
                            <input className="nueva-observacion-boton" type="button" value="Guardar" />
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
            
            <span className="item-lista-botones-estado" style={color}>{estado_tarea}</span>
    
        )

    }

    function activarTabComentarios(){
        let tab_observaciones = document.getElementById('tab-observaciones')
        let tab_comentarios = document.getElementById('tab-comentarios')
        let contenedor_observaciones = document.getElementById('contenedor-observaciones')
        let contenedor_comentarios = document.getElementById('contenedor-comentarios')

        tab_observaciones.style.backgroundColor = 'white'
        tab_observaciones.style.fontStyle = 'normal'
        tab_observaciones.style.fontWeight = 'normal'
        tab_observaciones.style.borderBottom = '1px solid #c3cedb'
        tab_comentarios.style.backgroundColor = 'rgb(238, 235, 217)'
        tab_comentarios.style.fontStyle = 'italic'
        tab_comentarios.style.fontWeight = 'bold'
        tab_comentarios.style.borderBottom = 'none'
        contenedor_observaciones.style.display = 'none'
        contenedor_comentarios.style.display = 'block'

    }

    function activarTabObservaciones(){
        let tab_observaciones = document.getElementById('tab-observaciones')
        let tab_comentarios = document.getElementById('tab-comentarios')
        let contenedor_observaciones = document.getElementById('contenedor-observaciones')
        let contenedor_comentarios = document.getElementById('contenedor-comentarios')

        tab_comentarios.style.backgroundColor = 'white'
        tab_comentarios.style.fontStyle = 'normal'
        tab_comentarios.style.fontWeight = 'normal'
        tab_comentarios.style.borderBottom = '1px solid #c3cedb'
        tab_observaciones.style.backgroundColor = 'rgb(238, 235, 217)'
        tab_observaciones.style.fontStyle = 'italic'
        tab_observaciones.style.fontWeight = 'bold'
        tab_observaciones.style.borderBottom = 'none'
        contenedor_comentarios.style.display = 'none'
        contenedor_observaciones.style.display = 'block'

    }
    

}
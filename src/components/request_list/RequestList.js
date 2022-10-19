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
                    
                    <div className="request-fecha">
                        <span className="request-etiqueta">Fecha:</span>
                        <span className="request-date">1/oct/2022</span>
                    </div>

                    <div className="request-estado">
                        <span className="request-etiqueta">Estado:</span>
                        <span className="item-lista-botones-estado">Pendiente</span>
                    </div>

                    <div className="request-detalle">
                        <span className="request-etiqueta">Detalle:</span>
                        <p>El Mantenimiento Preventivo de la impresora se realiza para prevenir posibles problemas de impresión, mala calidad en la impresión o fallas de los componentes electrónicos de la impresora.</p>
                    </div>

                    <div className="observaciones">
                        <p className="titulo-observaciones">Observaciones</p>
                        
                        <div className="item-observaciones">
                            <p>Esto es una observacion</p>
                            <div className="item-observaciones-tipo">
                                <span></span>
                                <img className="item-observaciones-imagen" src={imgPersonal} alt="" title="Personal"/>
                            </div>
                        </div>
                        <div className="item-observaciones">
                            <p>Esto es una observacion. Esto es una observacion. Esto es una observacion. Esto es una observacion. Esto es una observacion.</p>
                            <div className="item-observaciones-tipo">
                                <span></span>
                                <img className="item-observaciones-imagen" src={imgExterna} alt="" title="Externa"/>
                            </div>
                        </div>

                    </div>

                </div>
                
            </div>

        </div>

    )

}
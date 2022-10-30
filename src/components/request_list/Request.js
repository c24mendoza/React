import React from "react";
import RequestList from "./RequestList";
import RequestMy from "./RequestMy";
import './Request.css';

export default function Request(){
    return(
            
            <div className="contenedor-request-solicitudes">

                <div className="encabezado-request-solicitudes" id="encabezado-request-solicitudes">
                    <div className="encabezado-request-solicitudes-botones">
                        <button className="btn" id="btn-request" onClick={()=>activarBotonRequest()}>Solicitudes a realizar</button>
                        <button className="btn" id="btn-solicitudes" onClick={()=>activarBotonSolicitudes()}>Solicitadas por mi</button>
                    </div>
                    <div className="encabezado-request-solicitudes-vacio"></div>
                </div>

                <div className="contenedores-tabs">

                    <div className="contenedor-tab-request" id="contenedor-tab-request">
                        <RequestList/>
                    </div>

                    <div className="contenedor-tab-solicitudes" id="contenedor-tab-solicitudes">
                        <RequestMy/>
                    </div>

                </div>

            </div>
        
    )

    function activarBotonSolicitudes(){
        let btn_request = document.getElementById('btn-request')
        let btn_solicitudes = document.getElementById('btn-solicitudes')
        let contenedor_tab_request = document.getElementById('contenedor-tab-request')
        let contenedor_tab_solicitudes = document.getElementById('contenedor-tab-solicitudes')
        let encabezado_request_solicitudes = document.getElementById('encabezado-request-solicitudes')

        encabezado_request_solicitudes.style.backgroundColor = 'rgb(248, 241, 218)'
        btn_solicitudes.style.color = 'rgb(248, 241, 218)'
        btn_solicitudes.style.backgroundColor = 'rgb(44, 62, 80)'
        btn_request.style.color = "rgb(223, 223, 223)"
        btn_request.style.backgroundColor = 'rgb(128, 128, 128)'
        contenedor_tab_request.style.display = 'none'
        contenedor_tab_solicitudes.style.display = 'block'

    }

    function activarBotonRequest(){
        let btn_request = document.getElementById('btn-request')
        let btn_solicitudes = document.getElementById('btn-solicitudes')
        let contenedor_tab_request = document.getElementById('contenedor-tab-request')
        let contenedor_tab_solicitudes = document.getElementById('contenedor-tab-solicitudes')
        let encabezado_request_solicitudes = document.getElementById('encabezado-request-solicitudes')

        encabezado_request_solicitudes.style.backgroundColor = 'rgb(234, 233, 247)'
        btn_request.style.color = 'rgb(248, 241, 218)'
        btn_request.style.backgroundColor = 'rgb(44, 62, 80)'
        btn_solicitudes.style.color = "rgb(223, 223, 223)"
        btn_solicitudes.style.backgroundColor = 'rgb(128, 128, 128)'
        contenedor_tab_solicitudes.style.display = 'none'
        contenedor_tab_request.style.display = 'block'

    }

}
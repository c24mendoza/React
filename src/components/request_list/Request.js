import React from "react";
import RequestList from "./RequestList";
import RequestMy from "./RequestMy";
import './Request.css';

export default function Request(){
    return(

        <div className="contenedor-tab-request-solicitudes">

            <div className="tabulator">
                <div className="tabulator-tab" id="tab-request" onClick={()=>activarTabRequest()}>
                    <span className="tabulator-tab-etiqueta">Solicitudes por realizar</span>
                </div>
                <div id="tab-intermedio"></div>
                <div className="tabulator-tab" id="tab-solicitudes" onClick={()=>activarTabSolicitudes()}>
                    <span className="tabulator-tab-etiqueta">Solicitadas por mi </span>
                </div>
                <div className="tabulator-tab" id="tab-vacio"></div>
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

    function activarTabSolicitudes(){
        let tab_request = document.getElementById('tab-request')
        let tab_solicitudes = document.getElementById('tab-solicitudes')
        let contenedor_tab_request = document.getElementById('contenedor-tab-request')
        let contenedor_tab_solicitudes = document.getElementById('contenedor-tab-solicitudes')

        tab_request.style.backgroundColor = 'white'
        tab_request.style.fontStyle = 'normal'
        tab_request.style.fontWeight = 'normal'
        tab_request.style.borderBottom = '5px solid #2c3e50'
        tab_request.style.borderTop = '1px solid #2c3e50'
        tab_request.style.borderLeft = '1px solid #2c3e50'
        tab_request.style.borderRight = '1px solid #2c3e50'
        tab_solicitudes.style.backgroundColor = 'rgb(248, 241, 218)'
        tab_solicitudes.style.fontStyle = 'italic'
        tab_solicitudes.style.fontWeight = 'bold'
        tab_solicitudes.style.borderBottom = 'none'
        tab_solicitudes.style.borderRight = '5px solid #2c3e50'
        tab_solicitudes.style.borderLeft = '5px solid #2c3e50'
        tab_solicitudes.style.borderTop = '5px solid #2c3e50'
        contenedor_tab_request.style.display = 'none'
        contenedor_tab_solicitudes.style.display = 'block'

    }

    function activarTabRequest(){
        let tab_request = document.getElementById('tab-request')
        let tab_solicitudes = document.getElementById('tab-solicitudes')
        let contenedor_tab_request = document.getElementById('contenedor-tab-request')
        let contenedor_tab_solicitudes = document.getElementById('contenedor-tab-solicitudes')

        tab_solicitudes.style.backgroundColor = 'white'
        tab_solicitudes.style.fontStyle = 'normal'
        tab_solicitudes.style.fontWeight = 'normal'
        tab_solicitudes.style.borderBottom = '5px solid #2c3e50'
        tab_solicitudes.style.borderTop = '1px solid #2c3e50'
        tab_solicitudes.style.borderLeft = '1px solid #2c3e50'
        tab_solicitudes.style.borderRight = '1px solid #2c3e50'
        tab_request.style.backgroundColor = 'rgb(234, 233, 247)'
        tab_request.style.fontStyle = 'italic'
        tab_request.style.fontWeight = 'bold'
        tab_request.style.borderBottom = 'none'
        tab_request.style.borderRight = '5px solid #2c3e50'
        tab_request.style.borderLeft = '5px solid #2c3e50'
        tab_request.style.borderTop = '5px solid #2c3e50'
        contenedor_tab_solicitudes.style.display = 'none'
        contenedor_tab_request.style.display = 'block'

    }

}
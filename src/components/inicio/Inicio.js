import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import './Inicio.css'
import TaskTargets from "../task_targets/TaskTargets";
// import RequestList from "../request_list/RequestList";
import Request from "../request_list/Request";

export default function Inicio(){

    return(

        <div className="contenido-central" id="contenido-central">
            
            <Router>
          
                <Routes>
                    <Route path='/'  element={<TaskTargets/>} exact/>
                    <Route path='/solicitudes' element={<Request/>}/>
                </Routes>

            </Router>

        </div>


    )

}

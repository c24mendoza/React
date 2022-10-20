import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";

import './Inicio.css'
import TaskTargets from "../task_targets/TaskTargets";
import RequestList from "../request_list/RequestList";

export default function Inicio(){

    return(

        <div className="contenido-central" id="contenido-central">
            
            <Router>
          
                <Routes>
                    <Route path='/'  element={<TaskTargets/>} exact/>
                    <Route path='/mistareas' element={<RequestList/>}/>
                </Routes>

            </Router>

        </div>


    )

}

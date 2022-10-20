import React from 'react';

// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";

import Nav from './components/nav/Nav';
import SidebarGrande from './components/sidebar/SidebarGrande';
import SidebarPequeno from './components/sidebar/SidebarPequeno';
// import TaskTargets from './components/task_targets/TaskTargets';
// import RequestList from './components/request_list/RequestList';
import Inicio from './components/inicio/Inicio';

function App() {

    return (
      <>
        <Nav/>
        <SidebarGrande/>
        <SidebarPequeno/>
        <Inicio/>
        
        {/* <Router>
          
          <Routes>
            <Route path='/'  element={<TaskTargets/>} exact/>
            <Route path='/mistareas' element={<RequestList/>}/>
          </Routes>

        </Router> */}

      </>

    );
}

export default App;

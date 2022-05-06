import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Crud from "./Container/Crud/Crud";
import Create from "./Container/Crud/Create/CreateData";
import Edit from "./Container/Crud/Edit/EditData";

const App = () => {
  return (
      <Router>
        <Routes>
          <Route path={'/'} element={ <Crud /> } />
          <Route path={'/create-data'} element={ <Create /> } />
          <Route path={'/edit-data/:id'} element={ <Edit /> } />
        </Routes>
      </Router>
  )
}
export default App;
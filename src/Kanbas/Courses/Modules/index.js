import React from "react";
import ModulesList from "./ModuleList";
import "./modules.css"
function Modules() {
  return (
   <div className="d-flex-col">
    
      <div className="d-flex mb-2">
        <button type="button" className="btn btn-light">
          Collapse All
        </button>
        <button type="button" className="btn btn-light ml-2">
          View Progress
        </button>
        <select className="ml-2">
          <option selected value="Publish All">
            Publish All
          </option>
        </select>
        <div className=""></div>
        <button type="button" className="btn btn-danger">
          Module
        </button>
      </div>
      <ModulesList />
    </div>
    
    
  );
}

export default Modules;

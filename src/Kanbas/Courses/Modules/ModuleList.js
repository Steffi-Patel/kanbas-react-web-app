import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";

function ModulesList() {
  const { courseId } = useParams();

  const modulesData = db.modules.filter((module) => module.course === courseId);

  return (
    <div className="list-group border-left-green">
      {modulesData.map((module) => (
        <div key={module._id} className="list-group-item border-left-green">
          <i className="fa-solid fa-ellipsis-vertical"></i>
          <i className="fa-solid fa-ellipsis-vertical mr-2"></i>
          {module.description} 
        </div>
      ))}
    </div>
  );
}

export default ModulesList;

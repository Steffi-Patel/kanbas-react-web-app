import React, {useEffect} from "react";
import { useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  //let { courseId } = useParams();

  // If courseId is an object, extract the correct property
  //if (typeof courseId === 'object' && courseId !== null) {
  //  courseId = courseId.id; // Replace 'id' with the correct property name
 // }
  console.log("Type of courseId:", typeof courseId, ", Value:", courseId);




  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((_) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleUpdateModule = async () => {
    await client.updateModule(module);
    dispatch(updateModule(module));
  };


  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId, dispatch]);

  


  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };


  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          //onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          onClick={handleAddModule}
          className="btn btn-success mr-2">
          Add
        </button>
        <button
          onClick={() => handleUpdateModule(module._id)}
         // onClick={() => dispatch(updateModule(module))}
          className="btn btn-primary mr-2">
          Update
        </button>
        <input
          value={module.name}
          onChange={(e) =>
            dispatch(setModule({ ...module, name: e.target.value }))
          }
          className="mr-2"
        />
        <textarea
          value={module.description}
          onChange={(e) =>
            dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item">
            <button
              onClick={() => dispatch(setModule(module))}
              className="btn btn-success mr-2">
              Edit
            </button>
            <button
             // onClick={() => dispatch(deleteModule(module._id))}
              onClick={() => handleDeleteModule(module._id)}
              className="btn btn-danger mr-2">
              Delete
            </button>
            <h3>{module.name}</h3>
            <p>{module.description}</p>
            <p>{module._id}</p>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;

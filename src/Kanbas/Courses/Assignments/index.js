import React from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaFileLines, FaCircleCheck, FaEllipsisVertical, FaTrash } from "react-icons/fa6";
import "./assignments.css";

function Assignments() {
  const { courseId } = useParams();
  const assignments = useSelector((state) => state.assignments);
  const dispatch = useDispatch();
  const courseAssignments = assignments.filter((assignment) => assignment.course === courseId);

  const deleteAssignment = (id) => {
    const confirmation = window.confirm("Are you sure you want to delete this assignment?");
    if (confirmation) {
      dispatch({ type: 'DELETE_ASSIGNMENT', payload: id });
    }
  };

  return (
    <div>
      <h5>Assignments for course {courseId}</h5>

      <div className="d-flex mb-2 mt-5">
        <input
          type="text"
          className="form-control"
          style={{ width: "250px" }}
          title="Type the name of the assignment"
          placeholder="Search for Assignments"
        />
        <div className="flex-grow-1"></div>
        <button type="button" className="btn btn-light ml-2">
          + Group
        </button>
        <Link to={`/Kanbas/Courses/${courseId}/AssignmentEditor`} className="btn btn-danger ml-2">
          + Assignment
        </Link>
        <select className="ml-2">
          <option selected value="Edit Assignment Dates">
            +
          </option>
        </select>
      </div>
      <br />

      <div className="list-group border-left-green">
        {courseAssignments.map((assignment) => (
          <div key={assignment._id} className="list-group-item d-flex justify-content-between">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center">
                  <FaEllipsisVertical className="mr-2" />
                  <FaEllipsisVertical className="mr-2" />
                  <FaFileLines className="text-success mr-3" />
                </div>
                {assignment.title}
                <div className="d-flex align-items-center">
                  <FaCircleCheck className="text-success mr-2" />
                  <FaEllipsisVertical />
                </div>
              </div>
            </Link>
            <button onClick={() => deleteAssignment(assignment._id)} className="btn btn-danger">
              <FaTrash />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Assignments;

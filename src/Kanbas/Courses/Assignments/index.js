import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import "./assignments.css";
import { FaFileLines, FaCircleCheck, FaEllipsisVertical } from "react-icons/fa6";

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
      <h5>Assignments for course {courseId}</h5>

      <div class="d-flex mb-2 mt-5">
        <input
          type="text"
          class="form-control"
          style={{ width: "250px" }}
          title="Type the name of the assignment"
          placeholder="Search for Assignments"
        />

        <div class="flex-grow-1"></div>

        <button type="button" class="btn btn-light ml-2">
          + Group
        </button>

        <button type="button" class="btn btn-danger ml-2">
          + Assignment
        </button>

        <select class="ml-2">
          <option selected value="Edit Assignment Dates">
            +
          </option>
        </select>
      </div>
      <br />

      <div className="list-group border-left-green">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item"
          >
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
        ))}
      </div>
    </div>
  );
}

export default Assignments;

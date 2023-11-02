import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h2>Assignment Name</h2>
          <input
            value={assignment.title}
            className="form-control mb-2"
            id="assignment-name"
            placeholder="Assignment name"
          />

          <div className="mb-3">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              cols="20"
              rows="4"
              className="form-control"
              value={assignment.description}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="points" className="form-label">
              Points
            </label>
            <input
              type="text"
              className="form-control"
              id="points"
              placeholder="100"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="assignment-group" className="form-label">
              Assignment Group
            </label>
            <select className="form-control" id="assignment-group">
              <option selected value="ASSIGNMENTS">
                ASSIGNMENTS
              </option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="display-grade-as" className="form-label">
              Display Grade as
            </label>
            <select className="form-control" id="display-grade-as">
              <option selected value="Percentage">
                Percentage
              </option>
            </select>
          </div>
        </div>

        <div className="col">
          <div className="row mb-3 align-items-center">
            <div className="col-2 text-left">
              <p>Submission</p>
            </div>
            <div className="col-10 border p-3">
              <div className="mb-3">
                <label htmlFor="submission-type" className="form-label">
                  Submission Type
                </label>
                <select className="form-control" id="submission-type">
                  <option selected value="Online">
                    Online
                  </option>
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Online Entry Options</label>
                <div className="mb-1">
                  <input
                    type="checkbox"
                    value="Text Entry"
                    name="check-genre"
                    id="chkbox-Text Entry"
                  />
                  <label htmlFor="chkbox-Text Entry">Text Entry</label>
                </div>
                <div className="mb-1">
                  <input
                    type="checkbox"
                    value="Website URL"
                    name="check-genre"
                    id="chkbox-Website URL"
                  />
                  <label htmlFor="chkbox-Website URL">Website URL</label>
                </div>
                <div className="mb-1">
                  <input
                    type="checkbox"
                    value="Media Recordings"
                    name="check-genre"
                    id="chkbox-Media Recordings"
                  />
                  <label htmlFor="chkbox-Media Recordings">Media Recordings</label>
                </div>
                <div className="mb-1">
                  <input
                    type="checkbox"
                    value="Student Annotation"
                    name="check-genre"
                    id="chkbox-Student Annotation"
                  />
                  <label htmlFor="chkbox-Student Annotation">Student Annotation</label>
                </div>
                <div className="mb-1">
                  <input
                    type="checkbox"
                    value="File Uploads"
                    name="check-genre"
                    id="chkbox-File Uploads"
                  />
                  <label htmlFor="chkbox-File Uploads">File Uploads</label>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-3 align-items-center">
            <div className="col-2 text-left">
              <p>Assign</p>
            </div>
            <div className="col-10 border p-3">
              <form id="AssignForm">
                <div className="mb-3">
                  <label htmlFor="AssignInput" className="form-label">
                    Assign To
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="AssignInput"
                    placeholder="Everyone"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="text-fields-due" className="form-label">
                    Due
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="text-fields-due"
                    value="2021-01-01"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="text-fields-Available from" className="form-label">
                    Available from
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="text-fields-Available from"
                    value="2021-01-01"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="text-fields-Until" className="form-label">
                    Until
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="text-fields-Until"
                    value="2021-01-01"
                  />
                </div>
              </form>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-md-12 d-flex justify-content-end">
              <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-light">
                Cancel
              </Link>
              <button onClick={handleSave} className="btn btn-danger">Save</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
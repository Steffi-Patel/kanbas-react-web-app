import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AssignmentsEditor() {
  const { courseId, assignmentId } = useParams();
  const navigate = useNavigate(); 
  const dispatch = useDispatch();
  const assignment = useSelector((state) => state.assignments.find((a) => a._id === assignmentId));
  const [title, setTitle] = useState(assignment ? assignment.title : '');

  const handleSave = () => {
    if (assignment) {
      dispatch({
        type: 'UPDATE_ASSIGNMENT',
        payload: { ...assignment, title: title }
      });
      navigate(`/Kanbas/Courses/${courseId}/Assignments`); 
    }
  };

  const handleCancel = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`); 
  };

  return (
    <div>
      <h4>Edit Assignment</h4>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <button onClick={handleSave}>Save</button>
      <button onClick={handleCancel}>Cancel</button>
    </div>
  );
}

export default AssignmentsEditor;

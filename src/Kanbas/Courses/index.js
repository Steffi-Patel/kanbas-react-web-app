// Courses.js
import React from "react";
import db from "../../Kanbas/Database";
import { Routes, Route, useParams, Navigate, useLocation } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import CoursePage from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";

function Courses() {
  const { courseId } = useParams();
  const course = db.courses.find((course) => course._id === courseId);
    const {pathname} = useLocation();

  if (!course) {
    return <div>Course not found</div>;
  }

  return (
    <div className="wd-flex-row-container">
      
      <div className="wd-secondbar">
        <CourseNavigation />
      </div>
      <div className="d-flex">
    <Routes>
        <Route path="/" element={<Navigate to="Home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="Modules" element={<Modules />} />
        <Route path="Piazza" element={<h1>Piazza</h1>} />
        <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
        <Route path="Assignments" element={<Assignments/>} />
        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />

        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
        <Route path="Grades" element={<h1>Grades</h1>} />
        <Route path="People" element={<h1>People</h1>} />
        <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
        <Route path="Discussions" element={<h1>Discussions</h1>} />
        <Route path="Announcements" element={<h1>Announcements</h1>} />
        <Route path="Pages" element={<h1>Pages</h1>} />
        <Route path="Files" element={<h1>Files</h1>} />
        <Route path="Rubrics" element={<h1>Rubrics</h1>} />
        <Route path="Outcomes" element={<h1>Outcomes</h1>} />
        <Route path="Collaborations" element={<h1>Collaborations</h1>} />
        <Route path="Syllabus" element={<h1>Syllabus</h1>} />
        <Route path="Settings" element={<h1>Settings</h1>} />
    </Routes>
    </div>
</div>
   
  );
}

export default Courses;

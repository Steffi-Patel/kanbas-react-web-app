// CourseNavigation.js
import React from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes", "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files", "Rubrics", "Outcomes", "Collaborations", "Syllabus", "Settings"];

  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="d-flex-col" style={{ width: 125}}>
        <li>
        <span class="wd-coursename">
                    {courseId}_Fall_Semester
                </span>
        </li>

      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`${pathname.includes(link) && "acitve"}`}>
          {link}
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;

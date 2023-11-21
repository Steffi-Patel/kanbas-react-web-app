import React from "react";
import { Link } from "react-router-dom";

function Dashboard({ courses, course, setCourse, addNewCourse, deleteCourse, updateCourse, editCourse}) {

  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Published Courses ({courses.length})</h2>
      <div className="course-input-controls">
        <input 
            type="text" 
            placeholder="Course Name" 
            value={course.name} 
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
        />
        <input 
            type="text" 
            placeholder="Course Number" 
            value={course.number} 
            onChange={(e) => setCourse({ ...course, number: e.target.value })}
        />
        <input 
            type="date" 
            value={course.startDate} 
            onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
        />
        <input 
            type="date" 
            value={course.endDate} 
            onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
        />
        <button onClick={addNewCourse} className="btn btn-primary">Add</button>
        <button onClick={updateCourse} className="btn btn-secondary">Update</button>
      </div>
      <div className="list-group">
        {courses.map((courseItem) => (
          <div key={courseItem._id} className="list-group-item">
            <Link to={`/Kanbas/Courses/${courseItem._id}`}>{courseItem.name}</Link>
            <div className="course-buttons">
              <button onClick={() => editCourse(courseItem)} className="btn btn-warning btn-sm ml-2">Edit</button>
              <button onClick={() => deleteCourse(courseItem._id)} className="btn btn-danger btn-sm ml-2">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
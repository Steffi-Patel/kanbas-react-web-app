import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
function Dashboard() {
  const courses = [
    {
      "_id": "RS101",
      "name": "Rocket Propulsion",
      "number": "RS4550",
      "startDate": "2023-01-10",
      "endDate": "2023-05-15"
    },
    {
      "_id": "RS102",
      "name": "Aerodynamics",
      "number": "RS4560",
      "startDate": "2023-01-10",
      "endDate": "2023-05-15"
    },
    {
      "_id": "RS103",
      "name": "Spacecraft Design",
      "number": "RS4570",
      "startDate": "2023-01-10",
      "endDate": "2023-05-15"
    }
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <h3>Published Courses ({courses.length})</h3>

      <div className="row">
        {courses.map((course) => (
          <div key={course._id} className="col-md-4 mb-4">
            <div className="card" style={{ width: "18rem" }}>
              <img src="/dashboardlogo/course pic.jpg" className="card-img-top" alt="Course" />
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/Kanbas/Courses/${course._id}`}>{course.name}</Link>
                </h5>
                <p className="card-text">
                  Term: Fall, Year: 2023, Section: A
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;

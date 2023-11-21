import React, { useState, useEffect } from "react";
import axios from "axios";
import KanbasNavigation from "./KanbasNavigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const [course, setCourse] = useState({
    name: "",
    number: "",
    startDate: "",
    endDate: ""
  });

 //const URL = "http://localhost:4000/api/courses";
  const URL = `${process.env.REACT_APP_BASE_URL}/api/courses`;

  // Fetch courses from server
  useEffect(() => {
    axios.get(URL)
      .then(response => setCourses(response.data))
      .catch(error => console.error('Error fetching courses:', error));
  }, );

  const addNewCourse = async (newCourse) => {
    try {
      const response = await axios.post(URL, newCourse);
      setCourses([response.data, ...courses]);
      setCourse({ name: "", number: "", startDate: "", endDate: "" }); // Reset the form
    } catch (error) {
      console.error('Error adding new course:', error);
    }
  };

 // const addNewCourse = async () => {
 //   try {
  //    const response = await axios.post(URL, course);
   //   setCourses([response.data, ...courses]);
   //   setCourse({ name: "", number: "", startDate: "", endDate: "" });
  //  } catch (error) {
  //    console.error('Error adding new course:', error);
  //  }
 // };

  const deleteCourse = async (courseId) => {
    try {
      await axios.delete(`${URL}/${courseId}`);
      setCourses(courses.filter(course => course._id !== courseId));
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

 // const updateCourse = async () => {
   // try {
     // await axios.put(`${URL}/${course._id}`, course);
      //setCourses(courses.map(c => c._id === course._id ? course : c));
      
    //} catch (error) {
     // console.error('Error updating course:', error);
    //}
  //};

  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return response.data;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };


  
  const editCourse = (courseToEdit) => {
    setCourse(courseToEdit);
  };

  return (
    <Provider store={store}>
      <div className="d-flex">
        <KanbasNavigation />
        <div>
          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
                editCourse={editCourse}
              />
            } />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />
            } />
          </Routes>
        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;

import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import ModulesList from "../Modules/ModuleList";
import { FaBan, FaCheckCircle, FaFileImport, FaUpload, FaHome, FaEye, FaBullhorn, FaChartBar, FaBell, FaCalendar } from "react-icons/fa";

function Home() {
  return (
    <div className="d-flex">
      <div className="col">
        <h2>Home</h2>
        <ModulesList />
      </div>
      <div className="col-2">
        <h2>Status</h2>
        <div className="d-flex mb-3">
          <button type="button" className="btn btn-secondary mr-2">
            <FaBan /> Unpublish
          </button>
          <button type="button" className="btn btn-success">
            <FaCheckCircle className="text-white" /> Published
          </button>
        </div>
        <ul className="list-group mb-4">
          <li className="list-group-item bg-light">
            <a href="#" className="text-dark text-decoration-none">
              <FaFileImport /> Import Existing Content
            </a>
          </li>
          <li className="list-group-item bg-light">
            <a href="#" className="text-dark text-decoration-none">
              <FaUpload /> Import From Commons
            </a>
          </li>
          <li className="list-group-item bg-light">
            <a href="#" className="text-dark text-decoration-none">
              <FaHome /> Choose Home Page
            </a>
          </li>
          <li className="list-group-item bg-light">
            <a href="#" className="text-dark text-decoration-none">
              <FaEye /> View Course Stream
            </a>
          </li>
          <li className="list-group-item bg-light">
            <a href="#" className="text-dark text-decoration-none">
              <FaBullhorn /> New Announcements
            </a>
          </li>
          <li className="list-group-item bg-light">
            <a href="#" className="text-dark text-decoration-none">
              <FaChartBar /> New Analytics
            </a>
          </li>
          <li className="list-group-item bg-light">
            <a href="#" className="text-dark text-decoration-none">
              <FaBell /> View Course Notifications
            </a>
          </li>
        </ul>

        <h2 className="my-2">Coming Up</h2>
        <p className="mb-3 text-end">
          <FaCalendar />
          <a href="#" className="btn btn-link text-danger text-decoration-none">
            View Calendar
          </a>
        </p>
        <ul className="list-unstyled">
          <li className="mb-2">
            <FaCalendar />
            <a href="#" className="text-danger text-decoration-none">
              Lecture
            </a>{" "}
            <br />
            CS4550.12631.202410 Sep 7 at 11:45am
          </li>
          <li className="mb-2">
            <FaCalendar />
            <a href="#" className="text-danger text-decoration-none">
              Lecture
            </a>{" "}
            <br />
            CS4550.12631.202410 Sep 11 at 11:45am
          </li>
          <li>
            <FaCalendar />
            <a href="#" className="text-danger text-decoration-none">
              Lecture
            </a>{" "}
            <br />
            CS5610 06 SP23 Lecture Sep 11 at 6pm
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

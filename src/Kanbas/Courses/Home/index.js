import React from "react";
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
        <div className="list-group mb-4">
          <button className="list-group-item bg-light text-left border-0">
            <FaFileImport /> Import Existing Content
          </button>
          <button className="list-group-item bg-light text-left border-0">
            <FaUpload /> Import From Commons
          </button>
          <button className="list-group-item bg-light text-left border-0">
            <FaHome /> Choose Home Page
          </button>
          <button className="list-group-item bg-light text-left border-0">
            <FaEye /> View Course Stream
          </button>
          <button className="list-group-item bg-light text-left border-0">
            <FaBullhorn /> New Announcements
          </button>
          <button className="list-group-item bg-light text-left border-0">
            <FaChartBar /> New Analytics
          </button>
          <button className="list-group-item bg-light text-left border-0">
            <FaBell /> View Course Notifications
          </button>
        </div>

        <h2 className="my-2">Coming Up</h2>
        <p className="mb-3 text-end">
          <FaCalendar />
          <button aria-label="View Calendar" className="btn btn-link text-danger border-0 p-0">
            View Calendar
          </button>
        </p>
        <ul className="list-unstyled">
          <li className="mb-2">
            <FaCalendar />
            <button aria-label="View Lecture Details" className="text-danger border-0 bg-transparent p-0">
              Lecture
            </button>
            <br />
            CS4550.12631.202410 Sep 7 at 11:45am
          </li>
          <li className="mb-2">
            <FaCalendar />
            <button aria-label="View Lecture Details" className="text-danger border-0 bg-transparent p-0">
              Lecture
            </button>
            <br />
            CS4550.12631.202410 Sep 11 at 11:45am
          </li>
          <li>
            <FaCalendar />
            <button aria-label="View Lecture Details" className="text-danger border-0 bg-transparent p-0">
              Lecture
            </button>
            <br />
            CS5610 06 SP23 Lecture Sep 11 at 6pm
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;

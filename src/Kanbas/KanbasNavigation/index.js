import React from "react";
import "./index.css"
import { Link, useLocation } from "react-router-dom";
import { FaUserCircle, FaClock, FaBook, FaCalendarAlt } from "react-icons/fa"; 

function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar"];
  const icons = [FaUserCircle, FaClock, FaBook, FaCalendarAlt]; 

  const { pathname } = useLocation();

  return (
    <div className="wd-sidebar" style={{ width: 150 }}>
      <ul>
        {links.map((link, index) => (
          <li key={index} className={`row ${pathname.includes(link) }`}>
            <div className={`row ${link === "Account" ? "account-icon" : "menu-icon"}`}>
              {icons[index] && React.createElement(icons[index], { size: 23 })} 
              <Link
                to={`/Kanbas/${link}`}
                className={`${pathname.includes(link) && "active"}`}
              >
                {link}
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigation;

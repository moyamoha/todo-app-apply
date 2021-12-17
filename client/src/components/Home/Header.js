import React from "react";
import Time from "./Time";
import {Link} from 'react-router-dom'

export default function Header({userName, logout}) {

  return (
      <div className="navbar">
          <div className="navbar-link-cont">
              <Link to={"/home/user"} className="headerLink">
                  Home
              </Link>
              <Link to={"/home/calender"} className="headerLink">
                  Calender
              </Link>
          </div>
          <div>Welcome {userName}</div>
          <div>
              <span
                  onClick={logout}
                  style={{ textDecoration: "underline" }}
              >
                  log out
              </span>
          </div>
          <Time></Time>
      </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

import "../HeaderMain/HeaderMain.css";

function HeaderMain(){
  return(
    <header className="header-container">
      <div className="container">
        <div className="logo">
          <h1> Nut Employee Management </h1>
        </div>
        <div className="add-new-employee">
          <Link to="/AddEmployee">
            <button> Add New Employee</button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default HeaderMain;
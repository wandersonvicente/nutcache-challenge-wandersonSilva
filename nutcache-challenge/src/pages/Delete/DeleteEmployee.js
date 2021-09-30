import React from "react";
import { Link } from "react-router-dom";


function DeleteEmployee(){
  return (
    <div>
      <h1> Delete Employee </h1>
      <Link to="DeleteConfirmation">
        <button>Delete</button>
      </Link>
    </div>
  )
}

export default DeleteEmployee;
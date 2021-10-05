/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from "react";
import api from "../../api.js";
import { Link } from "react-router-dom";
import "../Home/Home.css";
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import More from "../../images/more.svg";

function Home() {
  const [employee, setEmployee] = useState([]);

  useEffect(() => {
    api
      .get("/nutemployee")
      .then((response) => {
        setEmployee(response.data);
      })
      .catch(() => {
        console.log("error");
      });
  }, []);

  function deleteEmployee(id) {
    api.delete(`/nutemployee/${id}`);
    setEmployee(employee.filter((post) => employee.id !== id));
  }

  return (
    <div>
      <HeaderMain />
      <main>
        <div className="cards">
          {employee.map((employee, key) => {
            return (
              <div className="card" key={key}>
                <header>
                  <h2>{employee.name}</h2>
                  <img src={More} alt="see more" />
                </header>
                <div className="line"></div>
                <p>{employee.birth_date} </p>
                <p>{employee.gender} </p>
                <p>{employee.email} </p>
                <p>{employee.cpf} </p>
                <p>{employee.start_date} </p>
                <p>{employee.team} </p>

                <div className="btns">
                  <div className="btn-edit-employee">
                    <Link to={{ pathname: `/EditEmployee/${employee._id}` }}>
                      <button>Edit</button>
                    </Link>
                  </div>

                  <div className="btn-delete-employee">
                    <Link to="/">
                      <button onClick={() => deleteEmployee(employee._id)}>
                        Delete
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default Home;

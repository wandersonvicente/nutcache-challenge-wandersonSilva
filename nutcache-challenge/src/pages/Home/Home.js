/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../Home/Home.css"
import HeaderMain from "../../components/HeaderMain/HeaderMain";
import More from "../../images/more.svg"



function Home(){

  const [ employee, setEmployee ] = useState([]);

  useEffect(() => {
    axios.get("https://crudcrud.com/api/249ddef60ecd4150aac87f02d2f1136b/nutemployee/id")
    .then((response) => {
      setEmployee(response.data);
    })
    .catch(() => {
      console.log('error');
    });
  }, []);

  function deleteEmployee(id) {
    axios.delete(`https://crudcrud.com/api/249ddef60ecd4150aac87f02d2f1136b/nutemployee/${id}`)
    setEmployee(employee.filter(post => employee.id !== id));
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
                <div className="line">

                </div>
                <p>{employee.birth_date} </p>
                <p>{employee.gender} </p>
                <p>{employee.email} </p>
                <p>{employee.cpf} </p>
                <p>{employee.start_date} </p>
                <p>{employee.team} </p>

                <div className="btns">

                  <div className="btn-edit-employee">
                    <Link to={{ pathname: `/EditEmployee/${employee}._id`}}>
                      <button>Edit</button>
                    </Link>
                  </div>

                  <div className="btn-see-employee">
                    <Link to="/SeeMore">
                      <button>See Employee</button>
                    </Link>
                  </div>

                  <div className="btn-delete-employee">
                    <Link to="/DeleteEmployee">
                      <button onClick={() => deleteEmployee(employee._id)}>Delete</button>
                    </Link>
                  </div>  
                </div>
              </div>

            )
          })}
          
        </div>
      </main>
    </div>

  )
}

export default Home;
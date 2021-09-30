import React, { useEffect } from "react";
import Header from "../../components/Header/Header";
import axios from 'axios';
import "../AddEmployee/AddEmployee.css";

import { useHistory, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";


function EditEmployee(){

  const { id } = useParams()

  let history = useHistory();

  useEffect(() => {
    axios.get(`https://crudcrud.com/api/249ddef60ecd4150aac87f02d2f1136b/nutemployee/${id}`)
    .then((response) => {
      reset(response.data);
    })
  },[])

  const addEmployee = data => axios.put(`https://crudcrud.com/api/249ddef60ecd4150aac87f02d2f1136b/nutemployee/${id}`, data).then(() => {
    console.log("Employee Added.")
    history.push("/")
  }).catch(() =>{
    console.log("ERROR")
  });

  const { register, handleSubmit, formState: { erros}, reset } = useForm();

  
  return (
    <div>
      <Header />
      <main> 
        <div className="card-add-employee">
          <h1> Add Employee </h1>
          <div className="line-post"></div>

          <div className="card-body-add">
            <form onSubmit={handleSubmit(addEmployee)}>

              <div className="fildes">
                <label>Name</label>
                <input type="text" name="name" {...register("name")}></input>
              </div>

              <div className="fildes">
                <label>Birth Date</label>
                <input type="date" name="birth-date" {...register("birth_date")} required></input>
              </div>

              <div className="fildes">
                <label>Gender</label>
                <select name="gender" {...register("gender")} required>
                  <option value="man-cis">Man Cis</option>
                  <option value="man-trans">Man Trans</option>
                  <option value="woman-cis" defaultValue> Woman Cis</option>
                  <option value="woman-trans" defaultValue> Woman Trans</option>
                  <option value="no-binary">No Binary</option>
                </select>
              </div>

              <div className="fildes">
                <label>E-mail</label>
                <input type="email" name="email" {...register("email")} required></input>
              </div>

              <div className="fildes">
                <label>CPF</label>
                <input type="text" name="cpf" {...register("cpf")} required></input>
              </div>

              <div className="fildes">
                <label>Start Date</label>
                <input type="date" name="start-date" {...register("start_date")} required></input>
              </div>

              <div className="fildes">
                <label>Team</label>
                <select name="team" {...register("team")} required>
                  <option value="data-mobile">Data Mobile</option>
                  <option value="frontend" defaultValue> Frontend</option>
                  <option value="valor3">Backend</option>
                </select>
              </div>

              <div className="btn-send-employee">
                <button type="Submit">ADD</button>
              </div>

            </form>
          </div>

        </div>
      </main>
    </div>
  )
}

export default EditEmployee;
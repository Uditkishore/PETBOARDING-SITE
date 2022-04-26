import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [state, setState] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://pet-bording-app.herokuapp.com/register", state)
      .then((res) => {
        alert("Registered successfully");
        navigate("/listing/login");
      });
  };
  return (
    <>
      <div className="border my-5 rounded bg-dark text-light  w-25 m-auto p-2 ">
        <form
          onSubmit={handleSubmit}
          className="d-flex flex-column justify-content-center align-items-center py-5"
        >
          <div className="form-row">
            <div className="form-group ">
              <label htmlFor="inputCapacity">Name</label>
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                id="name"
                placeholder="Enter name"
              />
            </div>
            <br />
            <div className="form-group ">
              <label htmlFor="inputEmail">Email</label>
              <input
                onChange={handleChange}
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
              />
            </div>
            <br />
            <div className="form-group ">
              <label htmlFor="inputPassword">Password</label>
              <input
                onChange={handleChange}
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
              />
            </div>
          </div>

          <br />
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    </>
  );
};

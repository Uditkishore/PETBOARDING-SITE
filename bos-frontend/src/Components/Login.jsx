import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setToken } from "../Redux/action";

// petbording-app.herokuapp.com/

export const Login = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://pet-bording-app.herokuapp.com/login", state)
      .then((res) => {
        dispatch(setToken(res.data));
        alert("Login Successful");
        navigate("/");
      })
      .catch((err) => alert("Incorrect Username and Password"));
  };

  return (
    <div className="border my-5 rounded bg-dark text-light  w-25 m-auto py-5 ">
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center py-5"
      >
        <div className="form-row">
          <div className="form-group ">
            <label htmlFor="inputCapacity">Email</label>
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
            <label htmlFor="inputCapacity">Password</label>
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
        <div className="d-flex gap-4 justify-content-center align-items-center ">
          <input type="submit" className="btn btn-primary" value="Submit" />
          <div className="vr"></div>
          <button
            onClick={() => navigate("/listing/signup")}
            className="btn btn-primary"
            value="Signup"
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
};

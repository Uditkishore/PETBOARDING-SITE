import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useSelector, useDispatch } from "react-redux";
import { removeToken, setActionData } from "../Redux/action";
import axios from "axios";
export const Nav = () => {
  const [data, setSearch] = useState();
  const [sorted, setSorted] = useState();
  const username = useSelector((e) => e.setTokenData);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const sorting = (e) => {
    const { value } = e.target;
    if (value == "Popular") {
      axios.get(`https://pet-bording-app.herokuapp.com/listing`).then((res) => {
        dispatch(setActionData(res.data));
      });
    } else if (value == "cost") {
      axios.get(`https://pet-bording-app.herokuapp.com/listing`).then((res) => {
        let data = res.data;
        let cost = data.sort((a, b) => a.Cost - b.Cost);
        dispatch(setActionData(cost));
      });
    } else if (value == "rating") {
      axios.get(`https://pet-bording-app.herokuapp.com/listing`).then((res) => {
        let data = res.data;
        let rating = data.sort((a, b) => b.Rating - a.Rating);
        dispatch(setActionData(rating));
      });
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://pet-bording-app.herokuapp.com/listing/search/${data}`)
      .then((res) => {
        dispatch(setActionData(res.data));
        console.log(res.data);
      });
  };

  const navigate = useNavigate();

  return (
    <div>
      {username.user ? (
        <>
          <nav className="navbar  px-5 py-3 bg-dark justify-content-between">
            <Link to={"/"} className="navbar-brand text-light">
              Wiggle-Bubble
            </Link>
            <form className="form-inline d-flex gap-2 ">
              <input
                onChange={handleChange}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                onClick={handleSearch}
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <Form.Select onChange={sorting} className=" w-25">
              <option className="text-center">Sort By...</option>
              <option value={"Popular"}>Popular</option>
              <option value={"cost"}>cost per day</option>
              <option value={"rating"}>rating</option>
            </Form.Select>

            <button
              onClick={() => navigate("/listing/create")}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Add data
            </button>
            <Link to={"/"} className="navbar-brand text-light">
              {username.user}
            </Link>
            <button
              onClick={() => dispatch(removeToken())}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Logout
            </button>
          </nav>
        </>
      ) : (
        <>
          <nav className="navbar  px-5 py-3 bg-dark justify-content-between">
            <Link to={"/"} className="navbar-brand text-light">
              Wiggle-Bubble
            </Link>
            <form className="form-inline d-flex gap-2 ">
              <input
                onChange={handleChange}
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                onClick={handleSearch}
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
            <Form.Select onChange={sorting} className=" w-25">
              <option className="text-center">Sort By...</option>
              <option value={"Popular"}>Popular</option>
              <option value={"cost"}>cost per day</option>
              <option value={"rating"}>rating</option>
            </Form.Select>

            <button
              onClick={() => navigate("/listing/login")}
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Login
            </button>
          </nav>
        </>
      )}
    </div>
  );
};
//

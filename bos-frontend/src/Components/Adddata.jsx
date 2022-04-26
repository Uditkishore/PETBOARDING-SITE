import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export const AddData = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    const { id, value } = e.target;
    setState({ ...state, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://pet-bording-app.herokuapp.com/listing/create", state)
      .then((res) => {
        alert("Item Added successfully");
      });
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="d-flex flex-column justify-content-center align-items-center py-5"
      >
        <div className="form-row">
          <div className="form-group ">
            <label htmlFor="inputCapacity">Name</label>
            <select onChange={handleChange} id="Name" className="form-control">
              <option>Choose...</option>
              <option value={"Dog"}>Dog</option>
              <option value={"Cat"}>Cats</option>
              <option value={"Rabit"}>Rabbits</option>
            </select>
          </div>
          <div className="form-group ">
            <label htmlFor="inputCity">City</label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="City"
            />
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Address</label>
            <input
              onChange={handleChange}
              type="text"
              className="form-control"
              id="Address"
              placeholder="1234 Main St"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="inputCapacity">Capacity</label>
            <select
              onChange={handleChange}
              id="Capacity"
              className="form-control"
            >
              <option>Choose...</option>
              <option value={"1-5"}>1-5 kg</option>
              <option value={"5-10"}>5-10 kg</option>
              <option value={"10-20"}>10-20 kg</option>
              <option value={"20-40"}>20-40 kg</option>
            </select>
          </div>
          <div className="form-group ">
            <label htmlFor="inputCapacity">Cost</label>
            <input
              onChange={handleChange}
              type="number"
              className="form-control"
              id="Cost"
              placeholder="Cost"
            />
          </div>
          <div className="form-group ">
            <label htmlFor="Verified">Verified</label>
            <select
              onChange={handleChange}
              id="Verified"
              className="form-control"
            >
              <option>Choose...</option>
              <option value={"true"}>true</option>
              <option vlaue={"flase"}>false</option>
            </select>
          </div>
        </div>
        <div className="form-group ">
          <label htmlFor="inputZip">Rating</label>
          <select onChange={handleChange} id="Rating" className="form-control">
            <option>Choose...</option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
          </select>
        </div>
        <br />
        <input type="submit" className="btn btn-primary" />
      </form>
    </>
  );
};

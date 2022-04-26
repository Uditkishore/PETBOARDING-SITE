import React, { useEffect, useState, useNavigate } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setActionData } from "../Redux/action";
import { HomeTable } from "./HomeTable";

// petbording-app.herokuapp.com/

export const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    getdata();
  }, []);
  const getdata = () => {
    axios.get("https://pet-bording-app.herokuapp.com/listing").then((res) => {
      dispatch(setActionData(res.data));
    });
  };

  return (
    <>
      <table className="table table-hover mb-5">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Name</th>
            <th scope="col">City</th>
            <th scope="col">Address</th>
            <th scope="col">Capacity</th>
            <th scope="col">Cost Per Day</th>
            <th scope="col">Verified</th>
            <th scope="col">Rating</th>
          </tr>
        </thead>
        <tbody>
          <HomeTable />
        </tbody>
      </table>
    </>
  );
};

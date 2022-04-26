import axios from "axios";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedProduct, removeSelected } from "../Redux/action";

import { useParams } from "react-router";

export const Details = () => {
  const dispatch = useDispatch();
  const data = useSelector((e) => e.setSelectedData);
  const { id } = useParams();
  useEffect(() => {
    getData();
    return () => {
      dispatch(removeSelected());
    };
  }, [dispatch]);

  const getData = () => {
    axios
      .get(`https://pet-bording-app.herokuapp.com/listing/${id}`)
      .then((res) => {
        dispatch(setSelectedProduct(res.data));
      });
  };
  return (
    <div>
      {data.Name ? (
        <>
          <div className=" d-flex m-5 p-5 align-items-center">
            <img
              className="card-img-top w-50"
              src="http://via.placeholder.com/640x360"
              alt="Card image cap"
            />
            <div className="card-body">
              <p className="card-text">Price : {data.Cost}</p>
              <h5 className="card-title">Name : {data.Name}</h5>
              <p className="card-text">City : {data.City}</p>
              <p className="card-text">Address : {data.Address}</p>
              <p className="card-text">Capacity :{data.Capacity}</p>
              <p className="card-text">Rating : {data.Rating}</p>
              <p className="card-text">Verified : {data.Verified}</p>
            </div>
          </div>
        </>
      ) : (
        <h1>Loding...</h1>
      )}
    </div>
  );
};

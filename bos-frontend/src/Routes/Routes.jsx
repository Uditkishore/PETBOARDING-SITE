import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddData } from "../Components/Adddata";
import { Details } from "../Components/Deatilspage";
import { Home } from "../Components/Home";
import { Login } from "../Components/Login";

import { Nav } from "../Components/Navbar";
import { Signup } from "../Components/Signup";

export const Router = () => {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listing/login" element={<Login />} />
        <Route path="/listing/signup" element={<Signup />} />
        <Route path="/listing/:id" element={<Details />} />
        <Route path="/listing/create" element={<AddData />} />
      </Routes>
    </>
  );
};

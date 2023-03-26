 
import React from "react";
import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from "react-router-dom";
import ErrorPage from "../error-page";
import About from "../pages/about";
import Home from "../pages/home";
 
import Root from "./root";

 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
 
    </Route>
  )
);
export default router;



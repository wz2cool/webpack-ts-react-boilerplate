import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
} from "react-router-dom";
import ErrorPage from "../error-page";
import About from "../pages/about";
import Home from "../pages/home";

import Root from "./root";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} errorElement={<ErrorPage />}>
      <Route path="home" element={<Home />} errorElement={<ErrorPage />} />
      <Route path="about" element={<About />} errorElement={<ErrorPage />} />
    </Route>
  )
);
export default router;

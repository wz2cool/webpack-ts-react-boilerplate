import React from "react";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
     <nav>
          <ul>
            <li>
              <a href={`/home`}>Home</a>
            </li>
            <li>
              <a href={`/about`}>About</a>
            </li>
          </ul>
        </nav>
      <Outlet />
    </>
  );
}

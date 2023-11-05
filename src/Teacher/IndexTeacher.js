import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home.js";
import NavTeacher from "./NavTeacher";
import ProfileTeacher from "./ProfileTeacher.jsx";
import ResultTeacher from "./ResultTeacher.jsx";

const IndexTeacher = ()=>{

const router = createBrowserRouter([
      {
        path: "/",
        element: <NavTeacher />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
          {
            path: "home",
            element: <Home />,
          },
          {
            path: "tprofile",
            element: <ProfileTeacher />,
          },
          {
            path: "tresult",
            element: <ResultTeacher />,
          },
          
         
        ],
      },
    ]);
    return (
      <div>
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </div>
    );
}
export default IndexTeacher;
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home.js";
import NavStudent from "./NavStudent";
import ProfileStudent from "./ProfileStudent.jsx";
import ResultStudent  from "./ResultStudent.jsx";

const IndexStudent = ()=>{

const router = createBrowserRouter([
      {
        path: "/",
        element: <NavStudent />,
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
            path: "sprofile",
            element: <ProfileStudent/>
          },
          {
            path: "sresult",
            element: <ResultStudent/>
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
export default IndexStudent;
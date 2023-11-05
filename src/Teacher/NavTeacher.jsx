import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";




const NavTeacher = () => {
  const logout = () => {
    console.log("hii");
    axios
      .post("http://localhost/20it0534/backend/logout.php")
      .then(function (response) {
        console.log(response.data);
        if (response.data === "fine") {
          document.cookie = "";
          localStorage.clear();
          window.location = "http://localhost:3000/";
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand text-light" style={{ fontSize: "30px" }}>STUDENT-MS - Teacher</span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              
            </ul>
            
            <div>
              <Link className='btn btn-light btn-outline-danger' to="/home">Home</Link>
              <Link className='btn btn-light btn-outline-danger' style={{ marginLeft: "10px" }} to="/tresult">View Result</Link>
              <Link className='btn btn-light btn-outline-danger' style={{ marginLeft: "10px" }} to="/tprofile">Profile</Link>
              <button onClick={()=>logout()} className='btn btn-light btn-outline-danger' style={{ marginLeft: "10px"}} >Logout</button>

            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default NavTeacher;

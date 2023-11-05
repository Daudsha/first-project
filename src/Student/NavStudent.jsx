import * as React from "react";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";


const NavStudent = () => {
  const logout = () => {
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
          <img src="https://thewestfieldnews.com/wp-content/uploads/2021/04/BOOK.png" className="rounded-circle"
            style={{ marginRight: "10px" }} height="40" width="40" alt="Avatar" loading="lazy" />
          <span className="navbar-brand text-light" style={{ fontSize: "30px" }}>STUDENT-MS </span>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

            </ul>

            <div>
              <span style={{ fontSize: "20px" }} className="text-light">Welcome {localStorage.getItem('Name')}!</span>
              <img src="http://brajrajnagarcollege.ac.in/wp-content/uploads/2017/09/profile-250x210.jpg" className="rounded-circle"
                style={{ marginLeft: "10px" }} height="35" width="35" alt="Avatar" loading="lazy" />

              <Link className='btn btn-light btn-outline-danger' style={{ marginLeft: "10px" }} to="/home">Home</Link>
              <Link className='btn btn-light btn-outline-danger' style={{ marginLeft: "10px" }} to="/sresult">Result</Link>
              <Link className='btn btn-light btn-outline-danger' style={{ marginLeft: "10px" }} to="/sprofile">Profile</Link>
              <button onClick={() => logout()} className='btn btn-light btn-outline-danger' style={{ marginLeft: "10px" }} >Logout</button>


            </div>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  );
};
export default NavStudent;

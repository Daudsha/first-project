import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Navigate() {
    return (
        <div>
            {/* <nav className="navbar" style={{backgroundColor: "#e3f2fd"}}>

            </nav> */}
            <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <img src="https://thewestfieldnews.com/wp-content/uploads/2021/04/BOOK.png" className="rounded-circle"
                       style={{marginRight:"10px"}} height="40" width="40" alt="Avatar" loading="lazy" />
                    <span className="navbar-brand text-light" style={{ fontSize: "30px" }}>STUDENT MANAGEMENT SYSTEM</span>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                        </ul>

                        <div>
                            <Link className='btn btn-light btn-outline-danger' to="/home">Home</Link>
                            <Link className='btn btn-light btn-outline-danger' style={{ marginLeft: "10px" }} to="/register">Register</Link>
                            <Link className='btn btn-light btn-outline-danger' style={{ marginLeft: "10px" }} to="/login">Login</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </div>
    );
}

export default Navigate;
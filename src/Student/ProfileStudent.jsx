import { React, useState, useEffect } from "react";
import axios from "axios";
import sha from "../sha.jpg"

const ProfileStudent = () => {
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        axios
            .post("http://localhost/20it0534/backend/getprofile.php", {
                role: localStorage.getItem("Role"),
                nic: localStorage.getItem("Nic"),
            })
            .then(function (response) {
                // console.log(response.data);
                setDetail(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, []);
    return (
        <div>
            <section style={{backgroundColor: "#eee"}}>
                <div className="container py-5">
                    

                    <div className="row">
                        <div className="col-lg-4">
                            <div className="card mb-4">
                                <div className="card-body text-center">
                                    <img src={sha} alt="avatar"
                                        className="rounded-circle img-fluid" style={{width: "150px",height:"160px"}} />
                                    <h5 className="my-3">{detail.fname } {detail.lname}</h5>
                                    <p className="text-muted mb-1">{detail.role}</p>
                                    <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                    <div className="d-flex justify-content-center mb-2">
                                        <a  href="https://www.facebook.com/profile.php?id=100007692706087" className="btn btn-primary">Follow</a>
                                        <a href="https://wa.link/neooe1" className="btn btn-outline-primary ms-1">Message</a>
                                    </div>
                                </div>
                            </div>
                           
                        </div>
                        <div className="col-lg-8">
                            <div className="card mb-4">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">First Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{detail.fname}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Last Name</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{detail.lname}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Email</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{detail.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Phone</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{detail.mobile}</p>
                                        </div>
                                    </div>
                                    
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">NIC</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{detail.nic}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="row">
                                        <div className="col-sm-3">
                                            <p className="mb-0">Student Id</p>
                                        </div>
                                        <div className="col-sm-9">
                                            <p className="text-muted mb-0">{detail.stuid}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProfileStudent;

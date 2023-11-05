import axios from "axios";
import { useFormInputValidation } from "react-form-input-validation";
import swal from 'sweetalert';

// import { Navigate } from "react-router-dom";

const Registration = () => {
  const tea = () => {
    document.getElementById('st').style.display = 'none';
    fields.stuid = "";
  };
  const std = () => {
    document.getElementById('st').style.display = 'block';
  };
  const [fields, errors, form] = useFormInputValidation(
    {
      stuid: "",
      fname: "",
      lname: "",
      nic: "",
      email: "",
      role: "",
      mobile: "",
      pswd: "",
    },
    {
      stuid: "between:3,10",
      fname: "required",
      lname: "required",
      nic: "required|between:10,13",
      email: "required|email",
      role: "required",
      mobile: "required|numeric|digits_between:9,12",
      pswd: "required|between:6,15",
    }
  );

  const onSub = async (event) => {
    const isvalid = await form.validate(event);
    if (isvalid) {
      try {
        await axios
          .post("http://localhost/20it0534/backend/register.php", {
            stuid: fields.stuid,
            fname: fields.fname,
            lname: fields.lname,
            nic: fields.nic,
            email: fields.email,
            role: fields.role,
            mobile: fields.mobile,
            password: fields.pswd,
          })
          .then(function (response) {
            // console.log(response.data);
            if (response.data === "success") {
              popup();
            } else {
              popuperror();
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } catch (error) {
        console.error(error);
      }
    }
  };
  const popup = () => {
    swal("Success!", "Successfully logged in!", "success");
    setTimeout(() => {
      window.location = "http://localhost:3000/login";
    }, 2000);
  };

  const popuperror = () => {
    swal("Oops!", "InCorrect User credintials!", "error");
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(135deg, #AC8A82 70%, #484f52 100%)",
    }}
    >
      {/* {localStorage.getItem("Role") && <Navigate to="/st" replace={true} />} */}
      <section className="bg-image">
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 ">
                <div
                  className="card m-5 border border-white"
                  style={{
                    borderRadius: "35px",
                    backgroundImage:
                    "linear-gradient(135deg, #444b4e 50%, #484f52 100%)",
                }}
                >
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center text-light">
                      <b>Registration</b>
                    </h2>
                    <form
                      className="form-control border-0 text-light"
                      name="regForm"
                      id="regForm"
                      onSubmit={onSub}
                      style={{
                        backgroundImage:
                        "linear-gradient(135deg, #444b4e 50%, #484f52 100%)",
                    }}
                    >
                      <div className="mb-2">
                        <input
                        onClick={std}
                          type="radio"
                          className="form-check-input"
                          id="role"
                          name="role"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value="student"
                        />
                        <label style={{ marginLeft: "10px" }}>Student</label>

                        <input
                        onClick={tea}
                          type="radio"
                          className="form-check-input"
                          id="role2"
                          name="role"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value="teacher"
                          style={{ marginLeft: "30px" }}
                        />
                        <label style={{ marginLeft: "10px" }}>Teacher</label>
                        <br />

                        <label className="error mb-3" style={{ color: "red" }}>
                          {errors.role ? errors.role : ""}
                        </label>
                      </div>
                      <div id="st" className="col-auto mb-2" style={{display:"block"}}>
                        <label>Student Id</label>
                        <input
                          type="text"
                          className="form-control"
                          id="stuid"
                          name="stuid"
                          placeholder="Enter your Student Id"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.stuid}
                        />
                        <label className="error" style={{ color: "red" }}>
                          {errors.stuid ? errors.stuid : ""}
                        </label>
                      </div>

                      <div className="col-auto mb-2">
                        <label>First name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fname"
                          name="fname"
                          placeholder="Enter Your First Name"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.fname}
                        />
                        <label className="error" style={{ color: "red" }}>
                          {errors.fname ? errors.fname : ""}
                        </label>
                      </div>

                      <div className="col-auto mb-2">
                        <label>Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="lname"
                          name="lname"
                          placeholder="Enter Your Last Name"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.lname}
                        />
                        <label className="error" style={{ color: "red" }}>
                          {errors.lname ? errors.lname : ""}
                        </label>
                      </div>

                      <div className="col-auto mb-2">
                        <label>NIC</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nic"
                          name="nic"
                          placeholder="Enter Your NIC Card Number or Passport Number"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.nic}
                        />
                        <label className="error" style={{ color: "red" }}>
                          {errors.nic ? errors.nic : ""}
                        </label>
                      </div>

                      <div className="col-auto mb-2">
                        <label>Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="email@example.com"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.email}
                        />
                        <label className="error" style={{ color: "red" }}>
                          {errors.email ? errors.email : ""}
                        </label>
                      </div>

                      <div className="col-auto mb-2">
                        <label>Mobile</label>
                        <input
                          type="text"
                          className="form-control"
                          id="mobile"
                          name="mobile"
                          placeholder="Enter your Mobile Number"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.mobile}
                        />
                        <label className="error" style={{ color: "red" }}>
                          {errors.mobile ? errors.mobile : ""}
                        </label>
                      </div>

                      <div className="col-auto mb-4">
                        <label>Enter Password</label>
                        <input
                          type="password"
                          className="form-control"
                          id="pswd"
                          name="pswd"
                          placeholder="Password"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.pswd}
                        />
                        <label className="error" style={{ color: "red" }}>
                          {errors.pswd ? errors.pswd : ""}
                        </label>
                      </div>
                      <div className="col-auto text-center">
                        <button type="submit" className="btn btn-primary mb-3">
                          Register
                        </button>
                      </div>
                    </form>
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
export default Registration;

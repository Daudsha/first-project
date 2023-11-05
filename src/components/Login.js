import axios from "axios";
import { useFormInputValidation } from "react-form-input-validation";
import swal from 'sweetalert';

const Login = () => {
  const [fields, errors, form] = useFormInputValidation(
    {
      role: "",
      nic: "",
      pswd: "",
    },
    {
      role: "required",
      nic: "required|between:10,13",
      pswd: "required|between:6,15",
    }
  );

  const onSub = async (event) => {
    const isvalid = await form.validate(event);
    if (isvalid) {
      try {
        await axios
          .post("http://localhost/20it0534/backend/login.php", {
            role: fields.role,
            nic: fields.nic,
            password: fields.pswd,
          })
          .then(function (response) {
            if (response.data) {
              if (response.data.role === "student") {
                popupStudent(response.data);
              } else if (response.data.role === "teacher") {
                popupTeacher(response.data);
              } else {
                popuperror();
              }
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
  const popupStudent = (x) => {
    localStorage.setItem("Role", x.role);
    localStorage.setItem("Name", x.fname);
    localStorage.setItem("Nic", x.nic);
    localStorage.setItem("Reg", x.stuid);


    // setting cookie for student
    const d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = "userCookie=" + x.nic + x.role + ";" + expires + ";path=/";

    swal("Success!", "Successfully logged in!", "success");
    setTimeout(() => {
      window.location = "http://localhost:3000/";
    }, 2000);
  };
  const popupTeacher = (x) => {
    localStorage.setItem("Role", x.role);
    localStorage.setItem("Name", x.fname);
    localStorage.setItem("Nic", x.nic);

    // setting cookie for teacher
    const d = new Date();
    d.setTime(d.getTime() + 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = "userCookie=" + x.nic + x.role + ";" + expires + ";path=/";

    swal("Success!", "Successfully logged in!", "success");
    setTimeout(() => {
      window.location = "http://localhost:3000/";
    }, 2000);
  };
  const popuperror = () => {
    swal("Oops!", "InCorrect User credintials!", "error");
  };

  return (
    <div style={{
      backgroundImage: "linear-gradient(135deg, #AC8A82 70%, #484f52 100%)", 
    }}>
      {/* {localStorage.getItem("Role") && <Navigate to="/st" replace={true} />} */}
      <section >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3 container h-100">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6 p-5" style={{marginBottom:"500px"}}>
                <div
                  className="card m-5 border border-white"
                  style={{
                    borderRadius: "35px",
                    backgroundImage:
                      "linear-gradient(135deg, #444b4e 50%, #484f52 100%)",
                    marginBottom:"500px",
                    width:"500px"
                    }}
                >
                  <div className="card-body p-5">
                    <h3 className="text-uppercase text-center text-light">
                      <b>Login</b>
                    </h3>
                    <form
                      className="p-5 form-control border-0 text-light"
                      name="loginForm"
                      id="loginForm"
                      onSubmit={onSub}
                      style={{
                        backgroundImage:
                          "linear-gradient(135deg, #444b4e 50%, #6e7b81 100%)",
                      }}
                    >
                      <div className="mb-2">
                        <input
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

                      <div className="col-auto mb-2">
                        <label>NIC</label>
                        <input
                          type="text"
                          className="form-control"
                          id="nic"
                          name="nic"
                          placeholder="Enter Your NIC or Passport number"
                          onBlur={form.handleBlurEvent}
                          onChange={form.handleChangeEvent}
                          value={fields.nic}
                        />
                        <label className="error" style={{ color: "red" }}>
                          {errors.nic ? errors.nic : ""}
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
                          LOGIN
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <ToastContainer /> */}
      </section>
    </div>
  );
};
export default Login;

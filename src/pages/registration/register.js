import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./register.css";
const Register = () => {
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setError] = useState({
    fName: "",
    lName: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeInput = (evt) => {
    if (evt.target.name == "fName") {
      setUser({
        ...user,
        fName: evt.target.value,
      });
      setError({
        ...errors,
        fName: evt.target.value.length == 0 ? "fName is required" : "",
      });
    }
    if (evt.target.name == "lName") {
      setUser({
        ...user,
        lName: evt.target.value,
      });
      setError({
        ...errors,
        lName: evt.target.value.length == 0 ? "lName is required" : "",
      });
    }
    if (evt.target.name == "Email") {
      const regEmail = /^[a-zA-Z0-9+_.-]*@[a-zA-Z]+(.com|.org)$/;
      if (regEmail.test(evt.target.value)) {
        setUser({ ...user, email: evt.target.value });
        setError({
          ...errors,
          emailErr: "",
        });
      }
      setError({
        ...errors,
        emailErr:
          evt.target.value.length == 0
            ? "this field is required  "
            : !regEmail.test(evt.target.value)
            ? "Email must be vaild like this 'example123@aaa(.com or.org)'"
            : "",
      });
    }
    if(evt.target.name=="userName"){
      const regUserName=/^[A-Za-z0-9]*$/
      if(regUserName.test(evt.target.value)){
        setUser({
          ...user,
          userName:evt.target.value
        })
        setError({
          ...errors,
          userName:""
        })
      }
      setError({
        ...errors,
        userName:(evt.target.value.length==0)?
        "this field is required":
        (!regUserName.test(evt.target.value))?
        "UserName must be containe no space"
        :""
      })
    }

    if (evt.target.name == "Password") {
      const regPassword = /^[a-zA-Z0-9+_.-]{8}$/;
      if (regPassword.test(evt.target.value)) {
        setUser({ ...user, password: evt.target.value });
        setError({
          ...errors,
          passwordErr: "",
        });
      }
      setError({
        ...errors,
        passwordErr:
          evt.target.value.length == 0
            ? "this field is required"
            : !regPassword.test(evt.target.value)
            ? "Password must be 8 character containe at least one [uppercase, lowercase, digit and special character]"
            : "",
      });
    }
    if (evt.target.name == "confirmPassword") {
      const regPassword = /^[a-zA-Z0-9+_.-]{8}$/;
      console.log(user.password);
      if (regPassword.test(evt.target.value)&& user.password===evt.target.value) {
        setUser({ ...user, confirmPassword: evt.target.value });
        setError({
          ...errors,
          confirmPassword: "",
        });
      }
      setError({
        ...errors,
        confirmPassword:
          evt.target.value.length == 0
            ? "this field is required"
            : !regPassword.test(evt.target.value)
            ? "Password must be 8 character containe at least one [uppercase, lowercase, digit and special character]"
            :(!(user.password===evt.target.value)) ?"must be equal password"
            :""
      });
    }
  };

  return (
    <>
      <section className="container-fluid row justify-content-between mt-3">
        <div className="col-3"></div>
        <div className="col-6">
          <h2 className="text-center">CREATE ACCOUNT</h2>

          <form className=" p-4 ">
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" class="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="fName"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
              <small>{errors.fName}</small>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" class="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="lName"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
              <small>{errors.lName}</small>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
                name="Email"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
              <small>{errors.emailErr}</small>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" class="form-label">
                UserName
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                name="userName"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
              <small>{errors.userName}</small>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" class="form-label">
                Password
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                type="password"
                name="Password"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
              <small>{errors.passwordErr}</small>
            </div>

            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" class="form-label">
               Confirm Password
              </label>
              <input
                className="form-control"
                id="exampleFormControlTextarea1"
                type="password"
                name="confirmPassword"
                onChange={(e) => {
                  handleChangeInput(e);
                }}
              />
              <small>{errors.confirmPassword}</small>
            </div>
            
            <div className="d-flex justify-content-between">
              <Button
                type="submit"
                id="submitBtn"
                className="btn text-light"
                size="lg"
              >
                Submit
              </Button>
              <Button
                type="submit"
                id="mainBtn"
                className="btn text-light"
                size="lg"
              >
                RETURN TO STORE
              </Button>
            </div>
          </form>
        </div>
        <div className="col-3"></div>
      </section>
    </>
  );
};

export default Register;

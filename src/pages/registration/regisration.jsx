import React, { useState } from "react";

const Regisration = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    emailErr: "",
    passwordErr: "",
  });
  const handleChangeInput = (evt) => {
    const regEmail = /^[a-zA-Z0-9+_.-]*@[a-zA-Z]+(.com|.org)$/;
    const regPassword = /^[a-zA-Z0-9+_.-]{8}/;

    if (evt.target.name == "Email") {
      if (evt.target.value.length == 0) {
        setError({
          ...error,
          emailErr: "this field is required  ",
        });
      } else if (regEmail.test(evt.target.value)) {
        setUser({ ...user, email: evt.target.value });
        setError({
          ...error,
          emailErr: "",
        });
      } else {
        setError({
          ...error,
          emailErr:
            "Email must be vaild like this 'example123@aaa(.com or.org)'",
        });
      }
    }

    if (evt.target.name == "Password") {
        if (evt.target.value.length == 0) {
            setError({
              ...error,
              passwordErr: "this field is required  ",
            });
          } else if (regPassword.test(evt.target.value)) {
            setUser({ ...user, password: evt.target.value });
            setError({
              ...error,
              passwordErr: "",
            });
          } else {
            setError({
              ...error,
              passwordErr:
                "Password must be 8 character containe at least one [uppercase, lowercase, digit and special character]"
            });
          }
      setUser({ ...user, password: evt.target.value });
    }
  };
 
  return (
    <>
      <form>
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
          <small>{error.emailErr}</small>
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
           <small>{error.passwordErr}</small>
        </div>
      </form>
    </>
  );
};

export default Regisration;

import { useState } from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { InputText } from 'primereact/inputtext';
import "./login.css";

const Login = (Props) => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate("/register");
  };

  const ResetPassword = () => {
   navigate("/resetPassword");
  };

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setError] = useState({
    emailErr: "",
    passwordErr: "",
  });
  let [passType,setPassType]=useState("password")
  const showPassword=()=>{
   
    (passType==="password")?setPassType("text"):setPassType("password")
   
  }
  const handleChangeInput = (evt) => {
    const regEmail = /^[a-zA-Z0-9+_.-]*@[a-zA-Z]+(.com|.org)$/;
    const regPassword = /^[a-zA-Z0-9+_.-]{8}/;

    if (evt.target.name == "Email") {
      if (evt.target.value.length === 0) {
        setError({
          ...errors,
          emailErr: "this field is required  ",
        });
      } else if (regEmail.test(evt.target.value)) {
        setUser({ ...user, email: evt.target.value });
        setError({
          ...errors,
          emailErr: "",
        });
      } else {
        setError({
          ...errors,
          emailErr:
            "Email must be vaild like this 'example123@aaa(.com or.org)'",
        });
      }
    }

    if (evt.target.name === "Password") {

  if (regPassword.test(evt.target.value))
      {
        setUser({ ...user, password: evt.target.value })
        setError({
                ...errors,
                passwordErr: "",
              })
            }else{
              setError({
                ...errors,
                passwordErr:
                (evt.target.value.length === 0)?"this field is required  ":
                "Password must be 8 character containe at least one [uppercase, lowercase, digit and special character]"
              })      
            } 
    }
  };
 
  const Err=errors.emailErr===""&&errors.passwordErr===""
  const handleSumbit=(evt)=>{
    evt.preventDefault();
        }
 
  return (
    <>
      <section className="container mt-3">
        <h1 className="text-center">LOGIN</h1>
        <div className="row">
          <div className="col-6 p-">
            <form onSubmit={(e)=>{handleSumbit(e)}}>
              <div class="mb-3">
                <label htmlFor="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  // value={user.email}
                  onChange={(e)=>{handleChangeInput(e)}}
                  name="Email"
                />
                <small>{errors.emailErr}</small>
              </div>
              <div class="mb-3">
               
                
                <h5 htmlFor="exampleInputPassword1">Password</h5>
                <span className="p-input-icon-right">
                <i class="far fa-eye" onClick={showPassword}></i>
                    <InputText  type={passType}   id="exampleInputPassword1"
                    name="Password" onChange={(e) => handleChangeInput(e)} />
                </span>                
                <small>{errors.passwordErr}</small>
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  required
                />

                <label class="form-check-label" htmlFor="exampleCheck1">
                  Check me out
                </label>
              </div>
  
              <button type="submit" class="btn btn-primary" disabled={(Err)?false:true}>
               
                Submit
              </button>
            </form>
            {/* <Form>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  onChange={(e) => handleInputChange(e)}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.emailErr}
                </Form.Control.Feedback>
                <small className="text-danger">{errors.emailErr}</small>
              </Form.Group>

              <Form.Group className="mb-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  onChange={(e) => handleInputChange(e)}
                />
                <Form.Control.Feedback type="invalid">
                {errors.passwordErr}
                </Form.Control.Feedback>
                <small className="text-danger">{errors.passwordErr}</small>
              </Form.Group>

              <div className="d-flex justify-content-between">
                <Button
                  type="submit"
                  id="login"
                  className="btn text-light"
                  size="lg"
                >
                  Login
                </Button>
                <a
                  className="pt-2"
                  onClick={() => {
                    ResetPassword();
                  }}
                  href="#"
                >
                  <h6>Forgot your password ?</h6>
                </a>
              </div>
            </Form> */}
          </div>
          <div className="col-6 text-center mt-5">
            <h3>New Customer ?</h3>
            <Button
              onClick={() => {
                goToRegister();
              }}
              type="submit"
              id="submitBtn"
              className="btn text-light mt-2"
              size="lg"
            >
              CREATE AN ACCOUNT
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;

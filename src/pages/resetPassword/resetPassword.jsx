import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import {useNavigate} from "react-router-dom";

const ResetPassword = () => {

  const navigate = useNavigate();
  const backToLogin=()=>{
     navigate("/login")
  }  
  return (
    <>
      <section className="container mt-3">
          <h2 className="text-center">RESET PASSWORD</h2>
        <div className="col-6">
        <p className="text-dark">We will send you email to reset your password</p>
        <Form.Group className="mb-3" >
          <Form.Control type="email" placeholder="Email Address" />
        </Form.Group>
        <div className="d-flex justify-content-start ">
          <Button type="submit" id="mainBtn" className="btn text-light m-2" size="lg">RESET </Button>
          <Button onClick={()=>{backToLogin()}} type="submit" id="mainBtn" className="btn text-light m-2" size="lg"> CANCEL </Button>
        </div>
        </div>
       
      </section>
    </>
  );
};

export default ResetPassword;

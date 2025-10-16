import React from "react";
import { useForm } from "react-hook-form";

const Loginwithracthookform = () => {
  const { register, handleSubmit ,formState: { errors }} = useForm();
  const handleRegistration=()=>{

  }
  
  return (
    <div>
      <form onSubmit={handleSubmit(handleRegistration)}>
     
        <div>
          <label>Email</label>
          <input type="email" name="email" {...register("email",
          { required: "email is required"})} />
          {console.log(errors.email)}
                    <p>{errors?.email&&errors.email.message}</p>
        </div>
        <div>
        <label>Password</label>
        <input type="password" name="password" {...register('password', {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must have at least 8 characters"
            }
          })} />
          {console.log(errors.password)}
          <p>{errors.password&&errors.password.message}</p>
      </div>
      <button>Submit</button>
      </form>
    </div>
  );
};

export default Loginwithracthookform;

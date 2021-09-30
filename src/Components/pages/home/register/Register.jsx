import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "./register.css";
import { registerUser } from "./../../../services/userService";

const Register = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reset = () => {
    setFullname("");
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user = {
      fullname,
      email,
      password,
    };
    try {
      const { status } = await registerUser(user);

      if (status === 201) {
        toast.success("Nice User Createde!", {
          position: "top-center",
        });
        reset();
      }
    } catch (ex) {
      toast.error("Misson Failed , try next time!", {
        position: "top-center",
      });
      console.log(ex);
    }

    console.log(user);
  };

  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>User Name</label>
        <input
          className="registerInput"
          type="text"
          placeholder="Enter your Name..."
          value={fullname}
          onChange={(e) => setFullname(e.target.value)}
        />
        <label>Email</label>
        <input
          className="registerInput"
          type="email"
          placeholder="Enter your email..."
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          className="registerInput"
          type="password"
          placeholder="Enter your password..."
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton">Register</button>
      </form>
      <Link to="/login">
        <button className="registerLoginButton">Login</button>
      </Link>
      <ToastContainer />
    </div>
  );
};

export default Register;

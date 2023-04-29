import React, { useState,useMemo } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const baseURL = "https://videocall-ajjm.onrender.com";
  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  //setEmail('123@abc')
  const handleClick = async () => {

    const { email, password } = user;
    if (email && password) {
    await  axios.post(`${baseURL}/login`,user).then((res) => {
        //alert(res.data.msg);
        console.log(res.data.user);
        localStorage.setItem('videoChatLogin',JSON.stringify(res.data.user))
        navigate('/createroom')
      });
    } else {
      alert("invalid");
    }
  };
  return (
    <>
      <div className="basicForm">
        <span>
          <h1>Sign In</h1>
          <input
            placeholder="Email"
            name="email"
            type={"email"}
            value={user.email}
            onChange={handleChange}
          />
          <input
            placeholder="password"
            name="password"
            type={"password"}
            value={user.password}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Sign In</button>
        <span className="footerLogin">Don't have account? <Link to='/signup'>Sign Up</Link></span>
        </span>
      </div>
    </>
  );
};

export default SignIn;

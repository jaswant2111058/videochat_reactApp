import React, { useState,useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./CreateRoom.css";

const SignIn = () => {
  const navigate = useNavigate()

  const [user, setUser] = useState({
    userName: "",
    roomId: "",
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

        localStorage.setItem('videoChat',JSON.stringify(user))
        navigate('/')
      
  };
  return (
    <>
      <div className="basicForm">
        <span>
          <h1>Create Room</h1>
          <input
           placeholder="Enter your name"
           name="userName"
            value={user.name}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Join</button>
        <span className="footerLogin">Have any room Code? <Link to='/joinroom'>Join A Room</Link></span>
        </span>
      </div>
    </>
  );
};

export default SignIn;

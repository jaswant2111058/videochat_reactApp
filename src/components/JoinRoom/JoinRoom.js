import React, { useState,useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./JoinRoom.css";

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
          <h1>Sign In</h1>
          <input
            placeholder="Name"
            name="userName"
            type={"text"}
            value={user.userName}
            onChange={handleChange}
          />
          <input
            placeholder="Room Id"
            name="roomId"
            type={"text"}
            value={user.roomId}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Join</button>
        <span className="footerLogin"> Create A New Room<Link to='/createroom'>New Room</Link></span>
        </span>
      </div>
    </>
  );
};

export default SignIn;

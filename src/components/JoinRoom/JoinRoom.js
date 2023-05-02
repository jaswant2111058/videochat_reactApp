import React, { useState,useMemo } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./JoinRoom.css";

const JoinRoom = () => {

  const navigate = useNavigate()
  const handleClick = async () => {

    const userName = document.getElementById('userName').value
       
        const user = {
          userName:userName+"#",
          roomId:document.getElementById('roomId').value
        }
        localStorage.setItem('videoChat',JSON.stringify(user))
        navigate('/video')
  };
  return (
    <>
      <div className="basicForm">
        <span>
          <h1>Sign In</h1>
          <input
            id="userName"
            placeholder="Name"
            name="userName"
            type={"text"}
          />
          <input
            id="roomId"
            placeholder="Room Id"
            name="roomId"
            type={"text"}
          />
          <button onClick={handleClick}>Join</button>
        <span className="footerLogin"> Create A New Room<Link to='/creatroom'>New Room</Link></span>
        </span>
      </div>
    </>
  );
};

export default JoinRoom;

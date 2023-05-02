
import {useNavigate ,Link } from "react-router-dom";
import "./CreateRoom.css";

const CreateRoom = () => {
    const navigate = useNavigate()
  //setEmail('123@abc')
  const handleClick = () => {
        const userName = document.getElementById('userName').value
        const urlparams = new URLSearchParams(window.location.search);
        const user = {
          userName:userName+'$',
          roomId:urlparams.get("id")
        }
        localStorage.setItem('videoChat',JSON.stringify(user))
        navigate('/video')
        
  };
  return (
    <>
      <div className="basicForm">
        <span>
          <h1>Create Room</h1>
          <input
          id='userName'
           placeholder="Enter your name"
           name="userName"
          />
        <button onClick={handleClick}>Join</button>
        <span className="footerLogin">Have any room Code?<Link to='/joinroom'>Join A Room</Link></span>
        </span>
      </div>
    </>
  );
};
export default CreateRoom;

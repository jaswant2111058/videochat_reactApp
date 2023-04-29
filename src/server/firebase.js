import firebase from "firebase";

var firebaseConfig = {
  apiKey: "375347784333", // Add API Key
  databaseURL:"https://chatvideo-31e36-default-rtdb.firebaseio.com/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

var user = JSON.parse(localStorage.getItem('videoChat'))
console.log(user)
  const userState=(index)=>{
      if(user&&index)
      {
        return user.roomId
      }
      else if (user&&!index)

      {
        return user.userName
      } 
      else 
      return 0
  }
export const userName = userState(0);
// login id and password adding

const urlparams = new URLSearchParams(window.location.search);

const roomId = userState(1)||urlparams.get("id")

if(user)
{
user={
  userName,roomId
}
localStorage.setItem('videoChat',JSON.stringify(user))
}


if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;

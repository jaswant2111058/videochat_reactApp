import firebase from "firebase";
import { useEffect } from "react";
var firebaseConfig = {
  apiKey: "375347784333", // Add API Key
  databaseURL:"https://chatvideo-31e36-default-rtdb.firebaseio.com/" // Add databaseURL
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase;

var firepadRef = firebase.database().ref();

const user = JSON.parse(localStorage.getItem('videoChat'))

export const userName = user?user.userName:"Refresh Again";
// login id and password adding

const urlparams = new URLSearchParams(window.location.search);

const roomId = user?user.roomId:urlparams.get("id")

if (roomId) {
  firepadRef = firepadRef.child(roomId);
} else {
  firepadRef = firepadRef.push();
  window.history.replaceState(null, "Meet", "?id=" + firepadRef.key);
}

export default firepadRef;

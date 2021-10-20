// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBafhwtml2RifAjPKmj8VItNtD2ce6bIoY",
  authDomain: "kwitter-12734.firebaseapp.com",
  databaseURL: "https://kwitter-12734-default-rtdb.firebaseio.com",
  projectId: "kwitter-12734",
  storageBucket: "kwitter-12734.appspot.com",
  messagingSenderId: "839724924504",
  appId: "1:839724924504:web:0ad881814eea8a22d7142d"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser() {
  user_name = document.getElementById("user_name").value;
  console.log("hi");
  localStorage.setItem("user_name", user_name);
  window.location = "kwitter_room.html";
}

var views = 0;
var taki = "yo";

firebase.database().ref("/").child(taki).update({
  purpose: "adding room name",
  views:views+1
});

//ADD YOUR FIREBASE LINKS


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
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";
user_name = localStorage.getItem("user_name");
function addRoom() {
  
  room_name = document.getElementById("room_name").value;
  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });
  
  
  
  localStorage.setItem("room_name", room_name);
  window.location = "kwitter_page.html";
}

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#"+ Room_names + "</div><hr>";
      console.log("Room Name - " + Room_names);
   
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location ="index.html";
}    
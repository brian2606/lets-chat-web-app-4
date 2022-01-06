//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyANoccCvOT8hDpck7Xy1Q302JXwXdQsb9g",
      authDomain: "kwitter-roshan.firebaseapp.com",
      databaseURL: "https://kwitter-roshan-default-rtdb.firebaseio.com",
      projectId: "kwitter-roshan",
      storageBucket: "kwitter-roshan.appspot.com",
      messagingSenderId: "668809243918",
      appId: "1:668809243918:web:eddeba54e24c68dec53b5f"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function send(){
msg=document.getElementById("msg").value;
firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
});
document.getElementById("msg").value="";
}

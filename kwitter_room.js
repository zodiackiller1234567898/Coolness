
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDxbseGsFHkDUIFdKuJQ4VO7PGkVCLE9DY",
      authDomain: "utkarsh-a289a.firebaseapp.com",
      databaseURL: "https://utkarsh-a289a-default-rtdb.firebaseio.com",
      projectId: "utkarsh-a289a",
      storageBucket: "utkarsh-a289a.appspot.com",
      messagingSenderId: "73600859388",
      appId: "1:73600859388:web:f0642f72f0d7b39e776b79",
      measurementId: "G-N0Y1HKXWWJ"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

const firebaseConfig = {
    apiKey: "AIzaSyAe_z0DOGXOWWzN-_6AR1OguJeex52AUow",
    authDomain: "kwitter-web-page-3a492.firebaseapp.com",
    databaseURL: "https://kwitter-web-page-3a492-default-rtdb.firebaseio.com",
    projectId: "kwitter-web-page-3a492",
    storageBucket: "kwitter-web-page-3a492.appspot.com",
    messagingSenderId: "474961356752",
    appId: "1:474961356752:web:4e01c9936735ee3a3d3bd5",
    measurementId: "${config.measurementId}"
  };

  firebase.initializeApp(firebaseConfig);

  function addroom() {
     room_name = document.getElementById("room_name").value ;
      firebase.database().ref("/").child(room_name).update({
          purpose : "17-11-09"
      }) ;

      localStorage.setItem("room_name" , room_name) ;
      window.location = "kwitter_page.html" ;
  }

 user_name = localStorage.getItem("user_name" , user_name) ;
 document.getElementById("user_name").innerHTML = "WELCOME  " + user_name + "!" ;

 function getData() { 
       firebase.database().ref("/").on('value', function(snapshot) { 
             document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { 
                   childKey = childSnapshot.key; 
                   Room_names = childKey; 
                    console.log("Room Name - " + Room_names); 
                    row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
                    document.getElementById("output").innerHTML += row; 
                }); 
          });
    }
    getData();
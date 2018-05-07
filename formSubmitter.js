$(document).ready(function(){

  // TODO :: refactor this to export function from app.js
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBdrbaclbvhHAu_4isVuO81Xr03JIoL5Vw",
    authDomain: "nothertest-90f29.firebaseapp.com",
    databaseURL: "https://nothertest-90f29.firebaseio.com",
    projectId: "nothertest-90f29",
    storageBucket: "nothertest-90f29.appspot.com",
    messagingSenderId: "495235487976"
  };
  firebase.initializeApp(config);

  // form submission
  function grabValuesBuildMessage(){
    console.log('grabbing values, building messageObject');
    var messageObject = {
      'name':     document.querySelector('#name').value,
      'contact':  document.querySelector('#contact').value,
      'message':  document.querySelector('#message').value,
      'friend':   document.getElementById('friend').checked,
      'family':   document.getElementById('family').checked,
      'stranger': document.getElementById('stranger').checked,
      'nobody':   document.getElementById('nobody').checked
    }
    storedMessages.push(messageObject);
    console.log(storedMessages);
  }

  var submitButton = document.getElementById("submission");
  submitButton.addEventListener("click", function(){
    grabValuesBuildMessage();
  });
});

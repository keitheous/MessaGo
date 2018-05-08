$(document).ready(function(){

  var clearForm = function(){
    document.getElementById('stranger').checked = false;
    document.getElementById('nobody').checked = false;
    document.getElementById('family').checked = false;
    document.getElementById('friend').checked = false;
    document.querySelector('#name').value = '';
    document.querySelector('#contact').value = '';
    document.querySelector('#message').value = '';
    console.log('clear form')

  }
  // create firebase reference
  const dbRefMessages = firebase.database().ref().child('messages')

  // form submission
  function buildMessageDbSave(){

    var messageObject = new Object();
    messageObject.name    =  document.querySelector('#name').value;
    messageObject.contact = document.querySelector('#contact').value;
    messageObject.message = document.querySelector('#message').value;
    messageObject.friend  =  document.getElementById('friend').checked;
    messageObject.family  =  document.getElementById('family').checked;
    messageObject.stranger  =  document.getElementById('stranger').checked;
    messageObject.nobody  =  document.getElementById('nobody').checked;

    // push messageObject to dbRefMessages
    dbRefMessages.push(messageObject);
  }

  var submitButton = document.getElementById("submission");
  submitButton.addEventListener("click", function(){
    buildMessageDbSave();
    alert('Thanks for the message!');
    document.select('#swipe-2')
    clearForm();
  });
});

$(document).ready(function(){

  var clearForm = function(){
    document.getElementById('stranger').checked = false;
    document.getElementById('nobody').checked = false;
    document.getElementById('family').checked = false;
    document.getElementById('friend').checked = false;
    document.querySelector('#name').value = '';
    document.querySelector('#contact').value = '';
    document.querySelector('#message').value = '';
  }

  // build message Object
  function buildMessageDbSave(){

    var messageObject = new Object();
    messageObject.name    =  document.querySelector('#name').value;
    messageObject.contact = document.querySelector('#contact').value;
    messageObject.message = document.querySelector('#message').value;
    messageObject.friend  =  document.getElementById('friend').checked;
    messageObject.family  =  document.getElementById('family').checked;
    messageObject.stranger  =  document.getElementById('stranger').checked;
    messageObject.nobody  =  document.getElementById('nobody').checked;

    return messageObject
  }

  // create firebase reference
  const db = firebase.database()

  function saveMessagObject() {
    // push messageObject to dbRefMessages
    db.ref('messages').push(buildMessageDbSave());
  }

  $('#thank-you-message').hide();
  // hide thank you message by default
  function thankYouFadeOut(){
    $('#thank-you-message').fadeOut();
  }

  function thankYouFadeIn(){
    $('#thank-you-message').fadeIn();
    window.setTimeout(thankYouFadeOut(), 999999);
  }


  function swipe(section){
    $('ul.tabs').tabs('select_tab', section);
  }

  var submitButton = document.getElementById("submission");
  submitButton.addEventListener("click", function(){
    saveMessagObject();
    swipe('swipe-2');
    clearForm();
    thankYouFadeIn();
  });
});

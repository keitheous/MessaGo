$(document).ready(function(){
  $('ul.tabs').tabs({ swipeable : true, responsiveThreshold : 1920 });

  // form submission
  function grabValues(){
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
    console.log(messageObject);
  }

  var submitButton = document.getElementById("submission");
  submitButton.addEventListener("click", function(){
    grabValues();
  });
});

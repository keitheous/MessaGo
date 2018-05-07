$(document).ready(function(){
  $('ul.tabs').tabs({ swipeable : true, responsiveThreshold : 1920 });

  // form submission
  function grabValues(){
    var name = document.querySelector('#name').value;
    var contact = document.querySelector('#contact').value;
    var message = document.querySelector('#message').value;

    var friend = document.getElementById('friend').checked;
    var family =  document.getElementById('family').checked;
    var stranger =  document.getElementById('stranger').checked;
    var nobody =  document.getElementById('nobody').checked;
    console.log('done');
    console.log(name);
    console.log(contact);
    console.log(message);
  }

  var submitButton = document.getElementById("submission");
  submitButton.addEventListener("click", function(){
    grabValues();
  });
});

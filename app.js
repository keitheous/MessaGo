$(document).ready(function(){
  $('ul.tabs').tabs({ swipeable : true, responsiveThreshold : 1920 });

  // storedMessages
  var storedMessages = [
    {
      contact: "eee",
      family: true,
      friend: false,
      message: "1111",
      name: "qweqwe",
      nobody: false,
      stranger: false
    },
    {
      contact: "1111",
      family: true,
      friend: true,
      message: "22222",
      name: "qweqwqweqwee",
      nobody: true,
      stranger: true
    }
  ]

  console.log(storedMessages.length);


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

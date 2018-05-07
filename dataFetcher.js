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

  // display stored Messages
  var storedMessages = [
    {
      'contact': "eee",
      'family': false,
      'friend': false,
      'message': "heheh.",
      'name': "qweqwe",
      'nobody': false,
      'stranger': false
    },
    {
      'contact': "eee",
      'family': true,
      'friend': false,
      'message': "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      'name': "qweqwe",
      'nobody': false,
      'stranger': false
    },
    {
      'contact': "1111",
      'family': true,
      'friend': true,
      'message': "22222",
      'name': "qweqwqweqwee",
      'nobody': true,
      'stranger': true
    }
  ]

  // determine who visited
  function whoVisited(family, friend, stranger, nobody){
    var result = ""
    var visitor = []

    if (family || friend || stranger || nobody){
      if (family === true){ visitor.push('family') };
      if (friend === true){ visitor.push('friend') };
      if (stranger === true){ visitor.push('stranger') };
      if (nobody === true){ visitor.push('no body') };

      return visitor.join(', ')
    } else {
      return ''
    }
  }

  // target for appending
  var inboxSection = document.getElementById('inbox')

  // create card object to appended
  function cardSection(messageObject){
    return [
      "<div class='card horizontal'>",
        "<div class='card-content'>",
          "<p>" + messageObject['message'] +"</p>",
          "<br>",
          "<span class='sender'>" + messageObject['contact'] +"</span>",
          "<br>",
          "<span class='sender'>" + whoVisited(
            messageObject['family'],
            messageObject['friend'],
            messageObject['stranger'],
            messageObject['nobody']
          ) +"</span>",
        "</div>",

      "</div>"
    ].join('\n')
  }

  // message iterator
  for(var i = 0; i < storedMessages.length; i++){
    console.log(storedMessages[i]['contact']);
    inboxSection.innerHTML += cardSection(storedMessages[i]);
  }
});

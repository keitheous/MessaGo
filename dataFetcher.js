$(document).ready(function(){

  // display stored Messages
  var storedMessages = []

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
    }

    return ''
  }

  // target for appending
  var inboxSection = document.getElementById('inbox')

  // create card object to appended
  function cardSection(messageObject){
    inboxSection.innerHTML += [
      "<div class='card horizontal'>",
        "<div class='card-content'>",
          "<p>" + messageObject['message'] +"</p>",
          "<br>",
          "<span class='sender'>" + messageObject['name'] +"</span>",
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

  // create firebase reference
  const dbRefMessages = firebase.initializeApp(config).database().ref().child('messages')

  // detect and sync granular change from message list in firebase
  dbRefMessages.on('child_added', snap => {
    // console.log(snap.val());
    cardSection(snap.val())
  });


});

$(document).ready(function(){

  // display stored Messages
  var storedMessages = []

  // determine who visited
  function whoVisited(family, friend, stranger, nobody){
    var visitor = []

    if (family || friend || stranger || nobody){
      if (family === true){ visitor.push('Family') };
      if (friend === true){ visitor.push('Friend') };
      if (stranger === true){ visitor.push('Stranger') };
      if (nobody === true){ visitor.push('No Body') };

      return 'From a ' + visitor.join(', ')
    }

    return ''
  }

  // target for appending
  var inboxSection = document.getElementById('inbox')

  // create card object to appended
  function cardSection(messageId, messageObject){
    inboxSection.innerHTML += [
      "<div class='card horizontal' id="+messageId +">",
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
          "<span style='color:red;' class='right bin' value = "+ messageId +">x</span>",
        "</div>",
      "</div>"
    ].join('\n')
  }

  // create firebase reference
  const dbRefMessages = firebase.initializeApp(config).database().ref().child('messages')

  // detect and sync granular change from message list in firebase
  dbRefMessages.on('child_added', snap => {
    cardSection(snap.key,snap.val())
  });


});

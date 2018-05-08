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
          "<span class='sender'><strong>" + messageObject['name'] +"</strong></span>",
          "<br>",
          "<span class='sender'><em>" + whoVisited(
            messageObject['family'],
            messageObject['friend'],
            messageObject['stranger'],
            messageObject['nobody']
          ) +"</em></span>",
          "<span style='color:red;' class='right bin'>x</span>",
        "</div>",
      "</div>"
    ].join('\n')
  }

  // create firebase reference
  const db = firebase.initializeApp(config).database()


  // detect and sync granular change from message list in firebase - show
  db.ref().child('messages').on('child_added', snap => {
    cardSection(snap.key,snap.val())
      firebase.database().ref('messages')
  });


  function removeMessage(id){
    console.log('removing card with id' + id);
    db.ref('messages/' + id).remove()
  }

  $(document).delegate('.bin', 'click', function(){
    removeMessage($(this).closest('.horizontal').attr('id'))
  })
});

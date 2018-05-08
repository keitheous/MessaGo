$(document).ready(function(){
  $('ul.tabs').tabs({ swipeable : true, responsiveThreshold : 1920 });

  function removeMessage(id){
    console.log('removing card with id' + id);
  }

  $(document).delegate('.bin', 'click', function(){
    console.log('delete!')
    removeMessage($(this).closest('.horizontal').attr('id'))
  })
});

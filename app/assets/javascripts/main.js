$( document ).ready(function() {
    // console.log("does anyone speak jive?");
    $('#cliq').click(function(e){
      e.preventDefault();
      var $title = $('h1');
      $title.text('Jabba Jive');
      var $body = $('body');
      $body.addClass('pink');
      this.disabled=true;
    });

});
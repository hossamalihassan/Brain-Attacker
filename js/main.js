$(function(){

  $('li').click(function(){
    var file = $(this).text();

    window.location = "Pages/" + file + '.html';

  });

});

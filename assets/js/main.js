$(document).ready(function(){
  // Write your code

  // Navigation
  $(".navbar-toggle").click(function(){
    $('.navbar-collapse').toggleClass("open");
  });
  
  $(".navbar-collapse li a").click(function(){
      $('.navbar-collapse').removeClass("open");
  });

});
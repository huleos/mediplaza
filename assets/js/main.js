$(document).ready(function(){
  // Write your code

  // Navigation
  $(".navbar-toggle").click(function(){
    $('.navbar-collapse').toggleClass("open");
  });
  
  $(".navbar-collapse li a").click(function(){
      $('.navbar-collapse').removeClass("open");
  });

  $('.home-nav li').hover(function(){
		$(".cover-box", this).stop().animate({top:'100%'},{queue:false,duration:300});
	}, function() {
		$(".cover-box", this).stop().animate({top:'0px'},{queue:false,duration:300});
	});

});
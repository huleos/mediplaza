$(document).ready(function(){
  // Write your code

  // Navigation
  $(".navbar-toggle").click(function(){
    $('.navbar-collapse').toggleClass("open");
  });
  
  $(".navbar-collapse li a").click(function(){
      $('.navbar-collapse').removeClass("open");
  });

  // home navigation
  $('.home-nav li').hover(function(){
		$(".cover-box", this).stop().animate({top:'100%'},{queue:false,duration:300});
	}, function() {
		$(".cover-box", this).stop().animate({top:'0px'},{queue:false,duration:300});
	});

  // Contact Form
  $('#contactForm').validate();
  $('#bookingForm').validate();

  // Navigation
  $(".contact-button > a").click(function(){
    $('body').toggleClass("show-contact");
  });
  
  $("#close-contact").click(function(){
      $('body').removeClass("show-contact");
  });

  // Datepicker
  $('#from, #to').datepicker();

  // Zoom
  $("#zoomMap").elevateZoom({
    zoomType: "inner",
    cursor: "crosshair"
  });
  //Map Index
  $("accordion").click(function(){
    $("p").toggleClass("panel-map");
  });

  for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      } 
    }
  }
});

/* Toggle between adding and removing the "active" and "show" classes when the user clicks on one of the "Section" buttons. The "active" class is used to add a background color to the current button when its belonging panel is open. The "show" class is used to open the specific accordion panel */
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("show");
    }
}
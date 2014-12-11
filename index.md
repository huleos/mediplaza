---
layout: page
title: MediPlaza in Los Algodones
permalink: /
description: Mediplaza is a mall in Los Algodones Mexico, near Yuma, AZ
group: "navigation"
latitude: 32.648342
longitude: -115.447097
---

<section role="content" class="home">
	<div class="about">
		<div class="row">
			<div class="col md-12">
				<h2 class="title">About</h2>
			</div>
			<div class="col md-6">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum at nulla, libero quasi autem, quas consequatur officiis tempora earum minus dolorem dicta odit ipsam corrupti minima adipisci tempore labore sunt.</p>
			</div>
			<div class="col md-6">
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum at nulla, libero quasi autem, quas consequatur officiis tempora earum minus dolorem dicta odit ipsam corrupti minima adipisci tempore labore sunt.</p>
			</div>
		</div>
	</div>
	<div class="location">
		<div class="row">
			<div class="col md-12">
				<h2 class="title">Location</h2>
			</div>
		</div>
		<div id="map-canvas"><h2 class="title">Location</h2></div>
	</div>
</section>

<!-- Google Maps -->
<script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
<script>
	function initialize() {
	  var myLatlng = new google.maps.LatLng({{ page.latitude }}, {{ page.longitude }});
	  var mapOptions = {
	    zoom: 16,
	    scrollwheel: false,
	    center: myLatlng
	  }
	  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  var marker = new google.maps.Marker({
	      position: myLatlng,
	      map: map,
	      title: '{{ page.title }}'
	  });
	}
google.maps.event.addDomListener(window, 'load', initialize);
</script>
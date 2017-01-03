---
layout: page
title: Los Algodones Best Medical Center
description: Find the Best Medical Treatments in Mexico, Including Stem Cells, Hyperbaric, Optical, Dental, and Surgery Services. The Only Thing Los Algodones Was Missing, Is Now Here.
permalink: /
group: "navigation"
latitude: 32.715346
longitude: -114.729164
---
<section role="content" class="home">
	<div class="about">
		<div class="row">
			<div class="col md-10 md-center">
				<h2 class="title">About us</h2>
				<p>MediPlaza Los Algodones is the place where you can find the best medical treatments in Mexico, including Stem Cells, Hyperbaric, Optical, Dental, and Surgery services. MediPlaza focuses on offering to its visitors a Medical Hospitality experience, providing a perfect environment to receive the treatments you need and have a good time.</p>
				<p>Conveniently located just two blocks away from the border, MediPlaza Los Algodones is the best option for the medical tourists and their companions.</p>
				<p>At MediPlaza, we strive for excellence in the services that our clinics, restaurants, hotel, and stores offer. We're conscious on how important is for our visitors the convenience and quality, and that's why we put everything at their reach.</p>
				<h3>Our Mission</h3>
				<p>We are committed to offer everything the medical tourists and their companions require. We will strive to deliver a unique Medical Hospitality experience by understanding and responding to the needs of those who we serve.</p>
				<h3>Our Vision</h3>
				<p>Turning Los Algodones into an even more competitive Medical Tourism destiny worldwide, and to reach new markets amplifying the services branch that Los Algodones offers.</p>
			</div>
		</div>
	</div>
	<div class="location">
		<div class="row">
			<div class="col md-10 md-center">
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
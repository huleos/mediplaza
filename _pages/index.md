---
layout: page
title: MediPlaza in Los Algodones
permalink: /
description: Mediplaza is a mall in Los Algodones Mexico, near Yuma, AZ
group: "navigation"
latitude: 32.715346
longitude: -114.729164
---
<section role="content" class="home">
	<div class="about">
		<div class="row">
			<div class="col md-12">
				<h2 class="title">About</h2>
			</div>
			<div class="col md-6">
				<p>The city of Los Algodones is expanding the capital of dental tourism and your favorite and largest dental clinic will offer you new facilities in 2015. These new facilities will include all the accommodations you can imagine and need. Among these you will see a Hotel, a Pharmacy, Restaurants and Cafes, Stem Cell Clinic, Clinical Laboratories, Optical Centers, X-Ray Clinic, Craft and Jewelry and all at one place.</p>
				<p>Sani Dental Group the dental clinic that only offers you professional and affordable dental procedures, will now offer you many services. The idea of all in one will be redefine, in 2015 our Sani Dental Group will offer more than great dental procedures, our visitors will have everything they need at the reach of their hands.</p>
			</div>
			<div class="col md-6">
				<p>
				With this new concept we will represent the most convenient, easy and complete experience Medical Tourism and Los Algodones has to offer you. No longer will you need travel long distances to reach good, affordable health services; our dental clinic will offer you everything you need and you will only need to take a few steps. Visit the city and experience the best dental and health restauration facilities Los Algodones has to offer you.</p>
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
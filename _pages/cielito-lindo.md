---
layout: page
title:  "Cielito Lindo"
description: Aqui va la descripcion del post.
---

<div class="cl-cover">
	<div class="overlay"></div>
	<div class="row">
		<div class="col md-12 md-center">
			<div class="book-container">
				<form action="{{ site.baseurl }}/bookForm.php" method="post" id="bookingForm">
					<div class="row">
						<div class="col md-2 form-group">
							<label for="">Arrival date</label>
							<input type="text" name="_check_in" id="from" required>
						</div>
						<div class="col md-2 form-group">
							<label for="">Departure date</label>
							<input type="text" name="_check_out" id="to" required>
						</div>
						<div class="col md-2 form-group">
							<label for="">Party</label>
							<select name="_party" required>
								<option value=""></option>
								<option value="1">1</option>
								<option value="2">2</option>
								<option value="3">3</option>
								<option value="4">4</option>
							</select>
						</div>
						<div class="col md-2 form-group">
							<label>Room</label>
							<select name="_room" required>
								<option value=""></option>
								<option value="Single">Single</option>
								<option value="Double">Double</option>
								<option value="Junior">Junior</option>
							</select>
						</div>
						<div class="col md-2 form-group">
							<label>Name</label>
							<input type="text" name="_name" required>
						</div>
						<div class="col md-2 form-group">
							<label>Phone</label>
							<input type="text" name="_phone" required>
						</div>
					</div>
					<div class="book-submit">
						<div class="row">
							<div class="col md-2 md-center">
								<input type="submit" class="btn btn-book">
							</div>
						</div>
					</div><!-- .book-submit -->
					<input type="hidden" name="fk">
					<input type="hidden" name="_origin" value="Booking From Cielito Lindo">
					<input type="hidden" id="field_utm_cielito_lindo" name="field_utm" value="">
				</form>
			</div><!-- .book-container -->
		</div>
	</div>
</div>

<div class="row">
	<div class="col md-9">
		<h1>Cielito Lindo</h1>
		<p>When you're traveling, you want a good place to rest. You want a convenient place with everything near, and to pay a fair price.</p>
		<p>The opening of MediPlaza has brought around 15 new medical business that aim to cover all your needs. In the second floor of this new establishment, you’ll find Cielito Lindo, the newest, and one of the largest hotels in Los Algodones. It’s conveniently located in the heart of the town, and only a few steps away from all the fun.</p>
		<p>Cielito Lindo is what you're looking for. Our hotel offers affordable prices, convenience, and tradition in one place. Your rest is our priority, and we have the best service for you.
		We invite you to visit us at MediPlaza, where besides of the hotel you'll have a lot of options to spend your time. Take your rest and comfort seriously, and choose the best.</p>

		<!-- Rooms -->
		<div class="row">
			<div class="col md-4">
				<div class="room-box">
					<img src="http://placehold.it/285x190?text=Image+Coming+Soon" alt="">
					<span>Single Room</span>
				</div>
			</div>
			<div class="col md-4">
				<div class="room-box">
					<img src="{{ site.baseurl }}/assets/img/double-room.jpg" alt="">
					<span>Double Room</span>
				</div>
			</div>
			<div class="col md-4">
				<div class="room-box">
					<img src="{{ site.baseurl }}/assets/img/junior-room.jpg" alt="">
					<span>Junior Room</span>
				</div>
			</div>
		</div>
	</div>

	<aside class="col md-3 cl-sidebar">
		<div class="box">
			<h3>Rooms &amp; Rates</h3>
			<table class="table-hover">
				<tr>
					<td>Single room</td>
					<td>$60</td>
				</tr>
				<tr>
					<td>Double room</td>
					<td>$70</td>
				</tr>
				<tr>
					<td>Junior room</td>
					<td>$80</td>
				</tr>
			</table>
		</div>

		<div class="box">
			<h3>Services</h3>
			<ul>
				<li>One private bathroom in every room</li>
				<li>Air conditioner</li>
				<li>Flat screen TV</li>
				<li>Wi-fi </li>
				<li>Telephone</li> 
				<li>Safe in every room</li>
				<li>Parking</li>
				<li>Room service</li>
			</ul>
		</div>

		<div class="box">
			<h3>Promotions</h3>
			<p>We do not only offer great prices, but we also offer great promotions. If you’re a Sani Dental Group patient, you might be eligible to have from one to three free nights at Cielito Lindo.</p> 
			<p>If you’d like to get more information, please contact us: <br>
			<b>US (928) 2571136 / 3281814</b> <br>
			<b>MX (658) 5173328</b></p> 
		</div>

	</aside><!-- .cl-sidebar -->
</div>
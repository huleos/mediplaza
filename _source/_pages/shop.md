---
layout: page
title: Los Algodones Shopping Center | MediPlaza
description: Come to MediPlaza Los Algodones in Mexico. Your One Stop for Everything, Including Traditional Mexican Clothing and Jewelry. Visit Us Today!
permalink: /shop/
---
<section role="content" class="list-bussines shop">
  <div class="row">
  	<div class="col sm-12">
  		<header class="page-header">
  		  <h1 class="title">Shop</h1>
  		</header>
  	</div>
  </div>
  <div class="row">
    {% for item in site.shop %}
    <article class="col md-6">
      <div class="row">
        <div class="col md-6">
          <a href="{{ item.url }}">
            <img src="{{ item.avatar }}" alt="Image for {{ item.title }}">
          </a>
        </div>
        <div class="col md-6">
          <h2><a href="{{ item.url }}">{{ item.name }}</a></h2>
          {% if item.horary contains '' %}
          <h4>Opening Hours</h4>
          <span>{{ item.horary }}</span>
          {% endif %}
          {% if item.floor contains '' %}
          <h4>{{ item.floor }} Floor</h4>
          <span>Local {{ item.local }}</span>
          {% endif %}
          {% if item.phone contains '' %}
          <h4>Phone</h4>
          <span>{{ item.phone }}</span>
          {% endif %}
        </div>
      </div>
      <hr>
    </article>
    {% endfor %}
  </div>

</section>
---
layout: page
title: Shop
description: Write here the custom description
permalink: /shop/
---
<section role="content" class="list-bussines shop">
  <div class="row">
  	<div class="col sm-12">
  		<header class="page-header">
  		  <h1 class="title">{{ page.title }}</h1>
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
          <h2><a href="{{ item.url }}">{{ item.title }}</a></h2>
          {% if item.horary contains 'm' %}
          <h4>Opening Hours</h4>
          <span>{{ item.horary }}</span>
          {% endif %}
          {% if item.floor contains 'o' %}
          <h4>{{ item.floor }}</h4>
          <span>{{ item.local }}</span>
          {% endif %}
          {% if item.phone contains ' ' %}
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
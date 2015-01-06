---
layout: page
title: Dine
permalink: /dine/
description: Write here the custom description
---
<section role="content" class="list-bussines dine">
  <div class="row">
  	<div class="col sm-12">
  		<header class="page-header">
  		  <h1 class="title">{{ page.title }}</h1>
  		</header>
  	</div>
  </div>
  <div class="row">
    {% for post in site.categories['dine'] %}
    <article class="col md-6">
      <div class="row">
        <div class="col md-6">
          <img class="avatar" src="{{ post.avatar }}" alt="Image for {{ post.title }}">
        </div>
        <div class="col md-6">
          <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
          {% if post.horary contains 'm' %}
          <h4>Opening Hours</h4>
          <span>{{ post.horary }}</span>
          {% endif %}
          {% if post.floor contains 'o' %}
          <h4>{{ post.floor }}</h4>
          <span>{{ post.local }}</span>
          {% endif %}
          {% if post.phone contains ' ' %}
          <h4>Phone</h4>
          <span>{{ post.phone }}</span>
          {% endif %}
        </div>
      </div>
      <hr>
    </article>
    {% endfor %}
  </div>

</section>
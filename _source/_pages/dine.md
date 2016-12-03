---
layout: page
title: Mediplaza | Los Algodones Best Medical Center 
description: Come and Try Our Traditional Mexican Cuisine, Get a Quick Bite at Our Deli or Enjoy a Delicious Cup of Coffee, Everything Here at MediPlaza Los Algodones. Eat, Shop and Have Fun Today!
permalink: /dine/
---
<section role="content" class="list-bussines shop">
  <div class="row">
    <div class="col sm-12">
      <header class="page-header">
        <h1 class="title">Dine</h1>
      </header>
    </div>
  </div>
  <div class="row">
    {% for item in site.dine %}
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
---
layout: page
title: Medical Center in Mexico at MediPlaza
description: Visit One of Our Trusted Physicians, Fill Your Prescription, Get a Better Quality of Life with Stem Cells Therapy. All of Your Medical Needs Solved, Only at MediPlaza.
permalink: /heal/
---
<section role="content" class="list-bussines shop">
  <div class="row">
    <div class="col sm-12 md-10 md-center">
      <header class="page-header">
        <h1 class="title">Heal</h1>
      </header>
    </div>
    <div class="col sm-12 md-10 md-center">
      <div class="row">
      {% assign sorted = site.heal | sort: 'position'  %}
        {% for item in sorted %}
        <article class="col md-6">
          <div class="row flex flex--center flex--middle">
            <div class="col md-6">
              <a href="{{ item.url }}" class="flex flex--center flex--middle">
                <img src="{{ item.avatar }}" alt="Image for {{ item.title }}">
              </a>
            </div>
            <div class="col md-6">
              <h2><a href="{{ item.url }}">{{ item.name }}</a></h2>
              {% if item.horary contains '' %}
              <h4>Opening Hours</h4>
              <span>{{ item.days }}<br></span>
              <span>{{ item.horary }}<br></span>
              {% if item.days_extra contains '' %}
              <span>{{ item.days_extra }}<br></span>
              <span>{{ item.horary_extra }}</span>
              {% endif %}
              {% endif %}
              {% if item.floor contains '' %}
              <h4>{{ item.floor }} Floor</h4>
                <span>Suite {{ item.local }}</span>
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
    </div>
  </div>
</section>
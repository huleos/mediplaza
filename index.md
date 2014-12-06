---
layout: page
title: MediPlaza in Los Algodones
permalink: /
description: Mediplaza is a mall in Los Algodones Mexico, near Yuma, AZ
group: "navigation"
---

<div class="row">
  {% for post in site.posts %}
    <div class="col md-4">
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      <span class="post-meta">{{ post.date | date: "%b %-d, %Y" }}</span>
      {{ post.excerpt }}
    </div>
  {% endfor %}
</div>
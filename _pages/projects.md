---
layout: page
title: projects
permalink: /projects/
description:
nav: true
nav_order: 3
---

<div class="publications">

{% assign sorted_projects = site.projects | sort: "importance" %}
{% assign current_year = "" %}

{% for project in sorted_projects %}
  {% if project.year != current_year %}
    {% assign current_year = project.year %}
    <h2 class="year">{{ current_year }}</h2>
  {% endif %}

  <div class="row" style="margin-bottom: 2rem;">
    <div class="col">
      <div>
        <span style="font-weight: 600; font-size: 1.05rem;">
          {% if project.github %}
            <a href="{{ project.github }}" target="_blank">{{ project.title }}</a>
          {% else %}
            {{ project.title }}
          {% endif %}
        </span>
        {% if project.tech and project.tech != "" %}
          &nbsp;&mdash;&nbsp;<em>{{ project.tech }}</em>
        {% endif %}
      </div>

      {% if project.bullets %}
        <div style="margin-top: 0.3rem;">
          {% for bullet in project.bullets %}
            <div style="margin-bottom: 0.15rem;">{{ bullet }}</div>
          {% endfor %}
        </div>
      {% endif %}

      <div style="margin-top: 0.5rem;">
        {% if project.github %}
          <a href="{{ project.github }}" target="_blank" class="btn btn-sm z-depth-0" role="button" style="font-size: 0.75rem;">GitHub</a>
        {% endif %}
        {% if project.demo and project.demo != project.github %}
          <a href="{{ project.demo }}" target="_blank" class="btn btn-sm z-depth-0" role="button" style="font-size: 0.75rem;">Demo</a>
        {% endif %}
      </div>
    </div>
  </div>

{% endfor %}

</div>

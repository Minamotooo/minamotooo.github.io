---
layout: page
title: Projects
permalink: /projects/
description:
nav: true
nav_order: 3
---

<div class="publications">

{% assign sorted_projects = site.projects | sort: "importance" %}
{% assign years = sorted_projects | map: "year" | uniq | sort | reverse %}

{% for year in years %}
  <h2 class="year">{{ year }}</h2>
  {% assign year_projects = sorted_projects | where: "year", year %}
  {% for project in year_projects %}

  <div class="row" style="margin-bottom: 2rem;">
    <div class="col">

      <div>
        <span style="font-weight: 600; font-size: 1.05rem;">{{ project.title }}</span>
      </div>

      {% if project.bullets %}
        <div style="margin-top: 0.3rem;">
          {% for bullet in project.bullets %}
            <div style="margin-bottom: 0.15rem;">{{ bullet }}</div>
          {% endfor %}
        </div>
      {% endif %}

      <div style="margin-top: 0.5rem; display: flex; flex-wrap: wrap; gap: 0.3rem; align-items: center;">
        {% if project.github %}
          <a href="{{ project.github }}" target="_blank" style="margin-right: 0.5rem;">
            <i class="fa-brands fa-github" style="font-size: 1.1rem;"></i>
          </a>
        {% endif %}
        {% if project.demo %}
          <a href="{{ project.demo }}" target="_blank" style="margin-right: 0.5rem;">
            <i class="fa-brands fa-youtube" style="font-size: 1.1rem;"></i>
          </a>
        {% endif %}
        {% if project.tech %}
          {% for tag in project.tech %}
            <span class="badge" style="font-size: 0.72rem; font-weight: 400; border: 1px solid currentColor; background: transparent; padding: 2px 8px; border-radius: 4px;">{{ tag }}</span>
          {% endfor %}
        {% endif %}
      </div>

    </div>
  </div>

  {% endfor %}
{% endfor %}

</div>

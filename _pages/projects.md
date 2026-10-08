---
layout: page
title: Projects
permalink: /projects/
description: Research projects, competition work and things I've built.
nav: true
nav_order: 3
---

{% assign sorted_projects = site.projects | sort: "importance" %}
{% assign years = sorted_projects | map: "year" | uniq | sort | reverse %}

<div class="project-timeline">
  {% for year in years %}
    <section class="project-year">
      <h2 class="project-year__label">{{ year }}</h2>
      <div class="project-year__items">
        {% assign year_projects = sorted_projects | where: "year", year %}
        {% for project in year_projects %}
          {% include project_card.liquid project=project %}
        {% endfor %}
      </div>
    </section>
  {% endfor %}
</div>

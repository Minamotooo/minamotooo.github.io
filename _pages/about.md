---
layout: about
title: about
permalink: /
subtitle:

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false
  more_info: >
    <p>+8801821693900</p>
    <p>Baily Road, Dhaka, Bangladesh</p>

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false
  scrollable: true
  limit: 5

latest_posts:
  enabled: false
  scrollable: true
  limit: 3
---

I am a junior-year Computer Science & Engineering student at the [Bangladesh University of Engineering and Technology (BUET)](https://www.buet.ac.bd/). My research interests span **Natural Language Processing**, **Multimodal AI**, **Computer Vision**, and **Machine Learning**.

I am open to PhD opportunities for Fall 2027. 🎓

---

## Selected Projects

<div class="publications">
{% assign selected_projects = site.projects | where: "selected", true | sort: "importance" %}
{% for project in selected_projects %}
  <div class="row" style="margin-bottom: 2rem;">
    <div class="col">
      <div>
        <span style="font-weight: 600; font-size: 1.05rem;">{{ project.title }}</span>
        <span style="color: var(--global-text-color-light); font-size: 0.95rem; margin-left: 0.5rem;">{{ project.description }}</span>
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
        {% if project.tech %}
          {% for tag in project.tech %}
            <span class="badge" style="font-size: 0.72rem; font-weight: 400; border: 1px solid currentColor; background: transparent; padding: 2px 8px; border-radius: 4px;">{{ tag }}</span>
          {% endfor %}
        {% endif %}
      </div>
    </div>
  </div>
{% endfor %}
</div>

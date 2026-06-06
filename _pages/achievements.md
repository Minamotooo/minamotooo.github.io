---
layout: page
title: Achievements
permalink: /achievements/
description:
nav: true
nav_order: 4
---

<style>
.achievement-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.achievement-card {
  border-radius: 0.75rem;
  overflow: hidden;
  border: 1px solid var(--global-divider-color);
  background: var(--global-card-bg-color);
  display: flex;
  flex-direction: column;
  transition: box-shadow 0.2s ease;
}

.achievement-card:hover {
  box-shadow: 0 4px 20px rgba(0,0,0,0.15);
}

.achievement-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  display: block;
}

.achievement-card-body {
  padding: 1rem 1.1rem 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
}

.achievement-badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  align-items: center;
}

.achievement-award-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  font-size: 0.78rem;
  font-weight: 600;
  padding: 3px 10px 3px 8px;
  border-radius: 999px;
  background: color-mix(in srgb, #f59e0b 15%, transparent);
  color: #f59e0b;
  border: 1px solid #f59e0b55;
}

.achievement-award-badge::before {
  content: '';
  display: inline-block;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #f59e0b;
  flex-shrink: 0;
}

.achievement-tag {
  font-size: 0.75rem;
  font-weight: 400;
  padding: 2px 9px;
  border-radius: 4px;
  border: 1px solid var(--global-divider-color);
  color: var(--global-text-color-light);
  background: transparent;
}

.achievement-title {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--global-text-color);
  margin: 0;
  line-height: 1.35;
}

.achievement-meta {
  font-size: 0.82rem;
  color: var(--global-text-color-light);
  margin: 0;
}

</style>

<div class="achievement-grid">
{% for item in site.data.achievements %}
  <div class="achievement-card">
    {% if item.image %}
      <img src="{{ '/assets/img/' | append: item.image | relative_url }}" alt="{{ item.title }}" loading="lazy">
    {% endif %}
    <div class="achievement-card-body">
      <div class="achievement-badge-row">
        {% if item.award %}
          <span class="achievement-award-badge">{{ item.award }}</span>
        {% endif %}
        {% for tag in item.tags %}
          <span class="achievement-tag">{{ tag }}</span>
        {% endfor %}
      </div>
      <p class="achievement-title">{{ item.title }}</p>
      <p class="achievement-meta">{{ item.organization }} | {{ item.date }}</p>
      {% if item.url %}
        <a href="{{ item.url }}" target="_blank" style="color: var(--global-theme-color); font-size: 0.88rem; font-weight: 500; margin-top: 0.25rem;">Read More &rarr;</a>
      {% endif %}
    </div>
  </div>
{% endfor %}
</div>

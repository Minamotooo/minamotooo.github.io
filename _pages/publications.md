---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

{% assign has_review = false %}
{% if site.data.under_review.size > 0 %}{% assign has_review = true %}{% endif %}
{% assign has_ongoing = false %}
{% if site.data.ongoing.size > 0 %}{% assign has_ongoing = true %}{% endif %}

{% if has_review or has_ongoing %}
<div data-pub-tabs>
<div class="section-head section-head--tabs">
<div class="section-head__title">
<h2 data-pub-tabs-title>All Publications</h2>
<span class="pub-legend"><sup>*</sup>Equal contribution</span>
</div>
<div class="pub-tabs" role="group" aria-label="Show publications">
<button type="button" class="pub-tabs__btn is-active" data-show="published" data-title="All Publications" aria-pressed="true">Published</button>
{% if has_review %}<button type="button" class="pub-tabs__btn" data-show="review" data-title="Under Review" aria-pressed="false">Under review</button>{% endif %}
{% if has_ongoing %}<button type="button" class="pub-tabs__btn" data-show="ongoing" data-title="Ongoing Work" aria-pressed="false">Ongoing</button>{% endif %}
</div>
</div>
<div class="publications" data-pub-panel="published">
{% bibliography --group_by none %}
</div>
{% if has_review %}
<div class="publications" data-pub-panel="review" hidden>
{% include under_review_papers.liquid %}
</div>
{% endif %}
{% if has_ongoing %}
<div class="publications" data-pub-panel="ongoing" hidden>
{% include ongoing_work.liquid %}
</div>
{% endif %}
</div>
{% else %}
<div class="publications">
{% bibliography %}
</div>
{% endif %}

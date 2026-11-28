---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

{% if site.data.under_review.size > 0 %}
<div data-pub-tabs>
<div class="section-head section-head--tabs">
<h2 data-pub-tabs-title>All Publications</h2>
<div class="pub-tabs" role="group" aria-label="Show publications">
<button type="button" class="pub-tabs__btn is-active" data-show="published" data-title="All Publications" aria-pressed="true">Published</button>
<button type="button" class="pub-tabs__btn" data-show="review" data-title="Under Review" aria-pressed="false">Under review</button>
</div>
</div>
<div class="publications" data-pub-panel="published">
{% bibliography --group_by none %}
</div>
<div class="publications" data-pub-panel="review" hidden>
{% include under_review_papers.liquid %}
</div>
</div>
{% else %}
<div class="publications">
{% bibliography %}
</div>
{% endif %}

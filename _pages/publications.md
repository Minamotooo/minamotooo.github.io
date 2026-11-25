---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

{% if site.data.coming_soon.size > 0 %}
<div data-pub-tabs>
<div class="pub-tabs pub-tabs--page" role="group" aria-label="Show publications">
<button type="button" class="pub-tabs__btn is-active" data-show="published" aria-pressed="true">Published</button>
<button type="button" class="pub-tabs__btn" data-show="soon" aria-pressed="false">Coming Soon</button>
</div>
<div class="publications" data-pub-panel="published">
{% bibliography %}
</div>
<div class="publications" data-pub-panel="soon" hidden>
{% include coming_soon_papers.liquid %}
</div>
</div>
{% else %}
<div class="publications">
{% bibliography %}
</div>
{% endif %}

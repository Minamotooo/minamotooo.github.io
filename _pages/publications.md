---
layout: page
permalink: /publications/
title: Publications
nav: true
nav_order: 2
---

<div class="publications">

{% if site.data.coming_soon.size > 0 %}
<h2 class="bibliography">Coming Soon</h2>
{% include coming_soon_papers.liquid %}
{% endif %}

{% bibliography %}

</div>

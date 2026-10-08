/*
  Site interactions: custom cursor, gentle 3D tilt on achievement cards, scroll reveals,
  and the About page's scroll cue.
  Everything is skipped for touch devices and for visitors who prefer reduced motion,
  and nothing is hidden until this script has run, so the page works without it.
*/
(function () {
  "use strict";

  var root = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var interactive = "a, button, [role='button'], summary, label, .pill-link, .btn, #light-toggle, .achievement-toggle";

  /* ---------- Custom cursor: a dot plus a trailing ring that grows over links ---------- */
  function initCursor() {
    var dot = document.createElement("div");
    var ring = document.createElement("div");
    dot.className = "cursor-dot";
    ring.className = "cursor-ring";
    dot.setAttribute("aria-hidden", "true");
    ring.setAttribute("aria-hidden", "true");
    document.body.appendChild(dot);
    document.body.appendChild(ring);
    root.classList.add("has-custom-cursor");

    var x = -100, y = -100, rx = -100, ry = -100, running = false;

    function place(el, px, py) {
      el.style.transform = "translate3d(" + px + "px," + py + "px,0) translate(-50%,-50%)";
    }

    function loop() {
      rx += (x - rx) * 0.2;
      ry += (y - ry) * 0.2;
      place(ring, rx, ry);
      if (Math.abs(x - rx) > 0.1 || Math.abs(y - ry) > 0.1) {
        requestAnimationFrame(loop);
      } else {
        running = false;
      }
    }

    document.addEventListener("pointermove", function (e) {
      if (e.pointerType !== "mouse") return;
      x = e.clientX;
      y = e.clientY;
      place(dot, x, y);
      root.classList.add("cursor-visible");
      if (!running) {
        running = true;
        requestAnimationFrame(loop);
      }
    }, { passive: true });

    document.addEventListener("pointerover", function (e) {
      var hit = e.target.closest && e.target.closest(interactive);
      ring.classList.toggle("is-hover", !!hit);
      dot.classList.toggle("is-hover", !!hit);
    });

    document.addEventListener("pointerdown", function () { ring.classList.add("is-down"); });
    document.addEventListener("pointerup", function () { ring.classList.remove("is-down"); });
    document.documentElement.addEventListener("pointerleave", function () { root.classList.remove("cursor-visible"); });
    window.addEventListener("blur", function () { root.classList.remove("cursor-visible"); });
  }

  /* ---------- 3D tilt: sets --rx/--ry, which the card's CSS turns into a rotation ---------- */
  function initTilt(el, max) {
    var rect = null, frame = 0;

    el.addEventListener("pointerenter", function () {
      rect = el.getBoundingClientRect();
      el.classList.add("is-tilting");
    });

    el.addEventListener("pointermove", function (e) {
      if (!rect) rect = el.getBoundingClientRect();
      var px = (e.clientX - rect.left) / rect.width;
      var py = (e.clientY - rect.top) / rect.height;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(function () {
        el.style.setProperty("--ry", ((px - 0.5) * 2 * max).toFixed(2) + "deg");
        el.style.setProperty("--rx", ((0.5 - py) * 2 * max).toFixed(2) + "deg");
      });
    });

    el.addEventListener("pointerleave", function () {
      cancelAnimationFrame(frame);
      rect = null;
      el.classList.remove("is-tilting");
      el.style.setProperty("--rx", "0deg");
      el.style.setProperty("--ry", "0deg");
    });
  }

  /* ---------- Reveal on scroll ---------- */
  function initReveal() {
    if (!("IntersectionObserver" in window)) return;
    // Only content below the first screen fades in; the hero and page titles show immediately.
    var selector = [
      ".section-head",
      ".af-card",
      ".publications ol.bibliography > li",
      ".achievement-card",
      ".project-year__label",
      ".cv .card"
    ].join(",");
    var items = document.querySelectorAll(selector);
    if (!items.length) return;

    root.classList.add("reveal-ready");
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var el = entry.target;
          el.classList.add("is-visible");
          observer.unobserve(el);
          // Drop the stagger delay afterwards so hover effects respond immediately.
          setTimeout(function () { el.style.transitionDelay = ""; }, 1200);
        }
      });
    }, { threshold: 0.01 }); // any visible sliver counts, so nothing on screen at load stays hidden

    items.forEach(function (el) {
      var siblings = el.parentElement ? Array.prototype.indexOf.call(el.parentElement.children, el) : 0;
      el.classList.add("reveal");
      el.style.transitionDelay = Math.min(siblings, 5) * 70 + "ms";
      observer.observe(el);
    });
  }

  /* ---------- Scroll cue: a down arrow on any page taller than the screen ----------
     Shown only while the visitor is at the top of a page that still has more below. On the
     About page it jumps to the content after the intro; elsewhere it scrolls down one screen. */
  function initScrollCue() {
    var cue = document.createElement("button");
    cue.type = "button";
    cue.className = "scroll-cue is-hidden";
    cue.setAttribute("aria-label", "Scroll down");
    cue.innerHTML = '<i class="fa-solid fa-arrow-down" aria-hidden="true"></i>';
    document.body.appendChild(cue);
    root.classList.add("cue-ready");

    cue.addEventListener("click", function () {
      var target = document.getElementById("home-content");
      if (target && target.getBoundingClientRect().top > 0) {
        target.scrollIntoView({ block: "start" });
      } else {
        window.scrollBy({ top: Math.round(window.innerHeight * 0.85) });
      }
    });

    function update() {
      var hasMore = document.documentElement.scrollHeight - window.innerHeight > 120;
      cue.classList.toggle("is-hidden", !hasMore || window.scrollY > 40);
    }
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    window.addEventListener("load", update);
    update();
  }

  function init() {
    initScrollCue();
    if (reduceMotion) return;
    initReveal();
    if (!finePointer) return;

    initCursor();
    document.querySelectorAll(".achievement-card").forEach(function (el) {
      el.classList.add("tilt-card");
      initTilt(el, 4);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* OranR mockup — minimal interactions (no build tools) */
(function () {
  "use strict";

  /* Mobile drawer nav */
  var toggle = document.querySelector(".nav-toggle");
  var drawer = document.getElementById("mobile-drawer");
  var overlay = document.getElementById("drawer-overlay");
  var closeBtn = document.getElementById("drawer-close");
  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add("open");
    if (overlay) overlay.classList.add("show");
    drawer.setAttribute("aria-hidden", "false");
    if (toggle) toggle.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove("open");
    if (overlay) overlay.classList.remove("show");
    drawer.setAttribute("aria-hidden", "true");
    if (toggle) toggle.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }
  if (toggle) toggle.addEventListener("click", openDrawer);
  if (closeBtn) closeBtn.addEventListener("click", closeDrawer);
  if (overlay) overlay.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeDrawer();
  });
  /* Drawer accordion groups */
  document.querySelectorAll(".drawer-group > button").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var group = btn.parentElement;
      var isOpen = group.classList.contains("open");
      group.parentElement.querySelectorAll(".drawer-group.open").forEach(function (g) {
        g.classList.remove("open");
        g.querySelector("> button").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        group.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });
  /* Close drawer when a drawer link is tapped */
  if (drawer) drawer.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", closeDrawer);
  });

  /* FAQ accordion */
  document.querySelectorAll(".faq-item").forEach(function (item) {
    var q = item.querySelector(".faq-q");
    if (!q) return;
    q.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");
      document.querySelectorAll(".faq-item.open").forEach(function (o) {
        o.classList.remove("open");
        o.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });
      if (!isOpen) {
        item.classList.add("open");
        q.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* Quantity selector */
  document.querySelectorAll(".qty-selector").forEach(function (sel) {
    var out = sel.querySelector("output");
    var minus = sel.querySelector('[data-qty="minus"]');
    var plus = sel.querySelector('[data-qty="plus"]');
    if (!out) return;
    function setQty(n) {
      n = Math.max(1, Math.min(99, n));
      out.textContent = n;
      out.setAttribute("value", n);
      var qi = document.getElementById("qty-input");
      if (qi) qi.value = n;
    }
    if (minus) minus.addEventListener("click", function () { setQty(parseInt(out.textContent, 10) - 1); });
    if (plus) plus.addEventListener("click", function () { setQty(parseInt(out.textContent, 10) + 1); });
  });

  /* Variant pills: visual toggle + Shopify variant wiring */
  document.querySelectorAll(".variant-pill").forEach(function (pill) {
    pill.addEventListener("click", function () {
      if (pill.disabled) return;
      pill.parentElement.querySelectorAll(".variant-pill").forEach(function (p) { p.classList.remove("active"); });
      pill.classList.add("active");
      var vid = pill.getAttribute("data-variant-id");
      if (vid) {
        var idInput = document.getElementById("variant-id");
        if (idInput) idInput.value = vid;
        var priceEl = document.getElementById("product-price");
        var p = pill.getAttribute("data-variant-price");
        if (priceEl && p) priceEl.textContent = p;
      }
    });
  });

  /* Collection filters (multi-category via space-separated data-category) */
  var filterBtns = document.querySelectorAll(".filter-btn");
  var cards = document.querySelectorAll("[data-category]");
  var countEl = document.querySelector(".filter-count");
  function cardMatches(card, f) {
    if (f === "all") return true;
    var cats = (card.getAttribute("data-category") || "").split(/\s+/);
    return cats.indexOf(f) !== -1;
  }
  function applyFilter(f) {
    var shown = 0;
    filterBtns.forEach(function (b) {
      b.classList.toggle("active", b.getAttribute("data-filter") === f);
    });
    cards.forEach(function (card) {
      var show = cardMatches(card, f);
      card.style.display = show ? "" : "none";
      if (show) shown++;
    });
    if (countEl) countEl.textContent = shown + (shown === 1 ? " product" : " products");
  }
  if (filterBtns.length && cards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyFilter(btn.getAttribute("data-filter"));
      });
    });
    /* Deep-link: collections.html#f-nasal etc. preselects the filter */
    var hash = (window.location.hash || "").replace("#f-", "");
    var valid = [];
    filterBtns.forEach(function (b) { valid.push(b.getAttribute("data-filter")); });
    if (hash && valid.indexOf(hash) !== -1) {
      applyFilter(hash);
    }
  }

  /* Newsletter mock submit */
  document.querySelectorAll(".news-form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        form.innerHTML = '<p style="font-weight:700;color:var(--teal-dark);margin:0;">You\'re on the list. Watch your inbox for batch-release alerts.</p>';
      }
    });
  });

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();

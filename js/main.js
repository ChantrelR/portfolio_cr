/* ============================================================
   MAIN.JS — Shared Interactions
   ============================================================ */

function initNav() {
  var burger = document.getElementById("navBurger");
  var links  = document.querySelector(".nav__links");
  if (!burger || !links) return;

  burger.addEventListener("click", function () {
    var isOpen = links.classList.toggle("open");
    burger.classList.toggle("open", isOpen);
    burger.setAttribute("aria-expanded", isOpen);
  });

  links.querySelectorAll(".nav__link").forEach(function (link) {
    link.addEventListener("click", function () {
      links.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", function (e) {
    if (!burger.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove("open");
      burger.classList.remove("open");
    }
  });
}

function initScrollReveal() {
  var targets = document.querySelectorAll(
    ".mini-card, .project-card, .info-card, .glass-form, .skill-card, .stat-item"
  );
  if (!("IntersectionObserver" in window)) return;

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity  = "1";
          entry.target.style.transform = "translateY(0)";
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  targets.forEach(function (el) {
    el.style.opacity   = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.65s ease, transform 0.65s ease";
    observer.observe(el);
  });
}

function initNavScroll() {
  var nav = document.querySelector(".nav");
  if (!nav) return;
  window.addEventListener("scroll", function () {
    nav.classList.toggle("scrolled", window.scrollY > 40);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initNav();
  initScrollReveal();
  initNavScroll();
});

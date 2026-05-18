/* ============================================================
   WORK.JS — Work Page Interactions
   ============================================================ */

function initProjectCards() {
  var cards = document.querySelectorAll(".project-card");
  cards.forEach(function (card, index) {
    card.style.animationDelay = index * 0.15 + "s";
  });
}

function initTechTags() {
  var tags = document.querySelectorAll(".tech-stack li");
  tags.forEach(function (tag) {
    tag.addEventListener("mouseenter", function () {
      tag.style.background = "rgba(208, 157, 184, 0.22)";
      tag.style.borderColor = "rgba(208, 157, 184, 0.5)";
      tag.style.color = "#fceffa";
    });
    tag.addEventListener("mouseleave", function () {
      tag.style.background = "";
      tag.style.borderColor = "";
      tag.style.color = "";
    });
  });
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initProjectCards();
  initTechTags();
  initSmoothScroll();
});

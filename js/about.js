/* ============================================================
   ABOUT.JS — About Page Interactions
   ============================================================ */

function initVideoSection() {
  var video = document.querySelector(".demo-video");
  var placeholder = document.getElementById("videoPlaceholder");
  if (!video || !placeholder) return;

  video.addEventListener("loadedmetadata", function () {
    placeholder.classList.add("hidden");
  });

  video.addEventListener("error", function () {
    placeholder.classList.remove("hidden");
  });
}

function initSkillTagHovers() {
  var tags = document.querySelectorAll(".skill-tag");
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

document.addEventListener("DOMContentLoaded", function () {
  initVideoSection();
  initSkillTagHovers();
});

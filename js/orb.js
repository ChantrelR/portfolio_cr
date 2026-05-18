/* ============================================================
   ORB.JS — Animated Pearl Orb · Champagne & Blush Palette
   ============================================================ */

(function () {
  var canvas = document.getElementById("orbCanvas");
  if (!canvas) return;

  var ctx = canvas.getContext("2d");
  var W = 380, H = 380;
  canvas.width = W;
  canvas.height = H;

  var cx = W / 2, cy = H / 2;
  var t = 0;

  /* Orbital particles — blush & champagne */
  var particles = [];
  for (var i = 0; i < 52; i++) {
    var angle  = Math.random() * Math.PI * 2;
    var radius = 48 + Math.random() * 118;
    var isGold = Math.random() > 0.55;
    particles.push({
      angle:      angle,
      radius:     radius,
      speed:      0.0025 + Math.random() * 0.005,
      r:          1.0 + Math.random() * 3.2,
      opacity:    0.2 + Math.random() * 0.55,
      opacityDir: (Math.random() > 0.5 ? 1 : -1) * 0.003,
      gold:       isGold,
    });
  }

  function drawOrb(time) {
    ctx.clearRect(0, 0, W, H);

    /* Warm ambient haze */
    var haze = ctx.createRadialGradient(cx, cy, 50, cx, cy, 190);
    haze.addColorStop(0,   "rgba(214, 189, 159, 0.22)");
    haze.addColorStop(0.5, "rgba(225, 193, 182, 0.10)");
    haze.addColorStop(1,   "rgba(249, 246, 241, 0)");
    ctx.fillStyle = haze;
    ctx.beginPath();
    ctx.arc(cx, cy, 190, 0, Math.PI * 2);
    ctx.fill();

    /* Main sphere — pearl gradient */
    var orbGrad = ctx.createRadialGradient(cx - 42, cy - 48, 6, cx, cy, 130);
    orbGrad.addColorStop(0,    "rgba(255, 255, 255, 0.92)");
    orbGrad.addColorStop(0.22, "rgba(249, 240, 234, 0.75)");
    orbGrad.addColorStop(0.55, "rgba(225, 193, 182, 0.55)");
    orbGrad.addColorStop(0.82, "rgba(214, 189, 159, 0.45)");
    orbGrad.addColorStop(1,    "rgba(184, 178, 170, 0.38)");
    ctx.fillStyle = orbGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 130, 0, Math.PI * 2);
    ctx.fill();

    /* Secondary champagne depth layer */
    var depthGrad = ctx.createRadialGradient(cx + 38, cy + 42, 0, cx, cy, 130);
    depthGrad.addColorStop(0,   "rgba(168, 148, 110, 0.18)");
    depthGrad.addColorStop(0.6, "rgba(214, 189, 159, 0.08)");
    depthGrad.addColorStop(1,   "rgba(214, 189, 159, 0)");
    ctx.fillStyle = depthGrad;
    ctx.beginPath();
    ctx.arc(cx, cy, 130, 0, Math.PI * 2);
    ctx.fill();

    /* Inner pearl shimmer — breathes */
    var pulse   = Math.sin(time * 0.7) * 0.055 + 0.945;
    var shimmer = ctx.createRadialGradient(cx - 30, cy - 46, 0, cx, cy, 86 * pulse);
    shimmer.addColorStop(0,   "rgba(255, 255, 255, 0.72)");
    shimmer.addColorStop(0.4, "rgba(255, 255, 255, 0.18)");
    shimmer.addColorStop(1,   "rgba(225, 193, 182, 0)");
    ctx.fillStyle = shimmer;
    ctx.beginPath();
    ctx.arc(cx, cy, 130, 0, Math.PI * 2);
    ctx.fill();

    /* Crisp blush border ring */
    ctx.beginPath();
    ctx.arc(cx, cy, 131, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(196, 144, 124, 0.22)";
    ctx.lineWidth = 1;
    ctx.stroke();

    /* Outer champagne decorative ring */
    ctx.beginPath();
    ctx.arc(cx, cy, 156, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(214, 189, 159, 0.14)";
    ctx.lineWidth = 0.8;
    ctx.stroke();

    /* Outermost faint ring */
    ctx.beginPath();
    ctx.arc(cx, cy, 175, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(225, 193, 182, 0.07)";
    ctx.lineWidth = 0.6;
    ctx.stroke();
  }

  function drawParticles() {
    particles.forEach(function (p) {
      p.angle   += p.speed;
      p.opacity += p.opacityDir;
      if (p.opacity >= 0.78 || p.opacity <= 0.12) p.opacityDir *= -1;

      var x = cx + Math.cos(p.angle) * p.radius;
      var y = cy + Math.sin(p.angle) * p.radius;

      ctx.beginPath();
      ctx.arc(x, y, p.r, 0, Math.PI * 2);
      if (p.gold) {
        ctx.fillStyle = "rgba(214, 189, 159, " + p.opacity.toFixed(2) + ")";
      } else {
        ctx.fillStyle = "rgba(196, 144, 124, " + p.opacity.toFixed(2) + ")";
      }
      ctx.fill();
    });
  }

  function loop() {
    t += 0.016;
    drawOrb(t);
    drawParticles();
    requestAnimationFrame(loop);
  }

  loop();
})();

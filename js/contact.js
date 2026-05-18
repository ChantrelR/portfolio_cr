/* ============================================================
   CONTACT.JS — Contact Form Interactions
   ============================================================ */

function validateForm(name, email, subject, message) {
  if (!name.trim()) return { valid: false, msg: "Please enter your name." };
  if (!email.trim() || !email.includes("@") || !email.includes("."))
    return { valid: false, msg: "Please enter a valid email address." };
  if (!subject.trim()) return { valid: false, msg: "Please enter a subject." };
  if (!message.trim() || message.trim().length < 10)
    return { valid: false, msg: "Message must be at least 10 characters." };
  return { valid: true, msg: "" };
}

function initContactForm() {
  var sendBtn = document.getElementById("sendBtn");
  var feedback = document.getElementById("formFeedback");
  if (!sendBtn || !feedback) return;

  sendBtn.addEventListener("click", function () {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var result = validateForm(name, email, subject, message);
    feedback.classList.remove("form-feedback--success", "form-feedback--error");

    if (!result.valid) {
      feedback.textContent = result.msg;
      feedback.classList.add("form-feedback--error");
      return;
    }

    sendBtn.disabled = true;
    sendBtn.textContent = "Sending…";

    setTimeout(function () {
      feedback.textContent = "✓ Message sent! I'll get back to you soon.";
      feedback.classList.add("form-feedback--success");
      sendBtn.textContent = "Send Message ✦";
      sendBtn.disabled = false;
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    }, 1200);
  });
}

function initInputEffects() {
  var inputs = document.querySelectorAll(".form-input");
  inputs.forEach(function (input) {
    input.addEventListener("focus", function () {
      input.parentElement.style.transform = "scale(1.01)";
    });
    input.addEventListener("blur", function () {
      input.parentElement.style.transform = "scale(1)";
    });
  });
}

document.addEventListener("DOMContentLoaded", function () {
  initContactForm();
  initInputEffects();
});

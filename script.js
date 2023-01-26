const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const modal = document.getElementById("modal");

// Toggle navigation
toggle.addEventListener("click", function () {
  document.body.classList.toggle("show-nav");
});

// Show modal
open.addEventListener("click", function () {
  modal.classList.add("show-modal");
});

// Hide modal
close.addEventListener("click", function () {
  modal.classList.remove("show-modal");
});

// Hide modal on outside click
window.addEventListener("click", function (e) {
  return e.target === modal ? modal.classList.remove("show-modal") : false;
});

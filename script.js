// script.js
document.addEventListener("DOMContentLoaded", function () {
  // Handler untuk navigasi
  const navLinks = document.querySelectorAll("nav ul li a");
  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetSection = document.getElementById(targetId);
      targetSection.scrollIntoView({ behavior: "smooth" });
    });
  });
});

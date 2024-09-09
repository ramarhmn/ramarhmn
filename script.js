function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Tambahkan event listener untuk inisialisasi AOS
document.addEventListener("DOMContentLoaded", function() {
  AOS.init();
});


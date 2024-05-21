function toggleMenu() {
  var menu = document.getElementById("myLinks");
  var hamburger = document.querySelector(".hamburger");
  if (menu.style.display === "block") {
      menu.style.display = "none";
      hamburger.classList.remove("active");
  } else {
      menu.style.display = "block";
      hamburger.classList.add("active");
  }
}
function closeMenu() {
  var menu = document.getElementById("myLinks");
  var hamburger = document.querySelector(".hamburger");
  menu.style.display = "none";
  hamburger.classList.remove("active");
}
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll(".nav-list a");

  function changeActiveLink() {
      let index = sections.length;

      while (--index && window.scrollY + 50 < sections[index].offsetTop) { }

      navLinks.forEach((link) => link.classList.remove("nav-active"));
      navLinks[index].classList.add("nav-active");
  }

  changeActiveLink();
  window.addEventListener("scroll", changeActiveLink);
});
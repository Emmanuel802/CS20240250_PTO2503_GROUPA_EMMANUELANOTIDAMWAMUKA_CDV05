const hamburgerIcon = document.querySelector(".hamburger-icon");
const menuLinks = document.querySelector(".menu-links");

hamburgerIcon.addEventListener("click", () => {
  hamburgerIcon.classList.toggle("open");
  menuLinks.classList.toggle("open");
});

menuLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburgerIcon.classList.remove("open");
    menuLinks.classList.remove("open");
  });
});

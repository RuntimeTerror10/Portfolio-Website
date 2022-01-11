const navLinks = document.querySelectorAll(".nav-link");
const active = navLinks[0];

active.classList.add("active");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((href) => {
      href.classList.remove("active");
    });
    link.classList.add("active");
  });
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.style.top = 0;
    nav.style.left = 0;
    nav.style.borderRadius = 0;
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.style.top = "-100%";
    nav.style.left = "200%";
    nav.style.borderRadius = "50%";
    menuOpen = false;
  }
});
nav.childNodes.forEach((node) => {
  node.addEventListener("click", () => {
    if (menuOpen) {
      menuBtn.classList.remove("open");
      nav.style.top = "-100%";
      nav.style.left = "200%";
      nav.style.borderRadius = "50%";
      menuOpen = false;
    }
  });
});

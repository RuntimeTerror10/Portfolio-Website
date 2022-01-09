const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    nav.style.top = 0;
    nav.style.transform = "scale(1)";
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    nav.style.top = 100 + "%";
    nav.style.transform = "scale(-1)";
    menuOpen = false;
    nav.ontransitionend = () => {
      nav.style.transform = "scale(1)";
    };
  }
});
nav.childNodes.forEach((node) => {
  node.addEventListener("click", () => {
    if (menuOpen) {
      menuBtn.classList.remove("open");
      nav.style.top = 100 + "%";
      nav.style.transform = "scale(-1)";
      menuOpen = false;
      nav.ontransitionend = () => {
        nav.style.transform = "scale(1)";
      };
    }
  });
});

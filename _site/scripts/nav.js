const navLinks = document.querySelectorAll(".nav-link");
const active = navLinks[0];

active.classList.add("active");
initProjectCardFlip();

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (link.innerText == "Projects") {
      initProjectCardFlip();
    }
    navLinks.forEach((href) => {
      href.classList.remove("active");
    });
    link.classList.add("active");
  });
});

function initProjectCardFlip() {
  setTimeout(() => {
    const readBtn = document.querySelectorAll(".read-btn");
    const backBtn = document.querySelectorAll(".back-btn");

    readBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        btn.parentNode.parentNode.parentNode.classList.add("flip-card");
      });
    });

    backBtn.forEach((btn) => {
      btn.addEventListener("click", function () {
        btn.parentNode.parentNode.classList.remove("flip-card");
      });
    });
  }, 2000);
}

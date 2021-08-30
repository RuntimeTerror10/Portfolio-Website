const avatarTextContainer = document.querySelector(".avatar-text-container");
const avatarContainer = document.querySelector(".avatar-container");
const aboutContainer = document.querySelector(".about-me-container");
const idle = document.querySelector("#art3");
const speak1 = document.querySelector("#art1");
const speak2 = document.querySelector("#art2");
const idle2 = document.querySelector("#art4");

setTimeout(function () {
  idle.style.zIndex = -3;
}, 1000);
speak2.addEventListener("animationend", () => {
  speak2.classList.remove("speaking-animation");
  idle.style.zIndex = "3";
  avatarContainer.style.opacity = 0;
  setTimeout(function () {
    avatarContainer.style.display = "none";
  }, 1200);
  aboutContainer.style.display = "flex";
});

const idle = document.querySelector("#art3");
const speak1 = document.querySelector("#art1");
const speak2 = document.querySelector("#art2");
const btn = document.querySelector(".btn");

speak2.addEventListener("animationend", () => {
  speak2.classList.remove("speaking-animation");
  idle.style.zIndex = "3";
  btn.style.opacity = "1";
});

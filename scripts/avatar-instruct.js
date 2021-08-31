const idle = document.querySelector("#art4");
const speak1 = document.querySelector("#art5");
const speak2 = document.querySelector("#art6");
const instruction = document.querySelector(".instruct");

setTimeout(function () {
  idle.style.zIndex = -3;
}, 1000);
speak2.addEventListener("animationend", () => {
  speak2.classList.remove("instruction");
  idle.style.zIndex = "2";
  setTimeout(function () {
    instruction.style.display = "none";
  }, 1500);
});

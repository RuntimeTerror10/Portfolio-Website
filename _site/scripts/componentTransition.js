const avatar = document.querySelector(".goggle-avatar");
const text = document.querySelector(".about-text-container");
const links = document.querySelector(".social-container");

showComponent(avatar, 100);
showComponent(text, 200);
showComponent(links, 300);

function showComponent(component, duration) {
  setTimeout(() => {
    component.style.opacity = 1;
    component.style.transform = "scale(1)";
  }, duration);
}

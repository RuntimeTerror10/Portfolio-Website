const readBtn = document.querySelectorAll(".read-btn");
  const cardInner = document.querySelector(".project-card-inner");
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

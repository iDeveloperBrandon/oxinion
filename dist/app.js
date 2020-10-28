const submitBtn = document.querySelector(".submit-btn");
const displayForm = document.querySelector(".displayForm");
const sideForm = document.querySelector(".side__form");

displayForm.addEventListener("click", function () {
  sideForm.style.display = "block";
  document.querySelector(".createForm").style.display = "none";
});

submitBtn.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(123);
});

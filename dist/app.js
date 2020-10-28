const submitBtn = document.querySelector(".submit-btn");
const displayForm = document.querySelector(".displayForm");
const sideForm = document.querySelector(".side__form");
const sideFormLocation = document.querySelector(".side__form__location");
const sideFormDesc = document.querySelector(".side__form__description");

displayForm.addEventListener("click", function () {
  sideForm.style.display = "block";
  document.querySelector(".createForm").style.display = "none";
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".createForm").style.display = "block";
  sideForm.style.display = "none";

  const valueLocation = sideFormLocation.value;
  const valueDesc = sideFormDesc.value;

  console.log(valueLocation, valueDesc);
});

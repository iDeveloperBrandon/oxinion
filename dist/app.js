const submitBtn = document.querySelector(".submit-btn");
const displayForm = document.querySelector(".displayForm");
const sideForm = document.querySelector(".side__form");
const sideFormLocation = document.querySelector(".side__form__location");
const sideFormDesc = document.querySelector(".side__form__description");
const posts = document.querySelector(".posts");

displayForm.addEventListener("click", function () {
  sideForm.style.display = "block";
  document.querySelector(".createForm").style.display = "none";
});

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.querySelector(".createForm").style.display = "block";
  sideForm.style.display = "none";

  let valueLocation = sideFormLocation.value;
  let valueDesc = sideFormDesc.value;

  console.log(valueLocation, valueDesc);
  posts.innerHTML = `
  <article class="post">
    <small><i class="fas fa-map-marker-alt"></i>Toronto, Canada</small>
    <img src="" alt="example" />
    <p>I want to be a developer in Canada. Can i?</p>
    <hr />
    <i class="far fa-heart"></i> 10
    <i class="fas fa-stopwatch"></i> 10:04
  </article>`;

  sideFormLocation.value = "";
  sideFormDesc.value = "";
});

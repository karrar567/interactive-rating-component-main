const body = document.body;
const ratingCard = document.getElementById("rating-card");
const thankCard = document.getElementById("thank-card");
const ratingSpan = document.getElementById("rating");
const ratingForm = document.getElementById("rating-form");
const ratingBtns = document.getElementById("rating-container").children;
const ratingBtnsList = Array.from(ratingBtns);
let selected = 0;
let rating = 0;

console.log(ratingBtnsList[0].value);

function removeSelected(array, removedClass) {
  array.forEach((element) => {
    if (element.className == removedClass) {
      element.classList.remove(removedClass);
    }
  });
}

ratingBtnsList.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (selected === 0) {
      btn.classList.add("selected");
      selected = 1;
      rating = btn.value;
    } else if (selected === 1) {
      removeSelected(ratingBtnsList, "selected");
      btn.classList.add("selected");
      rating = btn.value;
    }
  });
});

ratingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (rating > 0) {
    body.removeChild(ratingCard);
    ratingSpan.innerHTML = `${rating}`;
    thankCard.style.display = "flex";
  }
});

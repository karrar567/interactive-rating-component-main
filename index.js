const ratingBtns = document.getElementById("rating-container").children;
const ratingBtnsList = Array.from(ratingBtns);
let selected = 0;
let rating = 0;

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
    } else if (selected === 1) {
      removeSelected(ratingBtnsList, "selected");
      btn.classList.add("selected");
    }
  });
});

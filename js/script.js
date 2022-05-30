const hamburger = document.querySelector(".hamburger");
const ul = document.querySelector("ul");

hamburger.addEventListener("click", (e) => {
  // Show nav links
  ul.classList.toggle("active");
  // Change hamburger to x
  hamburger.classList.toggle("line-change");
});

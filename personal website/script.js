let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

let scrollUp = document.querySelector(".up");

window.onscroll = function () {
  console.log(this.scrollY);
  if (this.scrollY >= 1250) {
    scrollUp.classList.add("show");
  } else {
    scrollUp.classList.remove("show");
  }
};

scrollUp.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

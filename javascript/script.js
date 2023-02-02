// Download pdf file when click the button
document.getElementById("downloadButton").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "../pdf/My Resume.pdf";
  link.download = "My Resume.pdf";
  link.click();
});

// change Year
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("currentYear").innerHTML = currentYear;

// Scroll to up
let scrollUp = document.querySelector(".up");

window.onscroll = function () {
  // console.log(this.scrollY);
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

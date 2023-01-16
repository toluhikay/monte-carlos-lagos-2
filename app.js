const hamburger = document.querySelector(".hamburger");
const ulNavigation = document.querySelector(".navigation-ul");
const overlayDiv = document.querySelector(".navigation-overlay");
const closeNav = document.querySelector(".close-nav");

hamburger.addEventListener("click", function () {
  ulNavigation.classList.toggle("show-navbar");
  overlayDiv.classList.toggle("show-overlay");
});

closeNav.addEventListener("click", function () {
  ulNavigation.classList.contains("show-navbar") ? ulNavigation.classList.remove("show-navbar") : "";
  overlayDiv.classList.contains("show-overlay") ? overlayDiv.classList.remove("show-overlay") : "";
});

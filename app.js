// navigation logic
const hamburger = document.querySelector(".hamburger");
const ulNavigation = document.querySelector(".navigation-ul");
const overlayDiv = document.querySelector(".navigation-overlay");
const closeNav = document.querySelector(".close-nav");
const header = document.querySelector(".header");
const headerDiv = document.querySelector(".header-div");
const hero = document.querySelector(".hero");

hamburger.addEventListener("click", function () {
  ulNavigation.classList.toggle("show-navbar");
  overlayDiv.classList.toggle("show-overlay");
});

closeNav.addEventListener("click", function () {
  ulNavigation.classList.contains("show-navbar") ? ulNavigation.classList.remove("show-navbar") : "";
  overlayDiv.classList.contains("show-overlay") ? overlayDiv.classList.remove("show-overlay") : "";
});

window.addEventListener("scroll", function () {
  changeHeaderbg();
});
function changeHeaderbg() {
  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
    header.style.background = "#c31516";
    header.style.transition = "all 1s ease-in-out";
    // header.style.padding = "20px";
    headerDiv.style.padding = "0px 0px";
  } else {
    header.style.background = "none";
    header.style.transition = "all 1s ease-in-out";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  displayFeatures(featuresArray);
  // displayThreeImages(ImageArray);
});

//about logic
const featuresArray = [
  { id: 1, text: "Protective Fencings", icon: `<iconify-icon icon="game-icons:spiked-fence"></iconify-icon>` },
  { id: 2, text: "Every Minute Power", icon: `<iconify-icon icon="ic:sharp-wind-power"></iconify-icon>` },
  { id: 3, text: "Electricity", icon: `<iconify-icon icon="healthicons:electricity"></iconify-icon>` },
  { id: 4, text: "CCTV Monitoring", icon: `<iconify-icon icon="game-icons:cctv-camera"></iconify-icon>` },
  { id: 5, text: "Kids Arena", icon: `<iconify-icon icon="mdi:kids-room"></iconify-icon>` },
  { id: 6, text: "Landscape", icon: `<iconify-icon icon="game-icons:burning-forest"></iconify-icon>` },
  { id: 7, text: "Shopping Malls", icon: `<iconify-icon icon="ic:twotone-shopping-cart-checkout"></iconify-icon>` },
  { id: 8, text: "Soccer Pitch", icon: `<iconify-icon icon="game-icons:soccer-field"></iconify-icon>` },
  { id: 9, text: "Surfing", icon: `<iconify-icon icon="game-icons:wave-surfer"></iconify-icon>` },
  { id: 10, text: "Beach", icon: `<iconify-icon icon="fluent-emoji-high-contrast:beach-with-umbrella"></iconify-icon>` },
  { id: 11, text: "Swimming Pool", icon: `<iconify-icon icon="fa-solid:swimming-pool"></iconify-icon>` },
  { id: 12, text: "Resort", icon: `<iconify-icon icon="game-icons:hill-fort"></iconify-icon>` },
];
const featuresDiv = document.querySelector(".features-div");

function displayFeatures(features) {
  let displayFeaturesDiv = features.map((item) => {
    return `<div key=${item.id} class="feature-div">
                <p class="feature-icon">${item.icon}</p>
                <p class="feature-p">${item.text}</p>
            </div>
        `;
  });
  displayFeaturesDiv = displayFeaturesDiv.join("");
  featuresDiv.innerHTML = displayFeaturesDiv;
}

// three image logic
const ImageArray = [
  { id: 1, img: "./images/first.jpg" },
  { id: 2, img: "./images/second.jpg" },
  { id: 3, img: "./images/three.jpg" },
];
const images = document.querySelectorAll(".image-div");
const modal = document.querySelector(".modal-div");
const closeModal = document.querySelector(".close-modal");
const modalImage = document.querySelector(".modal-img");

images.forEach((image) => {
  image.addEventListener("click", function () {
    modal.classList.add("show-modal");
    let firstChildSource = image.firstElementChild.src;
    modalImage.src = firstChildSource;
  });
});

closeModal.addEventListener("click", function () {
  modal.classList.contains("show-modal") ? modal.classList.remove("show-modal") : "";
});

// inspection logic
const inspectionButton = document.querySelector(".schedule-button");
const inspection = document.querySelector(".inspection");
const closeInspection = document.querySelector(".close-inspection-modal");

inspectionButton.addEventListener("click", function () {
  inspection.classList.add("show-inspection");
});

closeInspection.addEventListener("click", function () {
  inspection.classList.contains("show-inspection") ? inspection.classList.remove("show-inspection") : "";
});

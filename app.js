// navigation logic
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

window.addEventListener("scroll", function () {});

window.addEventListener("DOMContentLoaded", () => {
  displayFeatures(featuresArray);
  displayThreeImages(ImageArray);
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
const threeImageDiv = document.querySelector(".three-image-div");
function displayThreeImages(images) {
  let displayImagesDiv = images.map((item) => {
    return `
    <div class="image-div">
      <img key=${item.id} src=${item.img} alt="" class="three-img">
      <div class="image-overlay"></div>
    </div>
    `;
  });
  displayImagesDiv = displayImagesDiv.join("");
  threeImageDiv.innerHTML = displayImagesDiv;
}

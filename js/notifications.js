//////////////////////////////////////////////

///////////////////////////////////
// Popup For Link To Open a Image
///////////////////////////////////

let links = [...document.querySelectorAll(".box")];

/////Popop


let popup = document.querySelector(".popup");

let closeBtn = document.querySelector(".close-btn");

let notifName = document.querySelector(".notif-name");

let largeImage = document.querySelector(".large-image");

let imageIndex = document.querySelector(".index-");

let leftArrow = document.querySelector(".left-arrow");

let rightArrow = document.querySelector(".right-arrow");

let index = 0;

let navBar = document.querySelector(".navbar");

links.forEach((link, i) => {
  link.addEventListener("click", () => {
    updateImage(i);
    popup.classList.toggle("active");
    navBar.classList.toggle("sticky-top");
  });
});

let updateImage = (i) => {
  let path = `../../images/notif-${i + 1}.jpg`;
  largeImage.src = path;
  let title = `الإعلان (${i + 1})`;
  // notifName.innerHTML = path.slice(13, 20)
  notifName.innerHTML = title;
  imageIndex.innerHTML = `0${i + 1}`;
  index = i;
};

closeBtn.addEventListener("click", () => {
  popup.classList.toggle("active");
  navBar.classList.toggle("sticky-top");
});

leftArrow.addEventListener('click', () => {
  if (index > 0) {
    updateImage(index - 1)
  }
})

rightArrow.addEventListener('click', () => {
  if (index < links.length - 1) {
    updateImage(index + 1)
  }
})


//////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// Move Class Active From Section To Section   Method 1
///////////////////////////////////////////////////////////

let currentLoc = window.location.pathname.toString().slice(1);

let allLinks = document.querySelectorAll(".path");

console.log(currentLoc);

allLinks.forEach((link) => {
  // let datar = link.dataset.href;
  let dataOne = link.getAttribute("data-href");

  if (dataOne === currentLoc) {
    link.classList.add("active");
  }
});


////////////////////////////////////////
///// Create Box Slider Responsive
////////////////////////////////////////

new Swiper ('.card-wrapper', {
    loop: true,
    spaceBetween: 60,
  
    // Pagination Bullet
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },

    autoplay: {
        delay: 3000,
        disableOnInteraction: false, /// if I click On Button Next Or Pre The Autoplay Stay Work 
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    // Responsive Breakpoints
    breakpoints: {
        0:{
            slidesPerView: 1
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
  });


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

/////////////////////////////////////////////////////

//////////////////////////////////////////////

///////////////////////////////////
// Popup For Link To Open a Image
///////////////////////////////////

let cards = [...document.querySelectorAll(".card-list .card-item")];


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

cards.forEach((card, i) => {
  card.addEventListener("click", () => {
    updateImage(i);
    popup.classList.toggle("active");
    navBar.classList.toggle("sticky-top");
  });
});

let updateImage = (i) => {
  let path = `../../images/decision-${i + 1}.jpg`;
  largeImage.src = path;
  let title = `القرار (${i + 1})`;
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
  if (index < cards.length - 1) {
    updateImage(index + 1)
  }
})
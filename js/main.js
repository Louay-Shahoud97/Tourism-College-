//////////////////////////////////////////
// Animate One Elemnt When Scroll Down
/////////////////////////////////////////

// window.onscroll = function () {
//     if (window.scrollY >= section.offsetTop - 300) {
//         title.classList.add("animate")
//     } else {
//         title.classList.remove("animate")
//     }
// }

/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////
// Animate Elements When Scroll Down
//////////////////////////////////////

let title = document.querySelectorAll(".title");

window.addEventListener("scroll", () => {
  title.forEach((tit) => {
    if (window.scrollY >= tit.offsetTop - 350) {
      tit.classList.add("animate");
    }
  });
});

//////////////////////////////////////////////////////////////////////////

/////////////////////////////////////
// Show Top Button When Scroll Down
/////////////////////////////////////

let doctors = document.querySelector(".doctors");

let upButton = document.querySelector(".top");

window.onscroll = function () {
  if (window.scrollY >= doctors.offsetTop - 300) {
    upButton.style.opacity = "1";
  } else {
    upButton.style.opacity = "0";
  }
};

/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////
// Start Increse Numbers For All ELement When Scroll Down
//////////////////////////////////////////////////////////////

let goals = document.querySelectorAll(".goal");

let circles = document.querySelectorAll(".circle");

let started = false; /// Function Not Work

window.addEventListener("scroll", () => {
  circles.forEach((circle) => {
    if (window.scrollY >= circle.offsetTop - 300) {
      if (started === false) {
        goals.forEach((elemnt) => {
          startConting(elemnt);
        }); /// All Index
      }
      started = true;
    }
  });
});

function startConting(ele) {
  let goal = ele.dataset.goal;

  let counting = setInterval(() => {
    ele.textContent++;
    if (ele.textContent === goal) {
      clearInterval(counting);
    }
  }, 800 / goal);
}

// window.onscroll = function () {
//   if(window.scrollY >= circle.offsetTop - 300) {
//     if (started === false) {
//       goals.forEach((elemnt) => startConting(elemnt));
//     }
//     started = true
//   }
// }

////////////////////////////////////////////////////////////////////////////////////

///////////////////////////
// Start CountDown Date
//////////////////////////

let countDownDate = new Date("Dec 31, 2025 23:59:59").getTime(); //getTime: 1000ms = 1s(time from 1970 from Now)

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Get The Diffrence Between Countdate and Datenow
  let dateDiff = countDownDate - dateNow;

  //Get Time Units

  // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24)

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));

  document.querySelector(".days").textContent = days;

  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / 1000 / 60 / 60)
    .toString()
    .padStart(2, "0");

  document.querySelector(".hours").textContent = hours;

  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / 1000 / 60)
    .toString()
    .padStart(2, "0");

  document.querySelector(".minutes").textContent = minutes;

  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, "0");

  document.querySelector(".seconds").textContent = seconds;
}, 1000);

//////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// Move Class Active From Section To Section   Method 1
///////////////////////////////////////////////////////////

// let currentLoc = window.location.pathname.toString().slice(1);

// let allLinks = document.querySelectorAll(".path");

// console.log(currentLoc);

// let updateActive = allLinks.forEach((link) => {
//   // let datar = link.dataset.href;
//   let dataOne = link.getAttribute("data-href");

//   if (dataOne === currentLoc) {
//     link.classList.add("active");
//   }
// });

/////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////
// Move Class Active From Section To Section   Method 2
////////////////////////////////////////////////////////

let currentLocation = window.location.pathname;

let links = document.querySelectorAll(".nav-item .path");

links.forEach((link) => {
  let linkPath = new URL(link.href).pathname
  if (linkPath === currentLocation) {
    link.classList.add("active")
  }
  if (link.href.includes(currentLoc)) {
    link.classList.remove("active");
  }
});



///////////////////////////////////////////////////////////////////////////

////////////////////////////////////////
// When Click On Links Cancel The foucs
/////////////////////////////////////////

let partOfLinks = document.querySelectorAll(".dropdown-toggle");

partOfLinks.forEach((link) => {
  link.addEventListener("focus", () => {
    link.style.color = "#374259";
  });
});

let reem = [
  "tonali",
  "reem",
  "reem",
  "reem",
  "reem",
  "reem",
  "reem",
  "reem",
  "reem",
  "reem",
];

/////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////
// When I Click To Links Show Dropdown-menu
////////////////////////////////////////////

// let dropMenu = document.querySelectorAll(".dropdown-menu.show")

// partOfLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     dropMenu.forEach((drop) => {
//      if (e.target.id === drop.id) {
//       drop.style.display = "block"
//       drop.style.opacity = "1"
//      }
//     })
//   })
// })

//////////////////////////////////////////////////////////////////////////////

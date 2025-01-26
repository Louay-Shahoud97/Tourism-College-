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

///////////////////////////////////////////////////////////////

/////////////////////////
// Put Numbers (First child) To ul List
/////////////////////////

let liList = document.querySelectorAll("#ul-numbers li");

for (let i = 0; i < liList.length; i++) {
  let span = document.createElement("span");

  let number = document.createTextNode(`${[i + 1]}- `);

  span.append(number);

  liList[i].prepend(span);
}

///////////////////////////////////////////////////////////////

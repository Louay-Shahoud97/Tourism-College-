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


// ///////////////////////////////////////////////////////////////

// //////////////////////////////////////////////
// // Create Elements In ul And Loop For Array (Hotel)
// ////////////////////////////////////////////

let subjects = [
  "أساسيات الفنادق",
  "إدارة الفنادق",
  "المحاسبة",
  "الإحصاء السياحي والفندقي",
  "إدارة المكاتب الامامية",
  "إدارة الأغذية والمشروبات",
  "تصميم قوائم الطعام",
  "إدارة الموارد البشرية",
  "التسويق الفندقي",
  "دراسة جدوى المشروعات السياحية",
  "إدارة المطاعم",
  "إدارة الجودة الفندقية",
];

let desc = [
  "لمعرفة أهمية النشاط الفندقي كجزء أصيل من صناعة السياحة.",
  "لمعرفة أنواع الفنادق وأقسامها المختلفة.",
  "وتشمل المحاسبة الإدارية ومحاسبة التكاليف الفندقية، ودراسة الموازنة العامة وقوائم الدخل للاقسام المختلفة.",
  "وكيفية توظيف واستخدام الدراسات الإحصائية في مجال الفنادق.",
  "وكيفية التعامل مع العميل بداية من الحجز حتى المغادرة، والعمليات التي تتم خلال فترة الاقامة.",
  "وأهمية ذلك القسم الحيوي في المنشات الفندقية وكيفية العمل على تقديم مستوى راقي من الخدمة للعملاء.",
  "التعرف على أسس ومعايير تصميم قوائم الطعام المختلفة.",
  "وأهميتها حيث أنها تمثل عصب العمل داخل الفنادق، وكيفية اختيار العاملين وتدريبهم وتقييم ادائهم.",
  "وكيفية زياده الايرادات من خلال الدراسة الجيدة للشرائح السوقية المختلفة وما يحتاجه العملاء.",
  "التعرف على الخطوات اللازمة لإعداد دراسة جدوى لمشروع سياحي.",
  "أنواعها المختلفة وفرص العمل المختلفة بها.",
  "أهمية تطبيق الجودة في كل المنشآت الفندقية وأقسامها المختلفة بهدف إرضاء العملاء وتحقيق أعلى مستويات من الربح.",
];

for (let i = 0; i < subjects.length; i++) {
  let li = document.createElement("li");

  ////////////
  // Title /////
  //////////////

  let h6 = document.createElement("h6");

  let content = document.createTextNode(`- ${subjects[i]}:`);

  h6.appendChild(content);

  li.appendChild(h6);

  ////////////
  // Paraghraph /////
  //////////////

  let p = document.createElement("p");

  let paraText = document.createTextNode(` ${desc[i]}`);

  p.appendChild(paraText);

  li.appendChild(p);

  //////////////////////////////////////

  let titles = document.querySelector(".hotel-managment ul.one");

  titles.appendChild(li);

  li.style.paddingBottom = "40px";

  p.style.marginBottom = "0";

  h6.style.marginBottom = "10px";

  h6.style.fontWeight = "bold";

}

import projects from "../content/pro.js   ";
const containerEl = document.querySelector(".cards-grid");
const menubtn = document.querySelector(".menu-btn");
const mobileNav = document.querySelector(".nav");
const navLi = document.querySelectorAll(".nav_li");

let menuOpen = false;

function linkAction() {
  /*Active link*/
  navLi.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  /*Remove menu mobile*/
  mobileNav.classList.remove("show-nav");
  menubtn.classList.remove("open");
  menuOpen = false;
}
navLi.forEach((n) => n.addEventListener("click", linkAction));

menubtn.addEventListener("click", () => {
  if (!menuOpen) {
    menubtn.classList.toggle("open");
    mobileNav.classList.toggle("show-nav");
    menuOpen = true;
  } else {
    menubtn.classList.remove("open");
    mobileNav.classList.toggle("show-nav");
    menuOpen = false;
  }
});

// Loading cards using Pro.js content

// console.log(projects.length)

function createCards(key) {
  let cardEl = document.createElement("div");
  let cardContentEl = document.createElement("div");
  let cardImg = document.createElement("img");
  let cardTitle = document.createElement("h3");
  let cardBody = document.createElement("p");
  let cardBtn = document.createElement("a");

  cardEl.classList.add("card", "mix");
  cardEl.dataset.item = `${key.type}`;
  cardImg.classList.add("card-img");
  cardContentEl.classList.add("card-content");
  cardTitle.classList.add("card-title");
  cardBody.classList.add("card-body");
  cardBtn.classList.add("button");
  cardBtn.target = "_blank";

  cardImg.src = `${key.img}`;
  cardTitle.innerHTML = `${key.title}`;
  cardBody.innerHTML = `${key.body}`;
  cardBtn.href = `${key.link}`;
  cardBtn.innerHTML = "View Website";

  cardContentEl.appendChild(cardTitle);
  cardContentEl.appendChild(cardBody);
  cardContentEl.appendChild(cardBtn);

  cardEl.appendChild(cardImg);
  cardEl.appendChild(cardContentEl);

  containerEl.appendChild(cardEl);
}

projects.map(createCards);
// ****

// Cards Filtering

let controlsTabs = document.querySelectorAll(".control-tabs");

let cards = document.querySelectorAll(".card");

for (let i = 0; i < controlsTabs.length; i++) {
  controlsTabs[i].addEventListener("click", function () {
    for (let j = 0; j < controlsTabs.length; j++) {
      controlsTabs[j].classList.remove("active");
    }
    this.classList.add("active");

    let dataFilter = this.getAttribute("data-filter");

    for (let k = 0; k < cards.length; k++) {
      cards[k].classList.remove("activecard");
      cards[k].classList.add("hide");

      if (
        cards[k].getAttribute("data-item") == dataFilter ||
        dataFilter == "all"
      ) {
        cards[k].classList.remove("hide");
        cards[k].classList.add("activecard");
      }
    }
  });
}

// ****

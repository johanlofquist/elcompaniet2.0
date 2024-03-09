document.addEventListener("DOMContentLoaded", function () {
  const wrapper = document.createElement("div");
  const cursor = document.createElement("div");
  wrapper.classList.add("glow-cursor-wrapper");
  cursor.classList.add("glow-cursor");

  document.body.appendChild(wrapper);
  wrapper.appendChild(cursor);

  document.addEventListener("mousemove", function (e) {
    var cursorSize = 1000; // Storleken på din glödeffekt
    var halfSize = cursorSize / 2;

    var x = e.clientX - halfSize;
    var y = e.clientY - halfSize;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
  });
});

let hemBtn = document.getElementById("hem__btn");
let tjansterBtn = document.getElementById("tjanster__btn");
let omBtn = document.getElementById("om__btn");
let kontaktBtn = document.getElementById("kontakt__btn");

window.addEventListener("scroll", function (e) {
  console.log(this.window.scrollY);
  if (this.window.scrollY < 400) {
    hemBtn.classList.add("active");
    tjansterBtn.classList.remove("active");
    omBtn.classList.remove("active");
    kontaktBtn.classList.remove("active");
  } else if (this.window.scrollY < 2000) {
    hemBtn.classList.remove("active");
    tjansterBtn.classList.add("active");
    omBtn.classList.remove("active");
    kontaktBtn.classList.remove("active");
  } else if (this.window.scrollY < 2400) {
    hemBtn.classList.remove("active");
    tjansterBtn.classList.remove("active");
    omBtn.classList.add("active");
    kontaktBtn.classList.remove("active");
  } else {
    hemBtn.classList.remove("active");
    tjansterBtn.classList.remove("active");
    omBtn.classList.remove("active");
    kontaktBtn.classList.add("active");
  }
});

let burgerMenu = document.querySelector("#hamburger__menu");
let lineOne = document.querySelector("#line__one");
let lineTwo = document.querySelector("#line__two");
let menu = document.querySelector(".menu");
let bodyEl = document.querySelector("body");

let isToggled = false;

burgerMenu.addEventListener("click", function () {
  if (isToggled == false) {
    lineOne.classList.remove("burgerSpinOneBack");
    lineTwo.classList.remove("burgerSpinTwoBack");
    lineOne.classList.add("burgerSpinOneToX");
    lineTwo.classList.add("burgerSpinTwoToX");
    menu.classList.remove("hide__menu");
    menu.classList.add("show__menu");
    bodyEl.style.overflow = "hidden";

    isToggled = true;
  } else {
    lineOne.classList.remove("burgerSpinOneToX");
    lineTwo.classList.remove("burgerSpinTwoToX");
    lineOne.classList.add("burgerSpinOneBack");
    lineTwo.classList.add("burgerSpinTwoBack");
    menu.classList.remove("show__menu");
    menu.classList.add("hide__menu");
    bodyEl.style.overflow = "auto";
    isToggled = false;
  }
});

let menuHome = document.querySelector("#menu__hem");
let menuServices = document.querySelector("#menu__services");
let menuOm = document.querySelector("#menu__om");
let menuKontakt = document.querySelector("#menu__kontakt");

menuHome.addEventListener("click", function () {
  lineOne.classList.remove("burgerSpinOneToX");
  lineTwo.classList.remove("burgerSpinTwoToX");
  lineOne.classList.add("burgerSpinOneBack");
  lineTwo.classList.add("burgerSpinTwoBack");
  menu.classList.remove("show__menu");
  menu.classList.add("hide__menu");
  bodyEl.style.overflow = "auto";
  isToggled = false;
});

menuServices.addEventListener("click", function () {
  lineOne.classList.remove("burgerSpinOneToX");
  lineTwo.classList.remove("burgerSpinTwoToX");
  lineOne.classList.add("burgerSpinOneBack");
  lineTwo.classList.add("burgerSpinTwoBack");
  menu.classList.remove("show__menu");
  menu.classList.add("hide__menu");
  bodyEl.style.overflow = "auto";
  isToggled = false;
});

menuOm.addEventListener("click", function () {
  lineOne.classList.remove("burgerSpinOneToX");
  lineTwo.classList.remove("burgerSpinTwoToX");
  lineOne.classList.add("burgerSpinOneBack");
  lineTwo.classList.add("burgerSpinTwoBack");
  menu.classList.remove("show__menu");
  menu.classList.add("hide__menu");
  bodyEl.style.overflow = "auto";
  isToggled = false;
});

menuKontakt.addEventListener("click", function () {
  lineOne.classList.remove("burgerSpinOneToX");
  lineTwo.classList.remove("burgerSpinTwoToX");
  lineOne.classList.add("burgerSpinOneBack");
  lineTwo.classList.add("burgerSpinTwoBack");
  menu.classList.remove("show__menu");
  menu.classList.add("hide__menu");
  bodyEl.style.overflow = "auto";
  isToggled = false;
});

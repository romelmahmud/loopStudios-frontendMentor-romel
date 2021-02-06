const burger = document.querySelector(".nav__hamBurger");
const mobileLinks = document.querySelector(".nav__mobileLinks");
const body = document.querySelector("body");

// toggle function

const toggle = () => {
  if (mobileLinks.classList.contains("show")) {
    mobileLinks.classList.remove("show");
    mobileLinks.classList.add("hidden");
    //add/remove scroll
    body.classList.add("scroll");
    body.classList.remove("no-scroll");
    //changing close icon to buger icon
    burger.children[0].setAttribute("src", "/images/icon-hamburger.svg");
  } else {
    mobileLinks.classList.add("show");
    mobileLinks.classList.remove("hidden");
    //add/remove scroll
    body.classList.remove("scroll");
    body.classList.add("no-scroll");
    //changing burger icon to close icon
    burger.children[0].setAttribute("src", "/images/icon-close.svg");
  }
  return toggle;
};

// displaing mobile menu
burger.addEventListener("click", toggle());

// disable mobile menu when link clicked

const links = document.querySelectorAll(".nav__mobileLinks a");

const linkList = Array.from(links);

linkList.map((link) => link.addEventListener("click", toggle()));

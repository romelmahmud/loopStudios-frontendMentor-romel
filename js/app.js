const burger = document.querySelector(".nav__hamBurger");
const mobileLinks = document.querySelector(".nav__mobileLinks");
const body = document.querySelector("body");
// buger icon attribute

// console.log(burger.children[0].);

burger.addEventListener("click", () => {
  if (mobileLinks.classList.contains("show")) {
    mobileLinks.classList.remove("show");
    mobileLinks.classList.add("hidden");
    body.classList.add("scroll");
    body.classList.remove("no-scroll");
    burger.children[0].setAttribute("src", "/images/icon-hamburger.svg");
  } else {
    mobileLinks.classList.add("show");
    mobileLinks.classList.remove("hidden");
    body.classList.remove("scroll");
    body.classList.add("no-scroll");
    burger.children[0].setAttribute("src", "/images/icon-close.svg");
  }
});
console.log(mobileLinks.classList);

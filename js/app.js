const burger = document.querySelector(".nav__hamBurger");
const mobileLinks = document.querySelector(".nav__mobileLinks");
const body = document.querySelector("body");

burger.addEventListener("click", () => {
  if (mobileLinks.classList.contains("show")) {
    mobileLinks.classList.remove("show");
    mobileLinks.classList.add("hidden");
    body.classList.add("scroll");
    body.classList.remove("no-scroll");
  } else {
    mobileLinks.classList.add("show");
    mobileLinks.classList.remove("hidden");
    body.classList.remove("scroll");
    body.classList.add("no-scroll");
  }
});
console.log(mobileLinks.classList);

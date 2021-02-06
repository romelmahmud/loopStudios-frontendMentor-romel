const burger = document.querySelector(".nav__hamBurger");
const mobileLinks = document.querySelector(".nav__mobileLinks");

burger.addEventListener("click", () => {
  if (mobileLinks.classList.contains("show")) {
    mobileLinks.classList.remove("show");
    mobileLinks.classList.add("hidden");
  } else {
    mobileLinks.classList.add("show");
    mobileLinks.classList.remove("hidden");
  }
});
console.log(mobileLinks.classList);

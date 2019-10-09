// TOGGLE NAV MENU ANIMATION
const menuTrigger = document.querySelector(".menu-trigger");
const headerNav = document.querySelector(".header-nav");
const links = document.querySelectorAll(".header-nav ul li");
const a = document.querySelectorAll(".header-nav ul li a")

menuTrigger.addEventListener("click", () => {
    headerNav.classList.toggle("open");
});
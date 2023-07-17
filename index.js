const menuButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav--links");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

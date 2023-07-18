const menuButton = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav--links");

menuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});

//For the Tabs
const tabButtons = document.getElementsByClassName("Tab--Buttons");
const tabContent = document.getElementsByClassName("team--profile");
let i;

tabButtons[0].addEventListener("click", () => {
  tabButtons[0].classList.add("active");
  tabButtons[1].classList.remove("active");
  tabButtons[2].classList.remove("active");

  tabContent[0].style.display = "block";
  tabContent[1].style.display = "none";
  tabContent[2].style.display = "block";
  tabContent[3].style.display = "none";
});

tabButtons[1].addEventListener("click", () => {
  tabButtons[0].classList.remove("active");
  tabButtons[1].classList.add("active");
  tabButtons[2].classList.remove("active");

  tabContent[0].style.display = "none";
  tabContent[1].style.display = "block";
  tabContent[2].style.display = "none";
});

tabButtons[2].addEventListener("click", () => {
  tabButtons[0].classList.remove("active");
  tabButtons[1].classList.remove("active");
  tabButtons[2].classList.add("active");

  tabContent[0].style.display = "none";
  tabContent[1].style.display = "none";
  tabContent[2].style.display = "block";
});

const btn = document.querySelector("#toggle-theme-btn");
const theme = document.querySelector("body");
const lightModeImage = document.querySelector("#light-mode-img");
const darkModeImage = document.querySelector("#dark-mode-img");
let currentTheme = "light";

const changeTheme = () => {
  if (currentTheme === "light") {
    theme.classList.remove("light-mode");
    theme.classList.add("dark-mode");
    btn.textContent = "Change Theme 🌙";
    btn.classList.remove("light-mode-btn");
    btn.classList.add("dark-mode-btn");
    lightModeImage.classList.remove("mode-img");
    darkModeImage.classList.add("mode-img");
    currentTheme = "dark";
  } else {
    theme.classList.remove("dark-mode");
    theme.classList.add("light-mode");
    btn.textContent = "Change Theme ☀️";
    btn.classList.remove("dark-mode-btn");
    btn.classList.add("light-mode-btn");
    darkModeImage.classList.remove("mode-img");
    lightModeImage.classList.add("mode-img");
    currentTheme = "light";
  }
};

btn.addEventListener("click", changeTheme);
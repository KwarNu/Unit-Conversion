/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const userInput = document.getElementById("input-number");
const convertBtn = document.getElementById("convert-btn");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");
const themeToggle = document.getElementById("theme-toggle");

const meterToFeet = 3.281;
const literToGallon = 0.264;
const kiloToPound = 2.204;

// Theme Management
function initializeTheme() {
  const savedTheme = localStorage.getItem("theme") || "dark";
  document.documentElement.setAttribute("data-theme", savedTheme);
  updateThemeIcon(savedTheme);
}

function updateThemeIcon(theme) {
  themeToggle.textContent = theme === "light" ? "🌙" : "☀️";
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
  updateThemeIcon(newTheme);
}

function convertAll(value) {
  //   Length Result
  let feet = value * meterToFeet;
  let meters = value / meterToFeet;

  // Volume Result
  let gallons = value * literToGallon;
  let liters = value / literToGallon;

  // Mass Result
  let pounds = value * kiloToPound;
  let kilos = value / kiloToPound;

  lengthResult.textContent = `${value} meters = ${feet.toFixed(
    3
  )} feet | ${value} feet = ${meters.toFixed(3)} meters`;
  volumeResult.textContent = `${value} liters = ${gallons.toFixed(
    3
  )} gallons | ${value} gallons = ${liters.toFixed(3)} liters`;

  massResult.textContent = `${value} kilos = ${pounds.toFixed(
    3
  )} pounds | ${value} pounds = ${kilos.toFixed(3)} kilos`;
}

// Event Listeners
convertBtn.addEventListener("click", () => {
  const inputValue = parseFloat(userInput.value);

  if (isNaN(inputValue) || inputValue < 0) {
    alert("Please enter a valid positive number");
    return;
  }

  convertAll(inputValue);
});

themeToggle.addEventListener("click", toggleTheme);

// Initialize theme on page load
initializeTheme();

// Convert initial value on page load
convertAll(20);

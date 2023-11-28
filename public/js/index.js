//drop down menu code
const dropMenu = document.getElementById('dropdown');
const dropdownButton = document.getElementById('dropdownButton');

dropdownButton.addEventListener('click', () => {
  // toggle the dropdown menu
  dropMenu.classList.toggle('hidden');
});

const darkModeButton = document.getElementById('dark-mode-button');
const headerEl = document.getElementById('header');
const backgroundEl = document.getElementById('bg');
const footerEl = document.getElementById('footer');

darkModeButton.addEventListener('click', () => {
  // toggle the dropdown menu
  headerEl.classList.toggle('dark');
  darkModeButton.classList.toggle('night');
  backgroundEl.classList.toggle('dark-bg');
  footerEl.classList.toggle('dark');
});

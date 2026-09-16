// Selectors
const createBtn = document.querySelector('.create-btn');
const menuDrawer = document.querySelector('.menu-drawer');
const drawerOverlay = document.querySelector('.drawer-overlay');

const hamburgerBtn = document.querySelector('.hamburger-menu');
const hamburgerMenu = document.querySelector('.hamburger-menu-list');
const menuOverlay = document.querySelector('.menu-overlay');
//const createOverlay = document.getElementById('drawerOverlay');

// Toggle Hamburger Menu
function toggleHamburger() {
  if (hamburgerMenu) hamburgerMenu.classList.toggle('open');
  if (menuOverlay) menuOverlay.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
}

// Toggle Create Drawer
function toggleDrawer() {
  if (menuDrawer) menuDrawer.classList.toggle('open');
  if (drawerOverlay) drawerOverlay.classList.toggle('open');
  document.body.classList.toggle('no-scroll');
}


if (hamburgerBtn) hamburgerBtn.addEventListener('click', toggleHamburger);
if (menuOverlay) menuOverlay.addEventListener('click', toggleHamburger);


if (createBtn) createBtn.addEventListener('click', toggleDrawer);
if (drawerOverlay) drawerOverlay.addEventListener('click', toggleDrawer);
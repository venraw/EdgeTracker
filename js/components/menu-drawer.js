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






const drawer = document.querySelector('.hamburger-menu-list');
const overlay = document.getElementById('menuOverlay');

let startX = 0;
let currentX = 0;
let isDragging = false;

// Trigger swipe tracking when touching the open drawer
drawer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
    isDragging = true;
    drawer.style.transition = 'none'; // Disable smooth animation during active dragging
}, { passive: true });

drawer.addEventListener('touchmove', (e) => {
    if (!isDragging) return;
    currentX = e.touches[0].clientX;
    const diffX = currentX - startX;

    // Assuming the drawer opens from the left: only allow dragging to the left (negative diff)
    if (diffX < 0) {
        drawer.style.transform = `translateX(${diffX}px)`;
        
        // Dynamically reduce overlay opacity as you drag closed
        const progress = 1 - Math.abs(diffX) / drawer.offsetWidth;
        overlay.style.opacity = Math.max(0, progress);
    }
}, { passive: true });

drawer.addEventListener('touchend', () => {
    if (!isDragging) return;
    isDragging = false;
    
    // Restore CSS smooth transitions
    drawer.style.transition = '';
    overlay.style.transition = '';
    drawer.style.transform = '';
    overlay.style.opacity = '';

    const diffX = currentX - startX;
    
    // Close menu if dragged more than 75px or 25% of the drawer width
    if (diffX < -75) {
        closeMenu();
    } else {
        openMenu(); // Snap back open if swipe wasn't far enough
    }
});

function closeMenu() {
    drawer.classList.remove('open');
    overlay.classList.remove('open');
}

function openMenu() {
    drawer.classList.add('open');
    overlay.classList.add('open');
}







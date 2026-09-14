const createBtn = document.querySelector('.create-btn');
const menuDrawer = document.querySelector('.menu-drawer')
const overlay = document.querySelector('.drawer-overlay');

createBtn.addEventListener('click', () => {
    menuDrawer.classList.add('open');
})
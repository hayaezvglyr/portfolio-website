const navBar = document.getElementById('nav-bar');
const menuBtn = document.getElementById('menu-btn');

menuBtn.onclick = showNav;

function showNav() {
    if (navBar.style.display === 'none') {
        navBar.style.display = 'block'
    }
    else {
        navBar.style.display = 'none'
    }
}
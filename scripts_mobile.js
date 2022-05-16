function showMenu() {
    document.querySelector('#menu-mobile').style.display = 'flex';
}

function hideMenu() {
    document.querySelector('#menu-mobile').style.display = 'none';
}

const hamburgerMenu = document.querySelector('#hamburger-icon');
hamburgerMenu.addEventListener('click', showMenu);
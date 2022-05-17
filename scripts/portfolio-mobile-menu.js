function showMenu() {
  document.querySelector('#menu-mobile').style.display = 'block';
  document.querySelector('.contain-menu-link').style.display = 'flex';
}

function hideMenu() {
  document.querySelector('#menu-mobile').style.display = 'none';
}

document.querySelector('#hamburger-icon').addEventListener('click', showMenu);
document.querySelector('#close-button').addEventListener('click', hideMenu);
let menuLinks = Array.from(document.querySelectorAll(".menu-link"));
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', hideMenu);
  }

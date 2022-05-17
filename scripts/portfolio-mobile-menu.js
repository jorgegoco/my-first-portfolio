function showMenu() {
  document.querySelector('#total-menu-mobile').style.display = 'inline-block';
  document.querySelector('.contain-menu-link').style.display = 'flex';
  document.querySelector('body').style.overflow = 'hidden';
}

function hideMenu() {
  document.querySelector('#total-menu-mobile').style.display = 'none';
  document.querySelector('body').style.overflow = 'visible';
}

document.querySelector('#hamburger-icon').addEventListener('click', showMenu);
document.querySelector('#close-button').addEventListener('click', hideMenu);
let menuLinks = Array.from(document.querySelectorAll(".menu-link"));
for (let i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener('click', hideMenu);
  }

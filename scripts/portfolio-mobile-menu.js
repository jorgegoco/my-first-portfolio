function showMenu() {
  document.querySelector('#main-page').style.display = 'none';
  document.querySelector('#menu-popup').style.display = 'block';
}

function hideMenu() {
  document.querySelector('#main-page').style.display = 'block';
  document.querySelector('#menu-popup').style.display = 'none';
}

const bodyMenu = document.querySelector('body');
const menu = document.createElement('section');
menu.id = 'menu-popup';
bodyMenu.appendChild(menu);
menu.innerHTML = `
  <div id="total-menu-mobile">
  <div id="menu-mobile">
    <img id="close-button" src="./images/close-icon.svg" alt="close_button">
    <div class="contain-menu-link">
      <a class="menu-link" href="#my-recent-works">Portfolio</a>
      <a class="menu-link" href="#about-me">About</a>
      <a class="menu-link" href="#contact-form">Contact</a>
    </div>
  </div>
  <hr class="menu-black-line">
  </div>
  `;
document.querySelector('#menu-popup').style.display = 'none';

document.querySelector('#hamburger-icon').addEventListener('click', showMenu);
document.querySelector('#close-button').addEventListener('click', hideMenu);
const menuLinks = Array.from(document.querySelectorAll('.menu-link'));
for (let i = 0; i < menuLinks.length; i += 1) {
  menuLinks[i].addEventListener('click', hideMenu);
}

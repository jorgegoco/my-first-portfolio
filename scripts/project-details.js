const projects = [
  {
    id: 1,
    title: 'Multi-Post Stories Gain+Glory',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    id: 2,
    title: 'Multi-Post Stories Gain+Glory',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    id: 3,
    title: 'Multi-Post Stories Gain+Glory',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    id: 4,
    title: 'Multi-Post Stories Gain+Glory',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    id: 5,
    title: 'Multi-Post Stories Gain+Glory',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },
  {
    id: 6,
    title: 'Multi-Post Stories Gain+Glory',
    img_desktop: './images/my-works-desktop.png',
    img_mobile: './images/my-works-mobile.png',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    liveLink: 'https://jorgegoco.github.io/my-first-portfolio/',
    liveSource: 'https://github.com/jorgegoco/my-first-portfolio',
    techstack_desktop: ['Codekit', 'Github', 'Javascript', 'Bootstrap', 'Terminal', 'Codepen'],
    techstack_mobile: ['Ruby on rails', 'CSS', 'Javascript'],
  },

];
function showWork() {
  document.querySelector('#main-page').style.display = 'none';
  document.querySelector('#work-popup').style.display = 'block';
}
const bodyWork = document.querySelector('body');
const work = document.createElement('section');
work.id = 'work-popup';
bodyWork.appendChild(work);
work.innerHTML = `
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
document.querySelector('#work-popup').style.display = 'none';

const workLinks = Array.from(document.querySelectorAll('.work-button'));
for (let i = 0; i < workLinks.length; i += 1) {
  workLinks[i].addEventListener('click', showWork);
}

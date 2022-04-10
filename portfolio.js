const portfolio = [
  {
    img: 'images/pricing-panel-image.png',
    name: 'Pricing Panel',
    information1: 'Software',
    information2: 'Front End Dev',
    information3: '2021',
    description: 'This is a three (3) tiered pricing plan that can be customized based on your preference.',
    technolgies1: 'html',
    technologies2: 'css',
    technologies3: 'javascript',
    seeLive: 'https://oshanedesign.github.io/My-Portfolio/',
    seeSource: 'https://github.com/oshanedesign/My-Portfolio',
    span1: 'See live',
    span2: 'See source',
  },
  {
    img: 'images/online-candy-store.png',
    name: 'Online Candy Store',
    information1: 'Website',
    information2: 'Front End Dev',
    information3: '2021',
    description: 'This is a Online Candy Store that has the most tasty and sweet candy treats to fill your appetite.',
    technolgies1: 'html',
    technologies2: 'css',
    technologies3: 'javascript',
    seeLive: 'https://oshanedesign.github.io/My-Portfolio/',
    seeSource: 'https://github.com/oshanedesign/My-Portfolio',
    span1: 'See live',
    span2: 'See source',
  },
  {
    img: 'images/score-keeper.png',
    name: 'Score Keeper',
    information1: 'Application',
    information2: 'Front End Dev',
    information3: '2022',
    description: 'I created this Score Keeper App for my friends to use as we were tired of trying to find a pen or pencil and a piece of paper to keep score.',
    technolgies1: 'html',
    technologies2: 'css',
    technologies3: 'javascript',
    seeLive: 'https://oshanedesign.github.io/My-Portfolio/',
    seeSource: 'https://github.com/oshanedesign/My-Portfolio',
    span1: 'See live',
    span2: 'See source',
  },
  {
    img: 'images/cc-campaign.PNG',
    name: 'CC Global Summit',
    information1: 'Conference',
    information2: 'Front End Dev',
    information3: '2022',
    description: 'The Global Summit brings together the community of experts, academics and activists who comprise the Creative Commons Affiliate network in a different country every two years.',
    technolgies1: 'html',
    technologies2: 'css',
    technologies3: 'javascript',
    seeLive: 'https://oshanedesign.github.io/My-Portfolio/',
    seeSource: 'https://github.com/oshanedesign/My-Portfolio',
    span1: 'See live',
    span2: 'See source',
  },
];
// function getHtml(projectData) {
//   return `
//        <img class="x-display" src="images/xim.svg">
//     <h2 class="tonic">Pricing Panel</h2>
//     <ul class="sub-Points">
//       <li class="canopy">${projectData.information1}</li>
//       <li class="sub-Text">${projectData.information2}</li>
//       <li class="sub-Text">${projectData.information3}</li>
//     </ul>
//     <div class="desktop-Img-Works">
//       <img class="snapshoot" src="${projectData.img}" />
//     </div>
//     <p class="popup-paragraph">
//     ${projectData.description}
//     </p>
//     <div class="lang"></div>
//     <ul class="languages">
//       <li class="languages-List">${projectData.technolgies1}</li>
//       <li class="languages-List">${projectData.technologies2}</li>
//       <li class="languages-List">${projectData.technologies3}</li>
//     </ul>
//     <div class="popup-buttons">
//       <button class="see-live">
//       <a
//         class="live-link"
//         href="${projectData.seeLive}"
//       > See Live</a>
//         <img class="" src="/images/symbolproject.svg" />
//       </button>

//     <button class="see-source">
//     <a
//         class="source-link"
//         href="${projectData.seeSource}"
//       > See Source</a>
//       <img class="" src="/images/kittyproject.svg" />
//       </div>
//     </button>
//   `;
// }
// function getProject(projectData) {
//   return `
//   <div class="desktop-Img-Works">
//                     <img class="snapshoot" src="images/Snapshoot-Portfolio1.svg" alt="Snapshoot-Image">
//                 </div>
//                 <div class="desktop-Text-Works">
//                     <h2 class="tonic">Pricing Panel</h2>
//                     <ul class="sub-Points">
//                         <li class="canopy">${projectData.information1}</li>
//                         <li class="sub-Text">${projectData.information2}</li>
//                         <li class="sub-Text">${projectData.information3}</li>
//                     </ul>
//                     <p class="description-Text">${projectData.description}</p>
//                     <div class="lang">
//                         <ul class="languages">
//                             <li><button class="languages-List" type="submit">${projectData.technolgies1}</button></li>
//                             <li><button class="languages-List" type="submit">${projectData.technologies2}</button></li>
//                             <li><button class="languages-List" type="submit">${projectData.technologies3}</button></li>
//                         </ul>
//                     </div>
//                     <button class="btn-Project" type="submit">See Project</button>
//                 </div>`;
// }
// function getOtherProject(projectData) {
//   return `
//   <div class="desktop-Img-Works flip">
//   <img class="snapshoot" src="images/Snapshoot-Portfolio2.svg" alt="Snapshoot-Image">
// </div>
// <div class="desktop-Text-Works">
//   <h2 class="tonic">Multi-Post Stories</h2>
//   <ul class="sub-Points">
//       <li class="canopy">${projectData.information1}</li>
//       <li class="sub-Text">${projectData.information2}</li>
//       <li class="sub-Text">${projectData.information3}</li>
//   </ul>
//   <p class="description-Text">${projectData.description}</p>
//   <div class="lang">
//       <ul class="languages">
//           <li><button class="languages-List" type="submit">${projectData.technolgies1}</button></li>
//           <li><button class="languages-List" type="submit">${projectData.technologies2}</button></li>
//           <li><button class="languages-List" type="submit">${projectData.technolgies3}</button></li>
//       </ul>
//   </div>
//   <button class="btn-Project" type="submit">See Project</button>
// </div>`;
// }
const popupMenu = document.createElement('div');
popupMenu.innerHTML = getHtml(portfolio[0]);
document.body.appendChild(popupMenu);
popupMenu.className = 'popup-default';
const project1 = document.querySelector('.works');
project1.innerHTML = getProject(portfolio[1]);
const project2 = document.querySelector('.works-Change');
project2.innerHTML = getOtherProject(portfolio[2]);
const project3 = document.querySelector('.project3');
project3.innerHTML = getProject(portfolio[3]);
const project4 = document.querySelector('.project4');
project4.innerHTML = getOtherProject(portfolio[2]);
const appearMenu = document.querySelector('.menuDropDown');
const mobileMenu = document.querySelector('.default');
const disappearMenu = document.querySelector('.x-icon');
const disappearMenuOptions = document.querySelectorAll('.mobile-menu-li');
const popupClick = document.querySelectorAll('.btn-Project');

function display() {
  mobileMenu.classList.toggle('mobile-menu');
}
function display2() {
  popupMenu.classList.toggle('show');
}
for (let i = 0; i < disappearMenuOptions.length; i += 1) {
  disappearMenuOptions[i].addEventListener('click', display);
}
for (let j = 0; j < popupClick.length; j += 1) {
  popupClick[j].addEventListener('click', display2);
}
const popupClose = document.querySelector('.x-display');
appearMenu.addEventListener('click', display);
disappearMenu.addEventListener('click', display);
popupClose.addEventListener('click', display2);

const emailAddress = document.getElementById('mail');
const form = document.getElementById('form');
const error = document.querySelector('#error');

form.addEventListener('submit', (e) => {
  if (emailAddress.value !== emailAddress.value.toLowerCase()) {
    error.textContent = 'email should be lower case';
    e.preventDefault();
  } else error.textContent = '';
});
function saveData() {
  const fName = document.getElementById('name').value;
  const email = document.getElementById('mail').value;
  const message = document.getElementById('msg').value;

  localStorage.setItem('name', fName);
  localStorage.setItem('mail', email);
  localStorage.setItem('msg', message);
}
saveData();
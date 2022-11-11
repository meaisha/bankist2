'use strict';

///////////////////////////////////////

// selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

document.querySelector('header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

const allBtns = document.getElementsByClassName('btn');
console.log(allBtns);

const header = document.querySelector('.header');
//creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
message.innerHTML = `
We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button> 
`;

//header.prepend(message); // first child
header.append(message); // last child

//header.append(message.cloneNode(true)); // clones a node
header.before(message);
header.after(message);

document.querySelector('.btn--close-cookie').addEventListener('click', () => {
  message.remove();
});

// Inline Styles
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

// get hiddent styles
console.log(getComputedStyle(message).color);
const messageHeight =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

console.log(messageHeight);

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');

logo.alt = 'Beautiful Logo';

console.log(logo.alt);
console.log(logo.src); // absolute URL - same for href
console.log(logo.getAttribute('src')); // relative URL - same for href

console.log(logo.className);

// Non standard
console.log(logo.designer); // undefined

logo.setAttribute('designer', 'Jonas');
console.log(logo.getAttribute('designer'));

// Data Attributes
console.log(logo.dataset.versionNumber); // data-version-number="3"

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// Smooth Scrolling
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', e => {
  // get the coordinates where to scroll
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // coordinates of a target
  console.log(e.target.getBoundingClientRect());

  // current scroll (X/Y)
  console.log('current scroll', window.pageXOffset, window.pageYOffset);

  // Height/Width Viiewport
  console.log(
    'Height/Width',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //Scrolling
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );
  //s1coords.top - top from viewport - doesn't always work, so need to add windowYOffset

  // Option1 - old school
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // Option2 - new way - works on modern browsers
  section1.scrollIntoView({ behavior: 'smooth' });
});

const h1 = document.querySelector('h1');

// new way
// h1.addEventListener('mouseenter', e => {
//   alert('h1');
// });

// old school
// h1.onmouseenter = e => {
//   alert('h1');
// };

const alertH1 = () => {
  alert('H1 - mouse enetered');

  // Remove the event, to listen to the event only once
  //h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

// Remove the eventlistener after 3 sec
setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

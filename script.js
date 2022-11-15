'use strict';

///////////////////////////////////////

const allSections = document.querySelectorAll('.section');
const header = document.querySelector('.header');
const logo = document.querySelector('.nav__logo');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const h1 = document.querySelector('h1');

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

// Smooth Scrolling to Section
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

// Page Navigation - Scroll to sections
// returns node list
// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
//     const section = document.querySelector(id);
//     section.scrollIntoView({ behavior: 'smooth' });
//   });
// });

// 1. Add event listener to common parent element
// 2. Determine what element originated the element

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    const section = document.querySelector(id);
    section.scrollIntoView({ behavior: 'smooth' });
  }
});

// DOM Traversing

// Going downwards: child
// console.log(h1.querySelectorAll('.highlight')); // all children
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);

// // Going upwards: parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// h1.closest('.header').style.background = 'var(--gradient-secondary)';
// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // Going sideways: siblings
// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.previousSibling);

// console.log(h1.parentElement.children); // all siblings

// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) {
//     el.style.transform = 'scale(1.5)';
//   }
// });

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
//message.style.backgroundColor = '#37383d';
//message.style.width = '120%';

// get hiddent styles
//console.log(getComputedStyle(message).color);
const messageHeight =
  Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

//document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

logo.alt = 'Beautiful Logo';

// console.log(logo.alt);
// console.log(logo.src); // absolute URL - same for href
// console.log(logo.getAttribute('src')); // relative URL - same for href

// console.log(logo.className);

// Non standard
//console.log(logo.designer); // undefined

logo.setAttribute('designer', 'Jonas');
//console.log(logo.getAttribute('designer'));

// Data Attributes
//console.log(logo.dataset.versionNumber); // data-version-number="3"

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c');
logo.classList.toggle('c');
logo.classList.contains('c');

// new way
// h1.addEventListener('mouseenter', e => {
//   alert('h1');
// });

// old school
// h1.onmouseenter = e => {
//   alert('h1');
// };
/*
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

// Bubbling and Capturing
// rgb(255,255,255)
// Random color generator
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;

// bubbling from child to parent, when we click child parents also get the click event effect. We can stop the propogation with e.stopPropogation()
// target and currentTarget(this)
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('link', e.target, e.currentTarget);

  // stop propogation - stop the events for parents  - not a good idea to stop
  //e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('ul', e.target, e.currentTarget);
});

document.querySelector('.nav').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('nav', e.target, e.currentTarget);
});
*/
// Modal window

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

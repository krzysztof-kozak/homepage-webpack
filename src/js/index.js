import '../scss/main.scss';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const name = "Bartek";
const age = "30";

function greet(age, name) {
  console.log(`Siemka, mam na imię ${name}, i mam ${age} lat.`);
}

greet(`30`, `Bartek`);

const greet2 = (name, age) => {
  console.log(
    `Witaj na mojej stronie testowej, mam na imię ${name} i mam ${age} lat.`
  );
};

greet2(`Bartosz`, 30);
console.log("Zaczynam naukę więc proszę o wyrozumiałość :D");

const hamburger = document.querySelector('.menu-button--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})
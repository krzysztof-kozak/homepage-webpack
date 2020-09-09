import '../scss/main.scss';

import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const name = "Bartek";
const age = "30";

function greet(age, name) {
  console.log(`Witaj na mojej stronie testowej, mam na imię ${name} i mam ${age} lat.`);
}

greet(`30`, `Bartek`);


console.log("Zaczynam naukę więc proszę o wyrozumiałość :D");

const hamburger = document.querySelector('.menu-button--js');

hamburger.addEventListener('click', () => {
  const nav = document.querySelector('.navigation--js');
  nav.classList.toggle('navigation--open');
})

const time = moment().format('MMMM Do YYYY, h:mm:ss a');
const timePlaceholder = document.querySelector('.time--js');

timePlaceholder.innerHTML = time;

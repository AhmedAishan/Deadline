'use strict';

const eventForm = document.getElementById('form');
const eventval = document.getElementById('event');
const dateval = document.getElementById('date');
const eventHead = document.querySelector('.event-head');
const tick = document.querySelector('.tick');

eventForm.addEventListener('submit', function (e) {
  e.preventDefault();
  let time = new Date().getSeconds();
  console.log(time);
  const eventDate = new Date(dateval.value);

  // eventHead.innerText = eventval.value;

  setInterval(function () {
    let seconds = time % 60;
    let minutes = Math.floor(time / 60);
    let hour = Math.floor(minutes / 60);
    let day = Math.floor(hour / 24);

    const curDate = new Date(
      eventDate.getFullYear(),
      eventDate.getMonth(),
      eventDate.getDate(),
      hour,
      minutes,
      seconds
    );

    let now = new Intl.DateTimeFormat(navigator.language, {
      minute: 'numeric',
      second: 'numeric',
      hour: 'numeric',
      day: 'numeric',
      year: 'numeric',
      month: 'long',
    }).format(curDate);
    // tick.innerText = now;
    console.log(now);
  }, 1000);
});

const futureDate = new Date(2024, 9, 18);
const currentDate = new Date();

const daysR = Math.round(
  Math.abs((futureDate - currentDate) / (1000 * 60 * 60 * 24))
);

const hoursR = Math.floor(((futureDate - currentDate) / (1000 * 60 * 60)) % 24);

const minutesR = Math.floor(((futureDate - currentDate) / (1000 * 60)) % 60);

const secondsR = Math.round((Math.abs(futureDate - currentDate) / 1000) % 60);

console.log(
  'time remaining ',
  `${daysR} : ${hoursR} : ${minutesR} : ${secondsR}`
);

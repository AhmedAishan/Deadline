'use strict';

const eventForm = document.getElementById('form');
const eventVal = document.getElementById('event');
const dateVal = document.getElementById('date');
const hoursVal = document.getElementById('hours');
const minutesVal = document.getElementById('minutes');
const secondsVal = document.getElementById('seconds');
const eventHead = document.querySelector('.event-head');
const eventTime = document.querySelector('.tick');

const CountdownBox = document.querySelector('.event-display');

eventForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // hide form
  eventForm.classList.add('hidden');

  // display box
  setTimeout(() => (CountdownBox.style.display = 'flex'), 2000);

  // setting the event title
  eventHead.innerText = eventVal.value;

  // future (input date field value)
  const futureDate = new Date(dateVal.value);
  futureDate.setHours(hoursVal.value);
  futureDate.setMinutes(minutesVal.value);
  futureDate.setSeconds(secondsVal.value);

  setInterval(function () {
    // time now
    const currentDate = new Date();

    // calculate difference
    const calcDifference = () => futureDate - currentDate;

    // converting ms to needed formats
    const remainingTime = {
      days: calcDifference() / (1000 * 60 * 60 * 24),
      hours: (calcDifference() / (1000 * 60 * 60)) % 24,
      minutes: (calcDifference() / (1000 * 60)) % 60,
      seconds: (calcDifference() / 1000) % 60,
    };

    // formating strings
    const days = `${calcDifference() / (1000 * 60 * 60 * 24)}`.padStart(2, 0);
    const hours = `${(calcDifference() / (1000 * 60 * 60)) % 24}`.padStart(
      2,
      0
    );
    const minutes = `${(calcDifference() / (1000 * 60)) % 60}`.padStart(2, 0);
    const seconds = `${(calcDifference() / 1000) % 60}`.padStart(2, 0);

    // display countdown
    eventTime.innerText = `${Math.trunc(
      Math.abs(remainingTime.days)
    )} : ${Math.floor(Math.abs(remainingTime.hours))} : ${Math.floor(
      Math.abs(remainingTime.minutes)
    )} : ${Math.floor(Math.abs(remainingTime.seconds))}`;
  }, 1000);
});

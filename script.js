'use strict';

const eventForm = document.getElementById('form');
const eventVal = document.getElementById('event');
const dateVal = document.getElementById('date');
const hoursVal = document.getElementById('hours');
const minutesVal = document.getElementById('minutes');
const secondsVal = document.getElementById('seconds');
const eventHead = document.querySelector('.event-head');
const eventTime = document.querySelector('.tick');

eventForm.addEventListener('submit', function (e) {
  e.preventDefault();

  console.log(hoursVal.value, minutesVal.value, secondsVal.value);

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

    // display countdown
    eventTime.innerText = `${Math.round(
      Math.abs(remainingTime.days)
    )} : ${Math.floor(remainingTime.hours)} : ${Math.floor(
      remainingTime.minutes
    )} : ${Math.floor(Math.abs(remainingTime.seconds))}`;
  }, 1000);

  console.log(remainingTime.hours);
  // if()
});
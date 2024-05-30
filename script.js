'use strict';

const eventForm = document.getElementById('form');
const eventval = document.getElementById('event');
const dateval = document.getElementById('date');
const eventHead = document.querySelector('.event-head');
const eventTime = document.querySelector('.tick');

eventForm.addEventListener('submit', function (e) {
  e.preventDefault();

  // future date
  // const futureDate = new Date(dateval.value);
  // futureDate.setHours(0, 0, 0);
  // console.log(
  //   'test',
  //   `${futureDate.getHours()} : ${futureDate.getMinutes()} : ${futureDate.getSeconds()}`
  // );
  // console.log('future', futureDate);
  // const currentDate = new Date();
  // console.log('present', currentDate);

  // setting the event title
  eventHead.innerText = eventval.value;

  // calculate difference
  // const calcDifference = (future, present) => future - present;

  // calculating remaing time for the event
  // const remainingTime = {
  //   days: calcDifference() / (1000 * 60 * 60 * 24),
  //   hours: (calcDifference() / (1000 * 60 * 60)) % 24,
  //   minutes: (calcDifference() / (1000 * 60)) % 60,
  //   seconds: (calcDifference() / 1000) % 24,
  // };

  // console.log(Math.round(Math.abs(remainingTime.days)));
  // console.log(Math.floor(remainingTime.hours));
  // console.log(Math.floor(remainingTime.minutes));
  // console.log(Math.floor(Math.abs(remainingTime.seconds)));

  // setInterval(function () {
  //   eventTime.innerText = `${Math.round(
  //     Math.abs(remainingTime.days)
  //   )} : ${Math.floor(remainingTime.hours)} : ${Math.floor(
  //     remainingTime.minutes
  //   )} : ${Math.floor(
  //     Math.abs(
  //       remainingTime.seconds > 0
  //         ? remainingTime.seconds--
  //         : (remainingTime.seconds = 59)
  //     )
  //   )}`;
  // }, 1000);

  setInterval(function () {
    const futureDate = new Date(dateval.value);
    futureDate.setHours(0, 0, 0);
    const currentDate = new Date();
    const calcDifference = () => futureDate - currentDate;
    const remainingTime = {
      days: calcDifference() / (1000 * 60 * 60 * 24),
      hours: (calcDifference() / (1000 * 60 * 60)) % 24,
      minutes: (calcDifference() / (1000 * 60)) % 60,
      seconds: (calcDifference() / 1000) % 60,
    };

    eventTime.innerText = `${Math.round(
      Math.abs(remainingTime.days)
    )} : ${Math.floor(remainingTime.hours)} : ${Math.floor(
      remainingTime.minutes
    )} : ${Math.floor(Math.abs(remainingTime.seconds))}`;
  }, 1000);
});

/**
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
 */

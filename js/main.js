// ====================================================================== Timer =================================================================
const days = document.querySelector(".countdown__time-days");
const hours = document.querySelector(".countdown__time-hours");
const minutes = document.querySelector(".countdown__time-minutes");
const seconds = document.querySelector(".countdown__time-seconds");
const days2 = document.querySelector(".countdown__time-days-2");
const hours2 = document.querySelector(".countdown__time-hours-2");
const minutes2 = document.querySelector(".countdown__time-minutes-2");
const seconds2 = document.querySelector(".countdown__time-seconds-2");

const currentYear = new Date().getFullYear();
const course1 = new Date(`April 1 ${currentYear} 10:00:00`);
const course2 = new Date(`September 31 ${currentYear} 09:55:30`);

function updateCountdown1() {
  const currentTime = new Date();
  const difference = course1 - currentTime;
  const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
  const secondsLeft = Math.floor(difference / 1000) % 60;
  days.innerHTML = daysLeft;
  hours.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.innerHTML = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  if (daysLeft < 0) {
    days.innerHTML = "0";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}
function updateCountdown2() {
  const currentTime = new Date();
  const difference = course2 - currentTime;
  const daysLeft = Math.floor(difference / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor(difference / 1000 / 60 / 60) % 24;
  const minutesLeft = Math.floor(difference / 1000 / 60) % 60;
  const secondsLeft = Math.floor(difference / 1000) % 60;
  days2.innerHTML = daysLeft;
  hours2.innerHTML = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes2.innerHTML = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds2.innerHTML = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;
  if (daysLeft < 0) {
    days.innerHTML = "0";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
  }
}
updateCountdown1();
setInterval(updateCountdown1, 1000);
updateCountdown2();
setInterval(updateCountdown2, 1000);

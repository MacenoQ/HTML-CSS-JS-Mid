const target = '10 Oct 2020';
const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

function countdown() {
  const targetDate = new Date(target).getTime();
  console.log(targetDate);
  const currentDate = new Date().getTime();
  console.log(currentDate);

  const totalSec = (targetDate - currentDate) / 1000;
  const days = Math.floor(totalSec / 3600 / 24);
  const hours = Math.floor(totalSec / 3600) % 24;
  const minutes = Math.floor(totalSec / 60) % 60;
  const seconds = Math.floor(totalSec) % 60;

  daysElement.innerHTML = formatTime(days);
  hoursElement.innerHTML = formatTime(hours);
  minutesElement.innerHTML = formatTime(minutes);
  secondsElement.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}
countdown();
setInterval(countdown, 1000);

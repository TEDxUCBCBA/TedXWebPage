function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let seconds = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector('.days');
  let hoursSpan = clock.querySelector('.hours');
  let minutesSpan = clock.querySelector('.minutes');
  let secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    let t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      const liveButton = document.createElement('a');
      liveButton.classList.add("button");
      liveButton.classList.add("live");
      liveButton.href = "https://www.facebook.com/TEDxUCBCochabamba/"
      liveButton.target = "blank"
      liveButton.textContent = "VIVO"

      const clock = document.querySelector('#clock-div');
      const text = document.querySelector('.clock-text');
      clock.style = "display:none";
      text.textContent = "Ver el evento en ";
      text.appendChild(liveButton);
    }

  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}

let deadline = 'August 11 2018 09:00:00 GMT-0400';
initializeClock('clock-div', deadline);
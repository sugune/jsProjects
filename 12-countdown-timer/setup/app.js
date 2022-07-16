const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector('.giveaway');
const deadline = document.querySelector('.deadline');
const items = document.querySelectorAll('.deadline-format h4');
// initial date
//let futureDate = new Date(2022, 6, 11, 20, 31, 8);
const temp = new Date();
const tempYear = temp.getFullYear();
const tempMonth = temp.getMonth();
const tempDate = temp.getDate();

const futureDate = new Date(tempYear, tempMonth, 11, 20, 31, 8);
// date set up
const date = futureDate.getDate();
const years = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];
// add date
giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${years} ${hours}:${minutes}:0${seconds}`;

// future time in ms 
const futureTime = futureDate.getTime();
// current time in ms 

// remainingtime
function remainingTime() {
  const today = new Date().getTime();
  let remains = futureTime - today;
  // 1s - 1000ms
  // 1m - 60s
  // 1hr - 60m
  // 1d - 24hr
  
  // time in ms 
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;
  
  let days = Math.floor(remains / oneDay);
  let day = remains % oneDay;
  let hours = Math.floor(day / oneHour);
  let minutes = Math.floor((day % oneHour) / oneMinute);
  let seconds = Math.floor(((day % oneHour) % oneMinute) / oneSecond);
  
  const time = [days, hours, minutes, seconds];
  
  function format(item) {
    if (item < 10) {
      return `0${item}`;
    }
    return item;
  }
  
  items.forEach((item, index) => {
    /*
    if (item.classList.contains('days')) {
      item.textContent = time[0];
    } else if (item.classList.contains('hours')) {
      item.textContent = time[1];
    } else if (item.classList.contains('mins')) {
      item.textContent = time[2];
    } else if (item.classList.contains('secs')) {
      item.textContent = time[3];
    } */
    item.textContent = format(time[index]);
  });
  
  if (remains < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class=expired>sorry this giveaway has expired</h4>`;
  }
  
}

let countdown = setInterval(remainingTime, 1000);
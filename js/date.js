const timeZone = document.getElementById("timezone-container");
const fullDate = document.getElementById("fullDate");
const time = timeZone.querySelector(".time");
const ampmEl = timeZone.querySelector(".ampm");
const secEl = timeZone.querySelector(".sec");

function getAMPMTime(hours, min, sec) {
  let ampm = hours >= 12 ? "PM" : "AM";
  hours %= 12;
  hours = hours ? hours : 12;
  hours = String(hours).padStart(2, "0");
  min = String(min).padStart(2, "0");
  sec = String(sec).padStart(2, "0");
  time.textContent = `${hours}:${min}`;
  ampmEl.textContent = ampm;
  secEl.textContent = sec;
}

function getTime(date) {
  let hours = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  getAMPMTime(hours, min, sec);
}

function getDate(date) {
  const week = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const dayWeek = date.getDay();
  fullDate.textContent = `${year}.${month}.${day}.${week[dayWeek]}`;
}

function getCalendar() {
  const date = new Date();
  getTime(date);
  getDate(date);
}

getCalendar();
setInterval(getCalendar, 1000);

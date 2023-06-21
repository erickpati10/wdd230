let date = new Date();
let weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let month = date.getMonth() + 1;
let day = date.getDate();
let year = date.getFullYear();
let fulldate = month + "/" + day + "/" + year;
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let current_date_time = fulldate + " " + time;
let day_date = date.getDay();
let weekday_date = weekday[day_date];
let fulldate_format =
  weekday_date + "," + " " + +day + "/" + month + "/" + year;

document.getElementById("date-time").textContent = current_date_time;
document.getElementById("year").textContent = year;
document.getElementById("date").textContent = fulldate_format;

function toggleMenu() {
  document.getElementById("navigation").classList.toggle("open");
}

const x = document.getElementById("button");
x.onclick = toggleMenu;

// // banner

// let today = new Date().getDay();
// let banner = document.getElementById("banner");
// if (today === 1 || today === 2) {
//   banner.style.display = "block";
// } else {
//   banner.style.display = "none";
// }

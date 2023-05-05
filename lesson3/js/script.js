let date = new Date();
let fulldate  = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear();
let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
let current_date_time = fulldate + ' ' + time;
let year = date.getFullYear();

document.getElementById("date-time").textContent = current_date_time;
document.getElementById("year").textContent = year;
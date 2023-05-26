let tempF = 50;
let speed = 6;

let f =
  35.74 +
  0.6215 * tempF -
  35.75 * Math.pow(speed, 0.16) +
  0.4275 * tempF * Math.pow(speed, 0.16);

windChill = f.toFixed(1) + "°F";

document.getElementById("windChill").innerHTML = windChill;

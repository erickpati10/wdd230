let today = new Date().getDay();
let banner = document.getElementById("banner");
if (today === 1 || today === 2) {
  banner.style.display = "block";
} else {
  banner.style.display = "none";
}

var currentDate = new Date();

// Format the date and time as desired (you can adjust this as per your preference)
var formattedDateTime = currentDate.toLocaleString();

// Set the value of the hidden field to the formatted date and time
document.getElementById("form-loaded-time").value = formattedDateTime;

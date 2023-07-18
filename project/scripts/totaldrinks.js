// Function to get the total number of drinks from local storage
function getTotalDrinks() {
  const totalDrinks = localStorage.getItem("totalDrinks");
  return totalDrinks ? parseInt(totalDrinks) : 0;
}

// Function to update and display the total number of drinks
function updateTotalDrinks() {
  const totalDrinksElement = document.getElementById("total-drinks");
  const totalDrinks = getTotalDrinks();
  totalDrinksElement.textContent = `Total Specialty Drinks Submitted: ${totalDrinks}`;
}

// Function to increment the total number of drinks and store it in local storage
function incrementTotalDrinks() {
  const totalDrinks = getTotalDrinks();
  const newTotalDrinks = totalDrinks + 1;
  localStorage.setItem("totalDrinks", newTotalDrinks);
  updateTotalDrinks();
}

// Function to handle form submission (you can integrate this with your existing form submission code)
function handleFormSubmit(event) {
  event.preventDefault();

  // Your form submission code here

  // After successfully submitting the form, increment the total drinks count
  incrementTotalDrinks();
}

// Add an event listener to the form for form submission
const form = document.getElementById("your-form-id");
form.addEventListener("submit", handleFormSubmit);

// On page load, update and display the total number of drinks
document.addEventListener("DOMContentLoaded", updateTotalDrinks);

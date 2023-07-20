// Function to handle form submission and display order details
function handleFormSubmit(event) {
  event.preventDefault();

  // Get user input values
  const firstName = document.getElementById("first-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const fruit1 = document.getElementById("fruit1").value;
  const fruit2 = document.getElementById("fruit2").value;
  const fruit3 = document.getElementById("fruit3").value;
  const specialInstructions = document.getElementById(
    "special-instructions"
  ).value;

  // Calculate nutritional values based on selected fruits
  // (Assuming this part is already implemented)

  // Save the form submission data to localStorage
  const formData = {
    firstName,
    email,
    phone,
    fruit1,
    fruit2,
    fruit3,
    specialInstructions,
    // Add other relevant data if needed
  };

  // Get the existing total drinks count from localStorage
  const totalDrinksCount = localStorage.getItem("totalDrinksCount") || 0;

  // Increment the total drinks count and store it back to localStorage
  localStorage.setItem("totalDrinksCount", parseInt(totalDrinksCount) + 1);

  // Display the updated total drinks count on the page
  updateTotalDrinksCount();
}

// Function to update the total drinks count on the page
function updateTotalDrinksCount() {
  const totalDrinksElement = document.getElementById("total-drinks");
  const totalDrinksCount = localStorage.getItem("totalDrinksCount") || 0;
  totalDrinksElement.textContent = `Total Specialty Drinks Submitted: ${totalDrinksCount}`;
}

// Call the function to update the total drinks count when the page loads
updateTotalDrinksCount();

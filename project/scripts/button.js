// Function to toggle the mobile menu
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("open");
}

// Add an event listener to the mobile menu button
const mobileMenuButton = document.getElementById("mobile-menu-button");
mobileMenuButton.addEventListener("click", toggleMobileMenu);

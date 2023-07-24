// Function to fetch spotlighted businesses from the backend API
async function fetchSpotlights() {
  try {
    // Replace 'your-api-url' with the actual URL of your backend API
    const response = await fetch(
      "https://erickpati10.github.io/wdd230/chamber/json-folder/data.json"
    );
    const data = await response.json();
    return data.businesses; // Access the 'businesses' array from the API response
  } catch (error) {
    console.error("Error fetching spotlights:", error);
    return []; // Return an empty array in case of an error or no data
  }
}

// Function to randomly pick 'n' elements from an array
function getRandomElementsFromArray(array, n) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

// Function to display the spotlighted businesses on the Home page
async function displaySpotlights() {
  const spotlightsContainer = document.getElementById("spotlight-container");
  const numSpotlights = 2;

  try {
    const spotlightsData = await fetchSpotlights();

    if (!Array.isArray(spotlightsData)) {
      console.error("Spotlights data is not an array:", spotlightsData);
      return; // Exit the function if the data is not an array
    }

    const goldBusinesses = spotlightsData.filter(
      (business) => business.category === "gold"
    );
    const silverBusinesses = spotlightsData.filter(
      (business) => business.category === "silver"
    );

    // Get 'numSpotlights' random businesses from gold and silver categories
    const randomGoldBusinesses = getRandomElementsFromArray(
      goldBusinesses,
      numSpotlights
    );
    const randomSilverBusinesses = getRandomElementsFromArray(
      silverBusinesses,
      numSpotlights
    );

    // Merge and shuffle the randomly selected businesses
    const randomSpotlights = getRandomElementsFromArray(
      [...randomGoldBusinesses, ...randomSilverBusinesses],
      numSpotlights
    );

    // Generate and append spotlight elements to the container
    randomSpotlights.forEach((business) => {
      const spotlightElement = document.createElement("div");
      spotlightElement.innerHTML = `
          <h2>${business.name}</h2>
          <picture>
            <img src="${business.logo}" alt="${business.name} logo" />
          </picture>
          <p><strong>Phone:</strong> ${business.phone}</p>
        `;
      spotlightsContainer.appendChild(spotlightElement);
    });
  } catch (error) {
    console.error("Error displaying spotlights:", error);
  }
}

// Call the function to display spotlights on page load
displaySpotlights();

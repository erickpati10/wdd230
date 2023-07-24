async function fetchSpotlights() {
  try {
    const response = await fetch(
      "https://erickpati10.github.io/wdd230/chamber/json-folder/data.json"
    );
    const data = await response.json();
    return data.businesses;
  } catch (error) {
    console.error("Error fetching spotlights:", error);
    return [];
  }
}

function getRandomElementsFromArray(array, n) {
  const shuffled = array.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, n);
}

async function displaySpotlights() {
  const spotlightsContainer = document.getElementById("spotlight-container");
  const numSpotlights = 3;

  try {
    const spotlightsData = await fetchSpotlights();

    if (!Array.isArray(spotlightsData)) {
      console.error("Spotlights data is not an array:", spotlightsData);
      return;
    }

    const goldBusinesses = spotlightsData.filter(
      (business) => business.category === "gold"
    );
    const silverBusinesses = spotlightsData.filter(
      (business) => business.category === "silver"
    );

    const randomGoldBusinesses = getRandomElementsFromArray(
      goldBusinesses,
      numSpotlights
    );
    const randomSilverBusinesses = getRandomElementsFromArray(
      silverBusinesses,
      numSpotlights
    );

    const randomSpotlights = getRandomElementsFromArray(
      [...randomGoldBusinesses, ...randomSilverBusinesses],
      numSpotlights
    );

    randomSpotlights.forEach((business, index) => {
      const spotlightElement = document.createElement("div");
      spotlightElement.classList.add(`spotlight-${index + 1}`);
      spotlightElement.innerHTML = `
          <h2>${business.name}</h2>
          <picture>
            <img src="${business.imgurl}" alt="${business.name} logo" />
          </picture>
          <p><strong>Phone:</strong> ${business.phone}</p>
        `;
      spotlightsContainer.appendChild(spotlightElement);
    });
  } catch (error) {
    console.error("Error displaying spotlights:", error);
  }
}

displaySpotlights();

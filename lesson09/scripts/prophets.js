const url =
  "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";

async function getProphetData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.prophets);
  displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
  const cards = document.querySelector("div.cards"); // select the output container element

  prophets.forEach((prophet) => {
    // Create elements to add to the div.cards element
    let card = document.createElement("section");
    let h2 = document.createElement("h2");
    let portrait = document.createElement("img");
    let paragraph_date = document.createElement("p");
    let paragraph_place = document.createElement("p");

    // Build the h2 content out to show the prophet's full name - finish the template string
    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    paragraph_date.textContent = `Birthdate: ${prophet.birthdate}`;
    paragraph_place.textContent = `Birth place: ${prophet.birthplace}`;

    // Build the image portrait by setting all the relevant attribute
    portrait.setAttribute("src", prophet.imageurl);
    portrait.setAttribute(
      "alt",
      `Portrait of ${prophet.name} ${prophet.lastname}`
    );
    portrait.setAttribute("loading", "lazy");
    portrait.setAttribute("width", "340");
    portrait.setAttribute("height", "440");

    // Append the section(card) with the created elements
    card.appendChild(h2);
    card.appendChild(paragraph_date);
    card.appendChild(paragraph_place);
    card.appendChild(portrait);

    cards.appendChild(card);
  }); // end of forEach loop
}; // end of function expression

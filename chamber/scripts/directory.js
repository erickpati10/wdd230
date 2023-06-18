const url =
  "https://erickpati10.github.io/erickpatino/Library/CloudStorage/OneDrive-Personal/Documents/BYU%20Classes/wdd230-class/wdd230/directory-data%20/data.json";

async function getBusinessData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.businesses);
  displayBusinesses(data.businesses);
}

getBusinessData();

const displayBusinesses = (businesses) => {
  const cards = document.querySelector("div#cards");

  stores.forEach((business) => {
    let card = document.createElement("section");
    let imgurl = document.createElement("img");
    let address = document.createElement("p");
    let phone = document.createElement("p");
    let website = document.createElement("a");
    let h2 = document.createElement("h2");

    h2.textContent = `${business.name}`;
    address.textContent = `${business.location}`;
    phone.textContent = `${business.phone}`;
    website.textContent = `${business.website}`;

    imgurl.setAttribute("src", business.imgurl);
    imgurl.setAttribute("alt", `${business.name} img`);
    imgurl.setAttribute("loading", "lazy");

    card.appendChild(imgurl);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    cards.appendChild(card);
  });
};

const gridbutton = document.querySelector("#grid-button");
const listbutton = document.querySelector("#list-button");
const display = document.querySelector("#cards");

gridbutton.addEventListener("click", () => {
  display.classList.add("grid");
  display.classList.remove("list");
});

listbutton.addEventListener("click", () => {
  display.classList.add("list");
  display.classList.remove("grid");
});

let bookOfMormon = [];
let input = document.getElementById("favchap");
let btn = document.getElementById("submit");

btn.addEventListener("click", () => {
  let inputValue = input.value;
  if (inputValue === "") {
    alert("This field is required");
  } else {
    bookOfMormon.push(inputValue);
    bookOfMormon.sort();

    renderChapters();
    input.value = "";
  }
});

function renderChapters() {
  let unorderListContainer = document.querySelector("#list");

  unorderListContainer.innerHTML = "";

  for (let i = 0; i < bookOfMormon.length; i++) {
    const chapter = bookOfMormon[i];
    const listElement = getListElement(chapter, i);

    unorderListContainer.appendChild(listElement);
  }
}

function getListElement(chapter, index) {
  let liElement = document.createElement("li");

  addClickEventsToListElement(liElement, index);

  let span2 = document.createElement("span");
  span2.innerHTML = chapter;

  liElement.appendChild(span2);

  return liElement;
}

function addClickEventsToListElement(listElement, index) {
  listElement.addEventListener("click", (event) => {
    if (
      listElement.style.getPropertyValue("text-decoration") == "line-through"
    ) {
      listElement.style.setProperty("text-decoration", "none");
    } else {
      listElement.style.setProperty("text-decoration", "line-through");
    }
  });

  listElement.addEventListener("dblclick", (event) => {
    event.target.remove();
    bookOfMormon.splice(index, index + 1);
  });
}

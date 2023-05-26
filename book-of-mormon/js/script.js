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
    let chapter = bookOfMormon[i];
    let listElement = getListElement(chapter, i);

    unorderListContainer.appendChild(listElement);
  }
}

function getListElement(chapter, index) {
  let liElement = document.createElement("li");

  let span2 = document.createElement("span");
  span2.innerHTML = chapter;

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  deleteButton.addEventListener("click", () => {
    deleteChapter(index);
  });

  liElement.appendChild(span2);
  liElement.appendChild(deleteButton);

  return liElement;
}

function deleteChapter(index) {
  bookOfMormon.splice(index, 1);
  renderChapters();
}

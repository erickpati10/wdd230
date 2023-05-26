const input = document.getElementById("favchap");
const button = document.getElementById("add");
const list = document.getElementById("list");

function addChapter() {
  if (input.value != "") {
    // create the list item
    const listItem = document.createElement("li");
    listItem.textContent = input.value;

    // create the delete button

    const deleteButton = document.createElement("delete");
    deleteButton.textContent = "❌";

    // append to list item
    listItem.appendChild(deleteButton);
    list.appendChild(listItem);

    // append to list
    list.appendChild(listItem);

    // add listener
    deleteButton.addEventListener("click", function () {
      list.removeChild(listItem);
    });
  }

  input.focus();
  input.value = "";
}

button.addEventListener("click", addChapter);

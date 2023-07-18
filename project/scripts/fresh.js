let fruitData;

async function populateFruitsSelect() {
  try {
    const response = await fetch(
      "https://brotherblazzard.github.io/canvas-content/fruit.json"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch fruit data.");
    }
    fruitData = await response.json();

    if (!Array.isArray(fruitData)) {
      throw new Error("Invalid fruit data format.");
    }

    const fruitsSelects = document.querySelectorAll('select[id^="fruit"]');
    fruitsSelects.forEach((select) => {
      select.innerHTML = "";

      const selectOption = document.createElement("option");
      selectOption.value = "";
      selectOption.textContent = "- Select Fruit -";
      select.appendChild(selectOption);

      fruitData.forEach((fruit) => {
        const option = document.createElement("option");
        option.value = fruit.name;
        option.textContent = fruit.name;
        select.appendChild(option);
      });
    });
  } catch (error) {
    console.error("Error fetching fruit data:", error);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();

  const firstName = document.getElementById("first-name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const fruit1 = document.getElementById("fruit1").value;
  const fruit2 = document.getElementById("fruit2").value;
  const fruit3 = document.getElementById("fruit3").value;
  const specialInstructions = document.getElementById(
    "special-instructions"
  ).value;

  const selectedFruits = [fruit1, fruit2, fruit3];
  let totalCarbs = 0;
  let totalProtein = 0;
  let totalFat = 0;
  let totalSugar = 0;
  let totalCalories = 0;

  selectedFruits.forEach((fruit) => {
    const selectedFruit = fruitData.find((item) => item.name === fruit);
    if (selectedFruit) {
      totalCarbs += Math.round(selectedFruit.nutritions.carbohydrates);
      totalProtein += Math.round(selectedFruit.nutritions.protein);
      totalFat += Math.round(selectedFruit.nutritions.fat);
      totalSugar += Math.round(selectedFruit.nutritions.sugar);
      totalCalories += Math.round(selectedFruit.nutritions.calories);
    }
  });

  // Get the current date
  const currentDate = new Date().toLocaleDateString("en-US");

  const orderDetails = document.getElementById("order-details");
  orderDetails.innerHTML = `
        <h2>Order Details</h2>
        <p><strong>First Name:</strong> ${firstName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone Number:</strong> ${phone}</p>
        <p><strong>Fruit 1:</strong> ${fruit1}</p>
        <p><strong>Fruit 2:</strong> ${fruit2}</p>
        <p><strong>Fruit 3:</strong> ${fruit3}</p>
        <p><strong>Special Instructions:</strong> ${specialInstructions}</p>
        <h3>Nutritional Information</h3>
        <p><strong>Total Carbohydrates:</strong> ${totalCarbs}g</p>
        <p><strong>Total Protein:</strong> ${totalProtein}g</p>
        <p><strong>Total Fat:</strong> ${totalFat}g</p>
        <p><strong>Total Sugar:</strong> ${totalSugar}g</p>
        <p><strong>Total Calories:</strong> ${totalCalories} kcal</p>
        <p><strong>Order Date:</strong> ${currentDate}</p>
      `;
}

const form = document.getElementById("drink-form");
form.addEventListener("submit", handleFormSubmit);

populateFruitsSelect();

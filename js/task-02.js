const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// посилання на список
const list = document.querySelector("#ingredients");

// перебираємо масив
ingredients.forEach((ingredient) => {
  // створюємо елементи <li></li>
  const liElement = document.createElement("li");

  // назва інгрідієнта
  liElement.textContent = ingredient;

  // додаємо клас item
  liElement.classList.add("item");

  // додаємо <li></li> до списку ul
  list.appendChild(liElement);

  console.log(list);
});

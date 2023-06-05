// список ul
const ulElement = document.querySelector("#categories");
// всі лішки в цьому ul
const liElements = ulElement.querySelectorAll(".item");
// довжина - кількість лішок
const numberOfElements = liElements.length;
// вивід результату
console.log("Number of categories:", numberOfElements);

// перебирає всі лішки
liElements.forEach((item) => {
  // текст заголовку h2 кожної лішки
  const titleName = item.querySelector("h2").textContent;
  // знаходимо всі лішки вкладені в лішки з класом item
  const nestedItems = item.querySelectorAll("li");
  // довжина - кількість вкладених лішок
  const itemCount = nestedItems.length;
  // виводимо результат
  console.log(`Category: ${titleName}`);
  console.log(`Elements: ${itemCount}`);
});

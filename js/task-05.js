const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// Додавання слухача події 'input' до поля введення
nameInput.addEventListener("input", function () {
  // Перевірка, чи є значення поля порожнім
  if (nameInput.value.trim() === "") {
    // Якщо поле порожнє, встановлення тексту "Anonymous" у спані
    nameOutput.textContent = "Anonymous";
  } else {
    // Якщо поле не порожнє, встановлення значення поля у спан
    nameOutput.textContent = nameInput.value;
  }
});

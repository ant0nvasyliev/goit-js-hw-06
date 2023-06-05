// посилання на кнопку додавання
const decrementButton = document.querySelector('[data-action="decrement"]');

// посилання на кнопку віднімання
const incrementButton = document.querySelector('[data-action="increment"]');

// індикатор початкового значення лічильника
const counterValueEl = document.getElementById("value");

// індикатор поточного значення лічильника
let counterValue = 0;

// оновлення значення лічильника в інтерфейсі
function updateCounterValue() {
  counterValueEl.textContent = counterValue;
}

// додавання
function incrementCounter() {
  counterValue++;
  updateCounterValue();
}

// віднімання
function decrementCounter() {
  counterValue--;
  updateCounterValue();
}

// додавання слухачів кліків до кнопок
decrementButton.addEventListener("click", decrementCounter);
incrementButton.addEventListener("click", incrementCounter);

console.log(counterValue);

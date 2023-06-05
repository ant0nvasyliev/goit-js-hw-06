const input = document.getElementById("validation-input");

input.addEventListener("blur", function () {
  const length = parseInt(input.getAttribute("data-length"));
  const value = input.value.trim();

  if (value.length === length) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else {
    input.classList.remove("valid");
    input.classList.add("invalid");
  }
});

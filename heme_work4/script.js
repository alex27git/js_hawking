const Input = document.getElementById("input");
const InputBox = document.getElementsByClassName("inputs");
const Btn = document.getElementById("button");

Input.addEventListener("input", function () {
  let InputValue = this.value;
  try {
    if (!InputValue) {
      throw new Error("Поле пустое");
    } else if (InputValue < 5) {
      throw new Error("Число меньше  5");
    } else if (InputValue > 10) {
      throw new Error("Число больше 10");
    } else if (isNaN( InputValue/1)) {
    
      throw new Error("Вы ввели не число");
    } else {
      document.getElementById("result").innerText = "OK";
    }
  } catch (e) {
    document.getElementById("result").innerText = e.message;
  }
});


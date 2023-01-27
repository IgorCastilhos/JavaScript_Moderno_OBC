import calculate from "./calculate.js";

const input = document.querySelector("#input");

export function handleButtonPress(ev) {
  const value = ev.currentTarget.dataset.value;
  input.value += value;
}

export function handleClearButton() {
  input.value = "";
  input.focus();
}

export function handleTyping(ev) {
  ev.preventDefault();
  const allowedKeys = [
    "(",
    ")",
    "/",
    "*",
    "-",
    "+",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "1",
    "0",
    ".",
    "%",
    " ",
  ];
  // SE o Array de teclas inclui o caractere pressionado (ev.key), junta-se o valor do input com a tecla
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key;
    return;
  }

  // Adicionando a tecla 'Backspace' à Calculadora
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1);
  }

  // Adicionando a tecla 'Enter' à Calculadora
  if (ev.key === "Enter") {
    calculate();
  }
}

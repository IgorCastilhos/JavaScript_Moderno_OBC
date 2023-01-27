import calculate from "./calculate.js";
import copyToClipboard from "./copyToClipboard.js";
import {
  handleButtonPress,
  handleClearButton,
  handleTyping,
} from "./keyHandlers.js";
import themeSwitcher from "./themeSwitcher.js";

// Impedindo que o usuário digite palavras fora do escopo da calculadora, criando um Array com todos os caracteres permitidos e fazendo uma verificação

document.querySelectorAll(".charKey").forEach(function (charKeyBtn) {
  // Adicionando um evento para todos os botões
  charKeyBtn.addEventListener("click", handleButtonPress);
});

document.getElementById("clear").addEventListener("click", handleClearButton);
// Adicionando a tecla 'Clear' à Calculadora

document.getElementById("input").addEventListener("keydown", handleTyping);
// Adiciona um Event Listener de 'keydown' para o input; Previne o comportamento padrão do evento (Não quero que qualquer caractere pressionado seja inserido)

document.getElementById("equal").addEventListener("click", calculate);
// Adicionando a tecla 'igual' à Calculadora

document
  // Adicionando a funcionalidade de Clipboard (copiar o resultado da operação)
  .getElementById("copyToClipboard")
  .addEventListener("click", copyToClipboard);

document
  // Adicionando a funcionalidade de trocar o tema da calculadora (escuro/claro)
  .getElementById("themeSwitcher")
  .addEventListener("click", themeSwitcher);

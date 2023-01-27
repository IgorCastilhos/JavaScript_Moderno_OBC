export default function calculate() {
  const resultInput = document.querySelector("#result");
  resultInput.value = "ERROR";
  resultInput.classList.add("error");
  // Sempre executa por padrão essas 2 linhas
  const result = eval(input.value);
  // Depois calcula o resultado com eval
  resultInput.value = result;
  // Se funcionar, vai colocar o resultado no input e
  resultInput.classList.remove("error");
  // remover a classe de erro
}

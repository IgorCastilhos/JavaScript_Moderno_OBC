export default function (ev) {
  // Parâmetro ev (evento) é usado para selecionar o botão e informar que o resultado foi copiado
  const button = ev.currentTarget;
  if (button.innerText === "Copy") {
    button.innerText = "Copied";
    button.classList.add("success");
    navigator.clipboard.writeText(document.querySelector("#result").value);
    // Propriedade do Objeto Window (navigator) possui a funcionalidade clipboard e é passado o método writeText para escrever o valor do input, que é o resultado da calculadora.
  } else {
    // Quando o texto já tiver sido copiado, o botão Copy voltará ao normal
    button.innerText = "Copy";
    button.classList.remove("success");
  }
}

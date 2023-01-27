"use strict";

var average = function average() {
  for (var _len = arguments.length, numbers = new Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }
  /**
   *  Constante average(média) - rest parameter (...numbers) utilizando o operador spread(...)
   * e a variável numbers, considerada um parâmetro no formato de um Array.
   *  Com isso, é possível chamá-la na função, passando vários números e dentro da declaração, a
   * gente consegue trabalhar com eles em forma de Array.
   *  1º: Para calcular a média, é preciso somar todos os números que vierem no array(numbers)
   * const sum = numbers.reduce((accum(valor que vai se acumulando através das iterações), num
   * (número atual)) => accum + num, 0 (soma cada um dos elementos do array, até iterar sob cada
   * um deles, indicando também depois da vírgula que esse valor começará em 0))
   *  2º: Retornar a soma dividida pela quantidade de valores que foi passada.
   */
  var sum = numbers.reduce(function (accum, num) {
    return accum + num;
  }, 0);
  return sum / numbers.length;
};
console.log("M\xE9dia Aritm\xE9tica Simples: ".concat(average(3, 6, 10, 9)));
var weightedAverage = function weightedAverage() {
  for (var _len2 = arguments.length, entries = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    entries[_key2] = arguments[_key2];
  }
  /**
   *  Cada entrada precisa ter um número e também um peso.
   *  const sum: Soma os números após multiplicá-los pelo peso e
   *  armazena no acumulador. Ex: accum = (9 * 3) + (7 * 1)
   *  accum: acumulador de valores
   *  { number, weight }: Desestrutura o objeto e pega de dentro dele a prop number e weight
   *  que são passadas no console.log.
   *  =>: retorna o acumulador + number * weight. Com isso ele vai somar cada um dos valores após
   *  a multiplicação pelo peso.
   *  0: sinaliza que inicia em 0
   */

  var sum = entries.reduce(function (accum, _ref) {
    var number = _ref.number,
      weight = _ref.weight;
    return accum + number * (weight !== null && weight !== void 0 ? weight : 1);
  }, 0);

  /**
   * const weight: Soma os pesos. Precisamos dividir a soma(sum) pela soma dos pesos(weightSum).
   * entries.reduce: para somar os valores.
   * (accum, entry): acumulador, valor atual
   * =>: Soma cada um dos entry.weight que são passados
   * no console.log(?? senão houver peso, será 1 por default).
   * return sum / weightSum: retorna a soma dos valores multiplicados pelos seus respectivos
   * pesos, divididos pela soma dos mesmos pesos.
   */

  var weightSum = entries.reduce(function (accum, entry) {
    var _entry$weight;
    return accum + ((_entry$weight = entry.weight) !== null && _entry$weight !== void 0 ? _entry$weight : 1);
  }, 0);
  return sum / weightSum;
};
console.log("M\xE9dia Ponderada: ".concat(weightedAverage({
  number: 9,
  weight: 3
}, {
  number: 7
}, {
  number: 10,
  weight: 1
})));
var mediana = function mediana() {
  for (var _len3 = arguments.length, numbers = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    numbers[_key3] = arguments[_key3];
  }
  var orderedNumbers = [].concat(numbers).sort(function (a, b) {
    return a - b;
  });
  /* Cria uma variável para duplicar o array de numbers e não transformar o array inicial.
    Passando dentro do novo array um spread de numbers, chamando o método sort para ordenar
    na ordem crescente a - b. */
  var middle = Math.floor(orderedNumbers.length / 2);
  /* Descobre o meio do array através do Objeto Global Math, utilizando o método floor que 
    serve pra pegar o maior inteiro que é menor ou igual ao argumento passado. Ex: 5.2 = 5 */
  if (orderedNumbers.length % 2 !== 0) {
    /* Verifica SE orderedNumbers for ímpar, ele retorna o número do meio;*/
    return orderedNumbers[middle];
  }
  var firstMedian = orderedNumbers[middle - 1];
  // Se orderedNumbers for par, pega o Nº do meio - 1 */
  var secondMedian = orderedNumbers[middle];
  return average(firstMedian, secondMedian);
  // Reutiliza a função average e pega a média desses dois valores
};

console.log("Mediana: ".concat(mediana(1, 2, 3, 4, 5, 6)));
var mode = function mode() {
  for (var _len4 = arguments.length, numbers = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    numbers[_key4] = arguments[_key4];
  }
  // Calcula quantas vezes cada elemento aparece
  // [ [n, qtd], [n, qtd], [n, qtd] ] === Tuplas, Arrays de duas posições
  var quantities = numbers.map(function (num) {
    return [num, numbers.filter(function (n) {
      return num === n;
    }).length];
  });
  quantities.sort(function (a, b) {
    return b[1] - a[1];
  }); // Ordena de forma decrescente, baseado na quantidade
  return quantities[0][0];
};
console.log("Moda: ".concat(mode(1, 1, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)));
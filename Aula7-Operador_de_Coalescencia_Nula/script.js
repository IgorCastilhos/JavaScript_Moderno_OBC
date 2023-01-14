const a = 0; // false

const b = null; // false

const c = "Teste"; // true

console.log(a || b || c);

console.log(b ?? a); // Se o valor não for nulo ou undefined, ele é repassado

let a2 = 0;
let b2 = a2 || 42;
console.log({ a2, b2 }); // a2: 0, b2: 42

b2 = a2 ?? 42;
console.log({ a2, b2 }); // a2: 0, b2: 0

let c2 = null ?? 42;

console.log({ c2 }); // c2: null

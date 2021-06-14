---
id: 587d7b88367417b2b2512b47
title: Usare il parametro resto con gli argomenti delle funzioni
challengeType: 1
forumTopicId: 301221
dashedName: use-the-rest-parameter-with-function-parameters
---

# --description--

Per aiutarci a creare funzioni più flessibili, ES6 introduce il parametro <dfn>resto</dfn> per i parametri di funzioni. Con il parametro resto, è possibile creare funzioni che richiedono un numero variabile di argomenti. Questi argomenti sono memorizzati in un array a cui è possibile accedere successivamente dall'interno della funzione.

Dai un'occhiata a questo codice:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2));
console.log(howMany("string", null, [1, 2, 3], { }));
```

La console mostrerà le stringhe `You have passed 3 arguments.` e `You have passed 4 arguments.`.

Il parametro resto elimina la necessità di controllare l'array `args` e ci permette di applicare `map()`, `filter()` e `reduce()` all'array dei parametri.

# --instructions--

Modifica la funzione `sum` utilizzando il parametro resto in modo che la funzione `sum` sia in grado di prendere qualsiasi numero di argomenti e restituisca la loro somma.

# --hints--

Il risultato di `sum(0,1,2)` dovrebbe essere 3

```js
assert(sum(0, 1, 2) === 3);
```

Il risultato di `sum(1,2,3,4)` dovrebbe essere 10

```js
assert(sum(1, 2, 3, 4) === 10);
```

Il risultato di `sum(5)` dovrebbe essere 5

```js
assert(sum(5) === 5);
```

Il risultato di `sum()` dovrebbe essere 0

```js
assert(sum() === 0);
```

`sum` dovrebbe essere una funzione freccia che utilizza la sintassi del parametro resto (`...`) sul parametro `args`.

```js
assert(__helpers.removeWhiteSpace(code).match(/sum=\(\.\.\.args\)=>/));
```

# --seed--

## --seed-contents--

```js
const sum = (x, y, z) => {
  const args = [x, y, z];
  return args.reduce((a, b) => a + b, 0);
}
```

# --solutions--

```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
```

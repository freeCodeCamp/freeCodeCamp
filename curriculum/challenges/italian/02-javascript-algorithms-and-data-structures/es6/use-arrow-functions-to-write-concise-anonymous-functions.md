---
id: 587d7b87367417b2b2512b43
title: Utilizzare le funzioni freccia per scrivere funzioni anonime concise
challengeType: 1
forumTopicId: 301211
dashedName: use-arrow-functions-to-write-concise-anonymous-functions
---

# --description--

In JavaScript, spesso non abbiamo bisogno di dare un nome alle nostre funzioni, soprattutto quando si passa una funzione come argomento ad un'altra funzione. Creiamo invece delle funzioni in linea. Non abbiamo bisogno di nominare queste funzioni perché non le riutilizzeremo altrove.

Per raggiungere questo obiettivo, utilizziamo spesso la seguente sintassi:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```

ES6 ci fornisce lo zucchero sintattico così da non dover scrivere funzioni anonime in questo modo. Invece, puoi usare la **sintassi delle funzioni freccia**:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

Quando la funzione non ha un corpo, ma solo un valore di ritorno, la sintassi della funzione freccia ti permette di omettere la parola chiave `return` e le parentesi che circondano il codice. Ciò aiuta a condensare le funzioni più piccole in una riga di dichiarazione:

```js
const myFunc = () => "value";
```

Questo codice restituirà di default la stringa `value`.

# --instructions--

Riscrivi la funzione assegnata alla variabile `magic`, che restituisce una `new Date()`, in modo da usare la sintassi delle funzioni freccia. Inoltre, assicurati che nulla sia definito usando la parola chiave `var`.

# --hints--

Dovresti sostituire la parola chiave `var`.

```js
assert.notMatch(code, /var/g)
```

`magic` dovrebbe essere una variabile costante (usando `const`).

```js
assert.match(code, /const\s+magic/g)
```

`magic` dovrebbe essere una `function`.

```js
assert(typeof magic === 'function');
```

`magic()` dovrebbe restituire la data corretta.

```js
assert(magic().setHours(0, 0, 0, 0) === new Date().setHours(0, 0, 0, 0));
```

La parola chiave `function` non dovrebbe essere utilizzata.

```js
assert.notMatch(code, /function/g)
```

# --seed--

## --seed-contents--

```js
var magic = function() {
  return new Date();
};
```

# --solutions--

```js
const magic = () => {
  return new Date();
};
```

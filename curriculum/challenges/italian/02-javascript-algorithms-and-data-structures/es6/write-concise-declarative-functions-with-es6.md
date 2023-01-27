---
id: 587d7b8b367417b2b2512b50
title: Scrivere funzioni dichiarative concise con ES6
challengeType: 1
forumTopicId: 301224
dashedName: write-concise-declarative-functions-with-es6
---

# --description--

Quando si definiscono le funzioni all'interno degli oggetti in ES5, occorre usare la parola chiave `function` come segue:

```js
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

Con ES6, è possibile rimuovere simultaneamente la parola chiave `function` e i due punti quando si definiscono le funzioni negli oggetti. Ecco un esempio di questa sintassi:

```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

# --instructions--

Riscrivi la funzione `setGear` all'interno dell'oggetto `bicycle` usando la scorciatoia sintattica descritta sopra.

# --hints--

La dichiarazione di funzione tradizionale non deve essere utilizzata.

```js
(getUserInput) => assert(!code.match(/function/));
```

`setGear` dovrebbe essere una funzione dichiarativa.

```js
assert(
  typeof bicycle.setGear === 'function' && code.match(/setGear\s*\(.+\)\s*\{/)
);
```

`bicycle.setGear(48)` dovrebbe cambiare il valore della marcia (`gear`) a 48.

```js
bicycle.setGear(48);
assert(bicycle.gear === 48);
```

# --seed--

## --seed-contents--

```js
// Only change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    this.gear = newGear;
  }
};
// Only change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);
```

# --solutions--

```js
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
```

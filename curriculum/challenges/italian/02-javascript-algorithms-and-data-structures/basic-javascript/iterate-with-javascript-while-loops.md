---
id: cf1111c1c11feddfaeb1bdef
title: Iterare con il ciclo While in Javascript
challengeType: 1
videoUrl: 'https://scrimba.com/c/c8QbnCM'
forumTopicId: 18220
dashedName: iterate-with-javascript-while-loops
---

# --description--

È possibile eseguire lo stesso codice più volte utilizzando un ciclo.

Il primo tipo di ciclo che vedremo è chiamato un ciclo `while` perché viene eseguito finché (while) una condizione specificata è vera e si arresta una volta che la condizione non è più vera.

```js
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}
```

Nell'esempio di codice precedente, il ciclo `while` sarà eseguito 5 volte e aggiungerà i numeri da 0 a 4 a `ourArray`.

Proviamo ad realizzare un ciclo che inserisca i valori in un array.

# --instructions--

Aggiungi i numeri da 5 a 0 (inclusi) in ordine decrescente a `myArray` utilizzando un ciclo `while`.

# --hints--

Dovresti usare un ciclo `while`.

```js
assert(code.match(/while/g));
```

`myArray` dovrebbe essere uguale a `[5, 4, 3, 2, 1, 0]`.

```js
assert.deepEqual(myArray, [5, 4, 3, 2, 1, 0]);
```

# --seed--

## --after-user-code--

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

## --seed-contents--

```js
// Setup
const myArray = [];

// Only change code below this line

```

# --solutions--

```js
const myArray = [];
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}
```

---
id: 56104e9e514f539506016a5c
title: Iterare numeri dispari con un ciclo for
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
dashedName: iterate-odd-numbers-with-a-for-loop
---

# --description--

I cicli for non devono necessariamente iterare un numero alla volta. Modificando la nostra `final-expression` possiamo iterare solo sui numeri pari.

Inizieremo da `i = 0` e ripeteremo il ciclo finché `i < 10`. Incrementeremo `i` di 2 ad ogni ciclo con `i += 2`.

```js
const ourArray = [];

for (let i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

`ourArray` ora conterrà `[0, 2, 4, 6, 8]`. Cambiamo la nostra `initialization` in modo da poter iterare sui numeri dispari.

# --instructions--

Inserisci i numeri dispari da 1 a 9 in `myArray` usando un ciclo `for`.

# --hints--

Dovresti usare un ciclo `for`.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

`myArray` dovrebbe essere uguale a `[1, 3, 5, 7, 9]`.

```js
assert.deepEqual(myArray, [1, 3, 5, 7, 9]);
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
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```

---
id: 56105e7b514f539506016a5e
title: Contare all'indietro con un ciclo For
challengeType: 1
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
dashedName: count-backwards-with-a-for-loop
---

# --description--

Un ciclo for può anche contare all'indietro, se definiamo le condizioni giuste.

Per decrementare di due ad ogni iterazione, dovremo cambiare la nostra inizializzazione, la condizione e l'espressione finale.

Inizieremo da `i = 10` e ripeteremo finché `i > 0`. Diminuiremo `i` di 2 ad ogni ciclo con `i -= 2`.

```js
const ourArray = [];

for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

`ourArray` adesso conterrà `[10, 8, 6, 4, 2]`. Cambiamo la nostra inizializzazione e espressione finale in modo da poter contare indietro di due per creare un array di numeri dispari discendenti.

# --instructions--

Inserisci i numeri dispari da 9 a 1 in `myArray` usando un ciclo `for`.

# --hints--

Dovresti usare un ciclo `for` per questo.

```js
assert(/for\s*\([^)]+?\)/.test(code));
```

Dovresti usare il metodo array `push`.

```js
assert(code.match(/myArray.push/));
```

`myArray` dovrebbe essere uguale a `[9, 7, 5, 3, 1]`.

```js
assert.deepEqual(myArray, [9, 7, 5, 3, 1]);
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
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```

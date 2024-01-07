---
id: 5675e877dbd60be8ad28edc6
title: Iterare attraverso un array con un ciclo For
challengeType: 1
videoUrl: 'https://scrimba.com/c/caeR3HB'
forumTopicId: 18216
dashedName: iterate-through-an-array-with-a-for-loop
---

# --description--

Un compito comune in JavaScript è quello di iterare attraverso i contenuti di un array. Un modo per farlo è con un ciclo `for`. Questo codice visualizzerà ogni elemento dell'array `arr` nella console:

```js
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}
```

Ricorda che gli array hanno un'indicizzazione basata sullo zero, il che significa che l'ultimo indice dell'array è `length - 1`. La nostra condizione per questo ciclo è `i < arr.length` che interrompe il ciclo quando `i` è uguale a `length`. In questo caso l’ultima iterazione è `i === 4` i.e. quando `i` diventa uguale a `arr.length - 1` e `6` viene visualizzato nella la console. Quindi `i` diventa `5`, e il ciclo termina perché `i < arr.length` è uguale a `false`.

# --instructions--

Dichiara una variabile `total` e inizializzala a `0`. Usa un ciclo `for` per sommare il valore di ogni elemento dell'array `myArr` a `total`.

# --hints--

`total` dovrebbe essere dichiarato e inizializzato a 0.

```js
assert(code.match(/(var|let|const)\s*?total\s*=\s*0.*?;?/));
```

`total` dovrebbe essere uguale a 20.

```js
assert(total === 20);
```

Dovresti usare un ciclo `for` per iterare attraverso `myArr`.

```js
assert(/for\s*\(/g.test(code) && /myArr\s*\[/g.test(code));
```

Non dovresti tentare di assegnare direttamente il valore 20 a `total`.

```js
assert(!__helpers.removeWhiteSpace(code).match(/total[=+-]0*[1-9]+/gm));
```

# --seed--

## --after-user-code--

```js
(function(){if(typeof total !== 'undefined') { return "total = " + total; } else { return "total is undefined";}})()
```

## --seed-contents--

```js
// Setup
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line

```

# --solutions--

```js
const myArr = [2, 3, 4, 5, 6];
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}
```

---
id: cf1111c1c12feddfaeb2bdef
title: Generare numeri interi casuali all'interno di un intervallo
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

Puoi generare un numero intero casuale nell'intervallo da zero a un dato numero. Puoi anche scegliere un numero inferiore diverso per questo intervallo.

Chiamerai il numero minimo `min` e il numero massimo `max`.

Questa formula dà un numero intero casuale nell'intervallo da `min` a `max`. Prenditi un momento per leggerlo e prova a capire cosa sta facendo questo codice:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Crea una funzione `randomRange` che prende un intervallo `myMin` e `myMax` e restituisce un numero intero casuale maggiore o uguale di `myMin` e minore o uguale di `myMax`.

# --hints--

Il numero casuale più basso che può essere generato da `randomRange` dovrebbe essere uguale al tuo numero minimo, `myMin`.

```js
assert(calcMin === 5);
```

Il numero casuale più alto che può essere generato da `randomRange` dovrebbe essere uguale al tuo numero massimo, `myMax`.

```js
assert(calcMax === 15);
```

Il numero casuale generato da `randomRange` dovrebbe essere un numero intero, non un decimale.

```js
assert(randomRange(0, 1) % 1 === 0);
```

`randomRange` dovrebbe utilizzare sia `myMax` che `myMin`, e restituire un numero casuale nell'intervallo.

```js
assert(
  (function () {
    if (
      code.match(/myMax/g).length > 1 &&
      code.match(/myMin/g).length > 2 &&
      code.match(/Math.floor/g) &&
      code.match(/Math.random/g)
    ) {
      return true;
    } else {
      return false;
    }
  })()
);
```

# --seed--

## --after-user-code--

```js
var calcMin = 100;
var calcMax = -100;
for(var i = 0; i < 100; i++) {
  var result = randomRange(5,15);
  calcMin = Math.min(calcMin, result);
  calcMax = Math.max(calcMax, result);
}
(function(){
  if(typeof myRandom === 'number') {
    return "myRandom = " + myRandom;
  } else {
    return "myRandom undefined";
  }
})()
```

## --seed-contents--

```js
function randomRange(myMin, myMax) {
  return 0;
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```

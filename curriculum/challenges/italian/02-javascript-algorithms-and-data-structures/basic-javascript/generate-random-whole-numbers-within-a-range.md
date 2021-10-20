---
id: cf1111c1c12feddfaeb2bdef
title: Generare numeri interi casuali all'interno di un intervallo
challengeType: 1
videoUrl: 'https://scrimba.com/c/cm83yu6'
forumTopicId: 18187
dashedName: generate-random-whole-numbers-within-a-range
---

# --description--

Invece di generare un numero intero casuale tra zero e un dato numero come abbiamo fatto prima, possiamo generare un numero intero casuale che rientri in un intervallo tra due numeri specifici.

Per fare questo, definiremo un numero minimo `min` e un numero massimo `max`.

Ecco la formula che useremo. Prenditi un momento per leggerlo e prova a capire cosa sta facendo questo codice:

```js
Math.floor(Math.random() * (max - min + 1)) + min
```

# --instructions--

Crea una funzione `randomRange` che prende un intervallo `myMin` e `myMax` e restituisce un numero intero casuale maggiore o uguale di `myMin`, e minore o uguale di `myMax`.

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
  // Only change code below this line
  return 0;
  // Only change code above this line
}
```

# --solutions--

```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}
```

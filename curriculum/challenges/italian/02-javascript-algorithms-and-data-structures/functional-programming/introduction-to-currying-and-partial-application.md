---
id: 587d7dab367417b2b2512b70
title: Introduzione al currying e all'applicazione parziale
challengeType: 1
forumTopicId: 301232
dashedName: introduction-to-currying-and-partial-application
---

# --description--

L'<dfn>arietà</dfn> di una funzione è il numero di argomenti che essa richiede. Effetturare il <dfn>curry</dfn> di una funzione significa convertire una funzione di arietà N in N funzioni di arietà 1.

In altre parole, questa operazione ristruttura una funzione in modo che prenda un argomento, poi restituisce un'altra funzione che prende l'argomento successivo, e così via.

Ecco un esempio:

```js
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

const curried = x => y => x + y

curried(1)(2)
```

`curried(1)(2)` restituirà `3`.

Questo sarà utile nel tuo programma se non sarai in grado di fornire tutti gli argomenti ad una funzione in una sola volta. Potrai salvare ogni chiamata di funzione in una variabile, che manterrà il riferimento alla funzione restituita, che prenderà l'argomento successivo quando sarà disponibile. Ecco un esempio usando la funzione curried dell'esempio visto sopra:

```js
const funcForY = curried(1);
console.log(funcForY(2)); // 3
```

Allo stesso modo, <dfn>l'applicazione parziale</dfn> può essere descritta come l'applicazione di alcuni argomenti a una funzione alla volta e la restituzione di un'altra funzione che viene applicata a più argomenti. Ecco un esempio:

```js
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
```

# --instructions--

Riempi il corpo della funzione `add` in modo che usi il currying per aggiungere i parametri `x`, `y`, e `z`.

# --hints--

`add(10)(20)(30)` dovrebbe restituire `60`.

```js
assert(add(10)(20)(30) === 60);
```

`add(1)(2)(3)` dovrebbe restituire `6`.

```js
assert(add(1)(2)(3) === 6);
```

`add(11)(22)(33)` dovrebbe restituire `66`.

```js
assert(add(11)(22)(33) === 66);
```

Il tuo codice dovrebbe includere una dichiarazione finale che restituisca `x + y + z`.

```js
assert(code.match(/[xyz]\s*?\+\s*?[xyz]\s*?\+\s*?[xyz]/g));
```

# --seed--

## --seed-contents--

```js
function add(x) {
  // Only change code below this line


  // Only change code above this line
}

add(10)(20)(30);
```

# --solutions--

```js
const add = x => y => z => x + y + z
```

---
id: cf1111c1c12feddfaeb1bdef
title: Generare numeri interi casuali con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cRn6bfr'
forumTopicId: 18186
dashedName: generate-random-whole-numbers-with-javascript
---

# --description--

È fantastico poter generare numeri decimali casuali, ma è ancora più utile poter generare numeri interi casuali.

<ol><li>Utilizza <code>Math.random()</code> per generare un decimale casuale.</li><li>Moltiplica quel decimale casuale per <code>20</code>.</li><li>Usa un'altra funzione, <code>Math.floor()</code> per arrotondare il numero per difetto al numero intero più vicino.</li></ol>

Ricorda che `Math.random()` non può mai restituire un `1` e, poiché stiamo arrotondando per difetto, è impossibile ottenere effettivamente `20`. Questa tecnica ci darà un numero intero tra `0` e `19`.

Mettendo tutto insieme, questo è il nostro codice:

```js
Math.floor(Math.random() * 20);
```

Stiamo chiamando `Math.random()`, moltiplicando il risultato per 20, quindi passando il valore alla funzione `Math.floor()` per arrotondare il valore per difetto al numero intero più vicino.

# --instructions--

Usa questa tecnica per generare e restituire un numero intero casuale tra `0` e `9`.

# --hints--

Il risultato di `randomWholeNum` dovrebbe essere un numero intero.

```js
assert(
  typeof randomWholeNum() === 'number' &&
    (function () {
      var r = randomWholeNum();
      return Math.floor(r) === r;
    })()
);
```

Dovresti usare `Math.random` per generare un numero casuale.

```js
assert(code.match(/Math.random/g).length >= 1);
```

Dovresti moltiplicare il risultato di `Math.random` per 10 per renderlo un numero compreso tra zero e nove.

```js
assert(
  code.match(/\s*?Math.random\s*?\(\s*?\)\s*?\*\s*?10[\D]\s*?/g) ||
    code.match(/\s*?10\s*?\*\s*?Math.random\s*?\(\s*?\)\s*?/g)
);
```

Dovresti usare `Math.floor` per rimuovere la parte decimale del numero.

```js
assert(code.match(/Math.floor/g).length >= 1);
```

# --seed--

## --after-user-code--

```js
(function(){return randomWholeNum();})();
```

## --seed-contents--

```js
function randomWholeNum() {

  // Only change code below this line

  return Math.random();
}
```

# --solutions--

```js
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}
```

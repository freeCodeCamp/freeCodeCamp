---
id: cf1111c1c11feddfaeb9bdef
title: Generare frazioni casuali con JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/cyWJJs3'
forumTopicId: 18185
dashedName: generate-random-fractions-with-javascript
---

# --description--

I numeri casuali sono utili per creare comportamenti casuali.

JavaScript ha una funzione `Math.random()` che genera un numero decimale casuale tra `0` (incluso) e `1` (escluso). Così `Math.random()` può restituire uno `0` ma mai un `1`.

**Nota:** Come visto in <a href="/learn/javascript-algorithms-and-data-structures/basic-javascript/storing-values-with-the-assignment-operator" target="_blank" rel="noopener noreferrer nofollow">Memorizzare valori con l'operatore di assegnazione</a>, tutte le chiamate di funzione saranno risolte prima dell'esecuzione del `return`, così possiamo fare un `return` del valore della funzione `Math.random()`.

# --instructions--

Cambia `randomFraction` per restituire un numero casuale invece di restituire `0`.

# --hints--

`randomFraction` dovrebbe restituire un numero casuale.

```js
assert(typeof randomFraction() === 'number');
```

Il numero restituito da `randomFraction` dovrebbe essere un decimale.

```js
assert((randomFraction() + '').match(/\./g));
```

Dovresti usare `Math.random` per generare il numero decimale casuale.

```js
assert(code.match(/Math\.random/g).length >= 0);
```

# --seed--

## --after-user-code--

```js
(function(){return randomFraction();})();
```

## --seed-contents--

```js
function randomFraction() {

  // Only change code below this line

  return 0;

  // Only change code above this line
}
```

# --solutions--

```js
function randomFraction() {
  return Math.random();
}
```

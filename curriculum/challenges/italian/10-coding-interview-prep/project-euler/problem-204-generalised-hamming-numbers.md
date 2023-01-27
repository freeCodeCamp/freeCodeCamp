---
id: 5900f4381000cf542c50ff4b
title: 'Problema 204: Numeri Di Hamming generalizzati'
challengeType: 1
forumTopicId: 301845
dashedName: problem-204-generalised-hamming-numbers
---

# --description--

Un numero di Hamming è un numero positivo che non ha un fattore primo maggiore di 5.

Così i primi numeri di Hamming sono 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15.

Ci sono 1105 numeri di Hamming non superiori a ${10}^8$.

Chiameremo un numero positivo un numero generalizzato di Hamming di tipo $n$, se non ha un fattore primo maggiore di $n$. Di conseguenza, i numeri di Hamming sono i numeri di Hamming generalizzati di tipo 5.

Quanti numeri di Hamming generalizzati di tipo 100 ci sono che non superano ${10}^9$?

# --hints--

`generalisedHammingNumbers()` dovrebbe restituire `2944730`.

```js
assert.strictEqual(generalisedHammingNumbers(), 2944730);
```

# --seed--

## --seed-contents--

```js
function generalisedHammingNumbers() {

  return true;
}

generalisedHammingNumbers();
```

# --solutions--

```js
// solution required
```

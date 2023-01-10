---
id: 5900f40a1000cf542c50ff1d
title: >-
  Problema 158: Esplorare le stringhe per le quali un solo carattere viene lessicograficamente dopo il suo vicino a sinistra
challengeType: 1
forumTopicId: 301789
dashedName: >-
  problem-158-exploring-strings-for-which-only-one-character-comes-lexicographically-after-its-neighbour-to-the-left
---

# --description--

Prendendo tre lettere diverse dalle 26 lettere dell'alfabeto, si possono formare stringhe di caratteri di lunghezza tre.

Esempi sono 'abc', 'hat' e 'zyx'.

Quando studiamo questi tre esempi vediamo che per 'abc' due caratteri vengono lessicograficamente dopo il loro vicino a sinistra.

Per 'hat' c'è esattamente un carattere che viene lessicograficamente dopo il suo vicino a sinistra. Per 'zyx' ci sono zero caratteri che vengono lessicograficamente dopo il loro vicino a sinistra.

In tutto ci sono 10400 stringhe di lunghezza 3 per le quali esattamente un carattere viene lessicograficamente dopo il suo vicino a sinistra.

Ora consideriamo stringhe di $n ≤ 26$ caratteri diversi dell'alfabeto.

Per ogni $n$, $p(n)$ è il numero di stringhe di lunghezza $n$ per cui esattamente un carattere viene lessicograficamente dopo il suo vicino a sinistra.

Qual è il valore massimo di $p(n)$?

# --hints--

`lexicographicNeighbours()` dovrebbe tornare `409511334375`.

```js
assert.strictEqual(lexicographicNeighbours(), 409511334375);
```

# --seed--

## --seed-contents--

```js
function lexicographicNeighbours() {

  return true;
}

lexicographicNeighbours();
```

# --solutions--

```js
// solution required
```

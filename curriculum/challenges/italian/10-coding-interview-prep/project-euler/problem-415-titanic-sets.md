---
id: 5900f50c1000cf542c51001e
title: 'Problema 415: Set titanici'
challengeType: 1
forumTopicId: 302084
dashedName: problem-415-titanic-sets
---

# --description--

Un set di punti del reticolo $S$ è chiamato set titanico se esiste una linea che passa esattamente attraverso due punti in $S$.

Un esempio di un set titanico è $S = \\{(0, 0), (0, 1), (0, 2), (1, 1), (2, 0), (1, 0)\\}$, dove la linea che passa attraverso (0, 1) e (2, 0) non passa attraverso altri punti in $S$.

D'altra parte, il set {(0, 0), (1, 1), (2, 2), (4, 4)} non è un set titanico poiché la linea che passa attraverso due punti del set passa anche attraverso gli altri due.

Per ciascun numero intero positivo $N$, lascia $T(N)$ essere il numero di serie titaniche $S$ di cui ogni punto ($x$, $y$) soddisfa $0 ≤ x$, $y ≤ N$. Si può verificare che $T(1) = 11$, $T(2) = 494$, $T(4) = 33\\,554\\,178$, $T(111)\bmod {10}^8 = 13\\,500\\,401$ e $T({10}^5)\bmod {10}^8 = 63\\,259\\,062$.

Trova $T({10}^{11})\bmod {10}^8$.

# --hints--

`titanicSets()` dovrebbe restituire `55859742`.

```js
assert.strictEqual(titanicSets(), 55859742);
```

# --seed--

## --seed-contents--

```js
function titanicSets() {

  return true;
}

titanicSets();
```

# --solutions--

```js
// solution required
```

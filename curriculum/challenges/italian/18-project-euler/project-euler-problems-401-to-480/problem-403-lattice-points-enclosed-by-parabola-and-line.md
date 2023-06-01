---
id: 5900f5001000cf542c510013
title: 'Problema 403: punti del reticolo delimitati da parabola e linea'
challengeType: 1
forumTopicId: 302071
dashedName: problem-403-lattice-points-enclosed-by-parabola-and-line
---

# --description--

Per i numeri interi $a$ e $b$, definiamo $D(a, b)$ come il dominio racchiuso dalla parabola $y = x^2$ e la retta $y = ax + b: D(a, b) = \\{ (x, y) | x^2 ≤ y ≤ ax + b \\}$.

$L(a, b)$ è definito come il numero di punti del reticolo contenuti in $D(a, b)$. Per esempio, $L(1, 2) = 8$ e $L(2, -1) = 1$.

Definiamo anche $S(N)$ come la somma di $L(a, b)$ per tutte le coppie ($a$, $b$) per cui l'area di $D(a, b)$ è un numero razionale e $|a|,|b| ≤ N$.

Possiamo verificare che $S(5) = 344$ e $S(100) = 26\\,709\\,528$.

Trova $S({10}^{12})$. Dai la tua risposta $\bmod {10}^8$.

# --hints--

`latticePoints()` dovrebbe restituire `18224771`.

```js
assert.strictEqual(latticePoints(), 18224771);
```

# --seed--

## --seed-contents--

```js
function latticePoints() {

  return true;
}

latticePoints();
```

# --solutions--

```js
// solution required
```

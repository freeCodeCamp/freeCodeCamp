---
id: 5900f50c1000cf542c51001e
title: 'Problema 415: Conjuntos Titanic'
challengeType: 1
forumTopicId: 302084
dashedName: problem-415-titanic-sets
---

# --description--

Un conjunto de puntos de celosía $S$ se denomina conjunto titanic si existe una línea que pasa exactamente por dos puntos en $S$.

Un ejemplo de un conjunto titanic es $S = \\{(0, 0), (0, 1), (0, 2), (1, 1), (2, 0), (1, 0)\\}$, donde la linea pasa a través de (0, 1) y (2, 0) no pasa a través de ningun otro punto en $S$.

Por otra parte, el conjunto {(0, 0), (1, 1), (2, 2), (4, 4)} no es un conjunto titanic ya que la línea que pasa por cualquiera de los dos puntos del conjunto también pasa por los otros dos.

Para cualquier entero positivo $N$, sea $T(N)$ el número de conjuntos titánicos $S$ cuyos puntos ($x$, $y$) satisfacen $ 0 ≤ x$, $y ≤ N$. Se puede comprobar que $T(1) = 11$, $T(2) = 494$, $T(4) = 33\4\ 178$, $T(111)\bmod {10}^8 = 13\ 500\ 401$ y $T({10}^5)\bmod {10}^8 = 63\ 259\ 062$.

Encuentra $T({10}^{11})\bmod {10}^8$.

# --hints--

`titanicSets()` debe regresar `55859742`.

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

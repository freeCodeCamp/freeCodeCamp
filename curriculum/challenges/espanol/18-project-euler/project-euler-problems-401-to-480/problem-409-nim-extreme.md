---
id: 5900f5061000cf542c510017
title: 'Problema 409: Extremo de Nim'
challengeType: 1
forumTopicId: 302077
dashedName: problem-409-nim-extreme
---

# --description--

Let $n$ be a positive integer. Consider nim positions where:

- There are $n$ non-empty piles.
- Cada pila tiene tamaño menor que $2^n$.
- No hay dos pilas que tengan el mismo tamaño.

Sea $W(n)$ el número de posiciones nim ganadoras que satisfagan las condiciones anteriores (Una posición es ganadora si el primer jugador tiene una estrategia ganadora).

Por ejemplo, $W(1) = 1$, $W(2) = 6$, $W(3) = 168$, $W(5) = 19\\,764\\,360$ y $W(100)\bmod 1\\,000\\,000\\,007 = 384\\,777\\,056$.

Encontrar $W(10\\,000\\,000)\bmod 1\\,000\\,000\\,007$.

# --hints--

`nimExtreme()` debería devolver `253223948`.

```js
assert.strictEqual(nimExtreme(), 253223948);
```

# --seed--

## --seed-contents--

```js
function nimExtreme() {

  return true;
}

nimExtreme();
```

# --solutions--

```js
// solution required
```

---
id: 5900f5001000cf542c510013
title: 'Завдання 403: точки сітки, обмежені параболою та прямою'
challengeType: 1
forumTopicId: 302071
dashedName: problem-403-lattice-points-enclosed-by-parabola-and-line
---

# --description--

Визначимо $D(a, b)$ для цілих чисел $a$ та $b$ як область, обмежену параболою $y = x^2$ та прямою $y = ax + b: D(a, b) = \\{ (x, y) | x^2 ≤ y ≤ ax + b \\}$.

$L(a, b)$ визначено як кількість точок сітки в $D(a, b)$. Наприклад, $L(1, 2) = 8$ та $L(2, -1) = 1$.

Також визначимо $S(N)$ як суму $L(a, b)$ для всіх пар ($a$, $b$), за яких область $D(a, b)$ є раціональним числом та $|a|,|b| ≤ N$.

Можна довести, що $S(5) = 344$ та $S(100) = 26\\,709\\,528$.

Знайдіть $S({10}^{12})$. Надайте відповідь за $\bmod {10}^8$.

# --hints--

`latticePoints()` має повернути `18224771`.

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

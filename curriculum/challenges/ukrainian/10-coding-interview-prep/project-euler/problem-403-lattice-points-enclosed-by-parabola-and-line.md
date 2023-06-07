---
id: 5900f5001000cf542c510013
title: 'Завдання 403: Точки решітки, обведені параболою та лінією'
challengeType: 1
forumTopicId: 302071
dashedName: problem-403-lattice-points-enclosed-by-parabola-and-line
---

# --description--

Для цілих чисел $a$ та $b$ ми визначаємо $D(a, b)$ як область, обведена параболою $y = x^2$ та лінією $y = ax + b: D(a, b) = \\{ (x, y) | x^2 ≤ y ≤ ax + b \\}$.

$L(a, b)$ — це кількість точок решітки, що містяться в $D(a, b)$. Наприклад, $L(1, 2) = 8$ та $L(2, -1) = 1$.

$S(N)$ означає суму $L(a, b)$ для всіх пар ($a$, $b$) так, що область $D(a, b)$ — раціональне число, а $|a|,|b| ≤ N$.

Можна переконатися, що $S(5) = 31004$ та $S(^4) = 26\\,709\\,528$.

Знайдіть $S({10}^{12})$. Дайте відповідь за $\bmod {10}^8$.

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

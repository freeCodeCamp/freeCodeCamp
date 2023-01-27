---
id: 5900f4f91000cf542c51000c
title: 'Задача 397: Трикутник на параболі'
challengeType: 1
forumTopicId: 302062
dashedName: problem-397-triangle-on-parabola
---

# --description--

На параболі $y = \frac{x^2}{k}$ обрано три точки: $A(a, \frac{a^2}{k})$, $B(b, \frac{b^2}{k})$ та $C(c, \frac{c^2}{k})$.

Нехай $F(K, X)$ — кількість цілочисельних квадруплетів $(k, a, b, c)$ так, що хоча б один кут трикутника $ABC$ має 45°, а $1 ≤ k ≤ K$ та $-X ≤ a &lt; b &lt; c ≤ X$.

Наприклад, $F(1, 10) = 41$ and $F(10, 100) = 12\\,492$.

Знайдіть $F({10}^6, {10}^9)$.

# --hints--

`triangleOnParabola()` має повернути `141630459461893730`.

```js
assert.strictEqual(triangleOnParabola(), 141630459461893730);
```

# --seed--

## --seed-contents--

```js
function triangleOnParabola() {

  return true;
}

triangleOnParabola();
```

# --solutions--

```js
// solution required
```

---
id: 5900f4f21000cf542c510005
title: 'Задача 390: Трикутники зі сторонами та площею, що вимірюється цілими числами'
challengeType: 1
forumTopicId: 302055
dashedName: problem-390-triangles-with-non-rational-sides-and-integral-area
---

# --description--

Розглянемо трикутник зі сторонами $\sqrt{5}$, $\ sqrt{65}$ та $\sqrt{68}$. Можна показати, що площа цього трикутника дорівнює 9.

$S(n)$ - це сума площ усіх трикутників зі сторонами $\sqrt{1 + b^2}$, $\sqrt{1 + c^2}$ та $\sqrt{b^2 + c ^2}$ (для натуральних чисел $b$ і $c$), які мають цілісну площу, що не перевищує $n$.

Наприклад $b = 2$ і $c = 8$.

$S({10}^6) = 18\\,018\\,206$.

Знайдіть $S({10}^{10})$.

# --hints--

`nonRationalSidesAndIntegralArea()` повинен повернути `2919133642971`.

```js
assert.strictEqual(nonRationalSidesAndIntegralArea(), 2919133642971);
```

# --seed--

## --seed-contents--

```js
function nonRationalSidesAndIntegralArea() {

  return true;
}

nonRationalSidesAndIntegralArea();
```

# --solutions--

```js
// solution required
```

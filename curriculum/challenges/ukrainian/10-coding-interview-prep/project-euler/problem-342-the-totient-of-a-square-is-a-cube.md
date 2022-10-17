---
id: 5900f4c31000cf542c50ffd5
title: 'Задача 342: Функція квадрата - куб'
challengeType: 1
forumTopicId: 302001
dashedName: problem-342-the-totient-of-a-square-is-a-cube
---

# --description--

Розглянемо число 50.

${50}^2 = 2500 = 2^2 × 5^4$, отже $φ(2500) = 2 × 4 × 5^3 = 8 × 5^3 = 2^3 × 5^3$. $φ$ позначає функцію Ейлера.

Отже, 2500 - квадрат, а $φ(2500)$ - куб.

Знайдіть суму всіх чисел $n$, $1 &lt; n &lt; {10}^{10}$ при якій $φ(n^2)$ є кубом.


# --hints--

`totientOfSquare()` має повертати `5943040885644`.

```js
assert.strictEqual(totientOfSquare(), 5943040885644);
```

# --seed--

## --seed-contents--

```js
function totientOfSquare() {

  return true;
}

totientOfSquare();
```

# --solutions--

```js
// solution required
```

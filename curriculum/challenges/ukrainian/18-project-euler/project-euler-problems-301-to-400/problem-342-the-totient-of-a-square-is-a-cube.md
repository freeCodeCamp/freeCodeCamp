---
id: 5900f4c31000cf542c50ffd5
title: 'Завдання 342: функцією Ейлера квадрата є куб'
challengeType: 1
forumTopicId: 302001
dashedName: problem-342-the-totient-of-a-square-is-a-cube
---

# --description--

Розглянемо число 50.

${50}^2 = 2500 = 2^2 × 5^4$, отже $φ(2500) = 2 × 4 × 5^3 = 8 × 5^3 = 2^3 × 5^3$. $φ$ позначає функцію Ейлера.

Тому 2500 є квадратом, а $φ(2500)$ є кубом.

Знайдіть суму всіх чисел $n$ за умови $1 &lt; n &lt; {10}^{10}$, за яких $φ(n^2)$ є кубом.


# --hints--

`totientOfSquare()` має повернути `5943040885644`.

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

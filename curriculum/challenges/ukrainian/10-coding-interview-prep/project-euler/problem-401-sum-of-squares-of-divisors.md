---
id: 5900f4fd1000cf542c51000f
title: 'Завдання 401: Сума квадратів дільників'
challengeType: 1
forumTopicId: 302069
dashedName: problem-401-sum-of-squares-of-divisors
---

# --description--

Дільниками числа 6 є 1, 2, 3 і 6.

Сума квадратів цих чисел дорівнює $1 + 4 + 9 + 36 = 50$.

$\sigma_2(n)$ позначає суму квадратів дільників $n$. Отже, $\sigma_2(6) = 50$.

$\Sigma_2$ позначає функцію суми $\sigma_2$, тобто $\Sigma_2(n) = \sum \sigma_2(i)$ для $i=1$ to $n$. Першими 6 значеннями $\Sigma_2$ є 1, 6, 16, 37, 63 і 113.

Знайдіть $\Sigma_2({10}^{15})$ за модулем ${10}^9$.

# --hints--

`sumOfSquaresDivisors()` повинен повернути `281632621`.

```js
assert.strictEqual(sumOfSquaresDivisors(), 281632621);
```

# --seed--

## --seed-contents--

```js
function sumOfSquaresDivisors() {

  return true;
}

sumOfSquaresDivisors();
```

# --solutions--

```js
// solution required
```

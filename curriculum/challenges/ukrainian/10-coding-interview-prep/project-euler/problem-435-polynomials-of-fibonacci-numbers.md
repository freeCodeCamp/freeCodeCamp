---
id: 5900f5201000cf542c510032
title: 'Завдання 435: Многочлени чисел Фібоначчі'
challengeType: 1
forumTopicId: 302106
dashedName: problem-435-polynomials-of-fibonacci-numbers
---

# --description--

Числа Фібоначчі $\\{f_n, n ≥ 0 \\}$ визначаються рекурсивно як $f_n = f_{n - 1} + f_{n - 2}$ з базовими випадками $f_0 = 0 $ та $f_1 = 1$.

Визначте многочлен $\\{F_n, n ≥ 0 \\} $ як $F_n(x) = \displaystyle\sum_ {i = 0}^n f_ix^i$.

Наприклад, $F_7(x) = x + x^2 + 2x^3 + 3x^4 + 5x^5 + 8x^6 + 13x^7$ і $F_7(11) = 268\\,357\\,683 $.

Нехай $n = {10}^{15}$. Знайдіть суму $\displaystyle\sum_ {x = 0}^{100} F_n(x)$ і дайте відповідь за модулем $1\\, 307\\,674\\,368\\,000\\, (= 15!)$.

# --hints--

`polynomialsOfFibonacciNumbers()` повинен видати `252541322550`.

```js
assert.strictEqual(polynomialsOfFibonacciNumbers(), 252541322550);
```

# --seed--

## --seed-contents--

```js
function polynomialsOfFibonacciNumbers() {

  return true;
}

polynomialsOfFibonacciNumbers();
```

# --solutions--

```js
// solution required
```

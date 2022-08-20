---
id: 5900f5331000cf542c510046
title: 'Завдання 455: Степені з кінцевими цифрами'
challengeType: 1
forumTopicId: 302129
dashedName: problem-455-powers-with-trailing-digits
---

# --description--

Нехай $f(n)$ — це найбільше ціле додатне число $x$, менше за ${10}^9$, при якому останні 9 цифр $n^x$ формують число $x$ (включаючи провідні нулі), або нуль, якщо не існує таких цілих чисел.

Наприклад:

$$\begin{align} & f(4) = 411\\,728\\,896 (4^{411\\,728\\,896} = . ..490\underline{411728896}) \\\\
  & f(10) = 0 \\\\   & f(157) = 743\\,757 (157^{743\\,757} = ...567\underline{000743757}) \\\\
  & Σf(n), 2 ≤ n ≤ 103 = 442\\,530\\,011\\,399 \end{align}$$

Знайдіть $\sum f(n)$, $2 ≤ n ≤ {10}^6$.

# --hints--

`powersWithTrailingDigits()` повинен повернути `450186511399999`.

```js
assert.strictEqual(powersWithTrailingDigits(), 450186511399999);
```

# --seed--

## --seed-contents--

```js
function powersWithTrailingDigits() {

  return true;
}

powersWithTrailingDigits();
```

# --solutions--

```js
// solution required
```

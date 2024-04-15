---
id: 5900f5331000cf542c510046
title: 'Завдання 455: кінцеві цифри степеня'
challengeType: 1
forumTopicId: 302129
dashedName: problem-455-powers-with-trailing-digits
---

# --description--

Нехай $f(n)$ буде найбільшим натуральним числом $x$ меншим за ${10}^9$, за якого останні дев’ять цифр $n^x$ утворюють число $x$ (включно з провідними нулями), або нуль, якщо такого числа не існує.

Наприклад:

$$\begin{align}   & f(4) = 411\\,728\\,896 (4^{411\\,728\\,896} = ...490\underline{411728896}) \\\\
  & f(10) = 0 \\\\   & f(157) = 743\\,757 (157^{743\\,757} = ...567\underline{000743757}) \\\\
  & Σf(n), 2 ≤ n ≤ 103 = 442\\,530\\,011\\,399 \end{align}$$

Знайдіть $\sum f(n)$, $2 ≤ n ≤ {10}^6$.

# --hints--

`powersWithTrailingDigits()` має повернути `450186511399999`.

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

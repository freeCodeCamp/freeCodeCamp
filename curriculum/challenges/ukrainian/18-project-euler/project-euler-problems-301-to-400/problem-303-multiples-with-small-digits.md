---
id: 5900f49b1000cf542c50ffae
title: 'Завдання 303: кратні числа з малими цифрами'
challengeType: 1
forumTopicId: 301957
dashedName: problem-303-multiples-with-small-digits
---

# --description--

Визначимо $f(n)$, де $n$ є натуральним числом, як найменше додатне кратне числа $n$, для десяткового запису якого використовують цифри $≤ 2$.

Отже, $f(2) = 2$, $f(3) = 12$, $f(7) = 21$, $f(42) = 210$, $f(89) = 1\\,121\\,222$.

Також, $\displaystyle\sum_{n = 1}^{100} \frac{f(n)}{n} = 11\\,363\\,107$.

Знайдіть $\displaystyle\sum_{n = 1}^{10\\,000} \frac{f(n)}{n}$.

# --hints--

`multiplesWithSmallDigits()` має повернути `1111981904675169`.

```js
assert.strictEqual(multiplesWithSmallDigits(), 1111981904675169);
```

# --seed--

## --seed-contents--

```js
function multiplesWithSmallDigits() {

  return true;
}

multiplesWithSmallDigits();
```

# --solutions--

```js
// solution required
```

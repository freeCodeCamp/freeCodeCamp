---
id: 5900f4d11000cf542c50ffe4
title: 'Завдання 357: цілі числа, які генерують прості числа'
challengeType: 1
forumTopicId: 302017
dashedName: problem-357-prime-generating-integers
---

# --description--

Розглянемо дільники числа 30: 1, 2, 3, 5, 6, 10, 15, 30.

Можна побачити, що для кожного дільника $d$ числа 30, $d + \frac{30}{d}$ є простим числом.

Знайдіть суму всіх натуральних чисел $n$ менших ніж $100\\,000\\,000$, за яких кожен дільник $d$ числа $n$, $d + \frac{n}{d}$ є простим числом.

# --hints--

`primeGeneratingIntegers()` має повернути `1739023853137`.

```js
assert.strictEqual(primeGeneratingIntegers(), 1739023853137);
```

# --seed--

## --seed-contents--

```js
function primeGeneratingIntegers() {

  return true;
}

primeGeneratingIntegers();
```

# --solutions--

```js
// solution required
```

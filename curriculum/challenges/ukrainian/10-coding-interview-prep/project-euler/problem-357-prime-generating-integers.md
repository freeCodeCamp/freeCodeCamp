---
id: 5900f4d11000cf542c50ffe4
title: 'Задача 357: Прості генератори цілих чисел'
challengeType: 1
forumTopicId: 302017
dashedName: problem-357-prime-generating-integers
---

# --description--

Розглянемо дільники 30: 1, 2, 3, 5, 6, 10, 15, 30.

Видно, що для кожного дільника $d$30, $d + \frac {30}{d} $ є простим числом.

Знайдіть суму всіх натуральних чисел $n$, що не перевищує $100\\,000\\,000$ так, що для кожного дільника $d$ з $n$, $d + \frac {n}{d}$ є просте число.

# --hints--

`primeGeneratingIntegers()` повинен повернути `1739023853137`.

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

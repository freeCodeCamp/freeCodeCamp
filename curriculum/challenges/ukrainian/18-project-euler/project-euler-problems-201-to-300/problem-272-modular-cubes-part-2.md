---
id: 5900f47d1000cf542c50ff8f
title: 'Завдання 272: модульні куби, частина 2'
challengeType: 1
forumTopicId: 301922
dashedName: problem-272-modular-cubes-part-2
---

# --description--

Визначимо $C(n)$ для додатного числа $n$ як суму цілих чисел $x$, за яких $1 < x < n$ та $x^3 \equiv 1\bmod n$.

За умови $n = 91$ існує 8 можливих значень $x$, а саме: 9, 16, 22, 29, 53, 74, 79, 81. Таким чином, $C(91) = 8$.

Знайдіть суму додатних чисел $n ≤ {10}^{11}$, за яких $C(n)=242$.

# --hints--

`modularCubesTwo()` має повернути `8495585919506151000`.

```js
assert.strictEqual(modularCubesTwo(), 8495585919506151000);
```

# --seed--

## --seed-contents--

```js
function modularCubesTwo() {

  return true;
}

modularCubesTwo();
```

# --solutions--

```js
// solution required
```

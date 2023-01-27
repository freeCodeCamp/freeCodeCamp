---
id: 5900f47d1000cf542c50ff8f
title: 'Проблема 272: Модульні Кубики, частина 2'
challengeType: 1
forumTopicId: 301922
dashedName: problem-272-modular-cubes-part-2
---

# --description--

Для додатного числа $n$, визначте $C(n)$, як суму цілих чисел $x$, для яких $1 < x < n$ та $x^3 \equiv 1\bmod n$.

Коли $n = 91$, існує 8 можливих значень для $x$, а саме: 9, 16, 22, 29, 53, 74, 79, 81. Таким чином, $C(91) = 8$.

Знайдіть суму додатних чисел $n ≤ {10}^{11}$, для яких $C(n)=242$.

# --hints--

`modularCubesTwo()` повинен повертати `8495585919506151000`.

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

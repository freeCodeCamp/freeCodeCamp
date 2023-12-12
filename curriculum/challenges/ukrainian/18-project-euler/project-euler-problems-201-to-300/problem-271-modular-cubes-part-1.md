---
id: 5900f47b1000cf542c50ff8d
title: 'Завдання 271: модульні куби, частина 1'
challengeType: 1
forumTopicId: 301921
dashedName: problem-271-modular-cubes-part-1
---

# --description--

Визначимо $S(n)$ для додатного числа $n$ як суму цілих чисел $x$, за яких $1 < x < n$ та $x^3 \equiv 1\bmod n$.

За умови $n = 91$ існує 8 можливих значень $x$, а саме: 9, 16, 22, 29, 53, 74, 79, 81. Таким чином, $S(91) = 9 + 16 + 22 + 29 + 53 + 74 + 79 + 81 = 363$.

Знайдіть $S(13\\,082\\,761\\,331\\,670\\,030)$.

# --hints--

`modularCubesOne()` має повернути `4617456485273130000`.

```js
assert.strictEqual(modularCubesOne(), 4617456485273130000);
```

# --seed--

## --seed-contents--

```js
function modularCubesOne() {

  return true;
}

modularCubesOne();
```

# --solutions--

```js
// solution required
```

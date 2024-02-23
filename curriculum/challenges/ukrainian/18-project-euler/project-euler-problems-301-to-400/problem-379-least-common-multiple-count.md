---
id: 5900f4e81000cf542c50fffa
title: 'Завдання 379: кількість найменших спільних кратних'
challengeType: 1
forumTopicId: 302041
dashedName: problem-379-least-common-multiple-count
---

# --description--

Нехай $f(n)$ буде кількістю пар ($x$, $y$), де $x$ та $y$ є натуральними числами, $x ≤ y$, а найменше спільне кратне чисел $x$ та $y$ дорівнює $n$.

Нехай $g$ буде суматорною функцією $f$, тобто $g(n) = \sum f(i)$ за умови $1 ≤ i ≤ n$.

Дано, що $g({10}^6) = 37\\,429\\,395$.

Знайдіть $g({10}^{12})$.

# --hints--

`leastCommonMultipleCount()` має повернути `132314136838185`.

```js
assert.strictEqual(leastCommonMultipleCount(), 132314136838185);
```

# --seed--

## --seed-contents--

```js
function leastCommonMultipleCount() {

  return true;
}

leastCommonMultipleCount();
```

# --solutions--

```js
// solution required
```

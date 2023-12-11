---
id: 5900f4571000cf542c50ff6a
title: 'Завдання 235: арифметично-геометрична послідовність'
challengeType: 1
forumTopicId: 301879
dashedName: problem-235-an-arithmetic-geometric-sequence
---

# --description--

Дано арифметично-геометричну послідовність $u(k) = (900 - 3k)r^{k - 1}$.

Нехай $s(n) = \sum_{k=1 \ldots n} u(k)$.

Знайдіть значення $r$, за якого $s(5000) = -600\\,000\\,000\\,000$.

Дайте відповідь, заокруглену до дванадцяти знаків після коми.

# --hints--

`arithmeticGeometricSequence()` має повернути `1.002322108633`.

```js
assert.strictEqual(arithmeticGeometricSequence(), 1.002322108633);
```

# --seed--

## --seed-contents--

```js
function arithmeticGeometricSequence() {

  return true;
}

arithmeticGeometricSequence();
```

# --solutions--

```js
// solution required
```

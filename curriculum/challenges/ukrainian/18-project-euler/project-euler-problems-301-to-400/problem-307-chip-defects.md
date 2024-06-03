---
id: 5900f4a01000cf542c50ffb2
title: 'Завдання 307: дефекти чіпів'
challengeType: 1
forumTopicId: 301961
dashedName: problem-307-chip-defects
---

# --description--

$k$ дефектів випадково розподілено серед $n$ інтегрованих чіпів, випущених заводом (на чіпі можна знайти будь-яку кількість дефектів та жодний дефект не залежить від іншого).

Нехай $p(k,n)$ представляє ймовірність того, що існує чіп зі щонайменше 3 дефектами. Наприклад, $p(3,7) ≈ 0.0204081633$.

Знайдіть $p(20\\,000, 1\\,000\\,000)$ та дайте відповідь, заокруглену до десяти знаків після коми у форматі 0.abcdefghij

# --hints--

`chipDefects()` має повернути `0.7311720251`.

```js
assert.strictEqual(chipDefects(), 0.7311720251);
```

# --seed--

## --seed-contents--

```js
function chipDefects() {

  return true;
}

chipDefects();
```

# --solutions--

```js
// solution required
```

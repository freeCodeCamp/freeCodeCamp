---
id: 5900f37a1000cf542c50fe8d
title: 'Завдання 14: Найдовша послідовність Коллатца'
challengeType: 1
forumTopicId: 301768
dashedName: problem-14-longest-collatz-sequence
---

# --description--

Наступна ітераційна послідовність визначена для набору додатних цілих чисел:

<div style='padding-left: 4em;'><var>n</var> → <var>n</var>/2 (<var>n</var> є парним)</div>

<div style='padding-left: 4em;'><var>n</var> → 3<var>n</var> + 1 (<var>n</var> є непарним)</div>

Використовуючи правило вище та починаючи з 13, ми згенеруємо наступну послідовність:

<div style='text-align: center;'>13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1</div>

Можна побачити, що ця послідовність (починається з 13 та закінчується 1) містить 10 членів. Хоча це ще не доведено (проблема Коллатца), вважається, що кожне початкове число також закінчиться 1-ею.

Яке початкове число, під заданим лімітом - `limit`, створює найдовшу послідовність?

**Примітка:** Як тільки послідовність запуститься, значення можуть досягати більше `limit`.

# --hints--

`longestCollatzSequence(14)` має повернути число.

```js
assert(typeof longestCollatzSequence(14) === 'number');
```

`longestCollatzSequence(14)` має повернути 9.

```js
assert.strictEqual(longestCollatzSequence(14), 9);
```

`longestCollatzSequence(5847)` має повернути 3711.

```js
assert.strictEqual(longestCollatzSequence(5847), 3711);
```

`longestCollatzSequence(46500)` має повернути 35655.

```js
assert.strictEqual(longestCollatzSequence(46500), 35655);
```

`longestCollatzSequence(54512)` має повернути 52527.

```js
assert.strictEqual(longestCollatzSequence(54512), 52527);
```

`longestCollatzSequence(100000)` має повернути 77031.

```js
assert.strictEqual(longestCollatzSequence(100000), 77031);
```

`longestCollatzSequence(1000000)` має повернути 837799.

```js
assert.strictEqual(longestCollatzSequence(1000000), 837799);
```

# --seed--

## --seed-contents--

```js
function longestCollatzSequence(limit) {

  return true;
}

longestCollatzSequence(14);
```

# --solutions--

```js
function longestCollatzSequence(limit) {
  let longest = 1;
  let maxLength = 1;
  for (let i = Math.floor(limit / 2); i < limit; i++) {
    let len = colLen(i);
    if (len > maxLength) {
      longest = i;
      maxLength = len;
    }
  }
  return longest;
}

const knownSequence = { '1': 1 };

function colLen(n) {
  if (knownSequence[n]) {
    return knownSequence[n];
  } else {
    const len = n % 2 === 0 ? colLen(n / 2) + 1 : colLen((3 * n + 1) / 2) + 2;
    knownSequence[n] = len;
    return len;
  }
}
```

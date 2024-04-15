---
id: 5900f4311000cf542c50ff44
title: 'Завдання 197: вивчення поведінки рекурсивно визначеної послідовності'
challengeType: 1
forumTopicId: 301835
dashedName: problem-197-investigating-the-behaviour-of-a-recursively-defined-sequence
---

# --description--

За даної функції $f(x) = ⌊{2}^{30.403243784 - x^2}⌋ × {10}^{-9}$ ( ⌊ ⌋ є функцією підлоги) послідовність $u_n$ визначена як $u_0 = -1$ та $u_{n + 1} = f(u_n)$.

Знайдіть $u_n + u_{n + 1}$ за умови $n = {10}^{12}$. Відповідь закругліть до дев’яти цифр після коми.

# --hints--

`recursivelyDefinedSequence()` має повернути `1.710637717`.

```js
assert.strictEqual(recursivelyDefinedSequence(), 1.710637717);
```

# --seed--

## --seed-contents--

```js
function recursivelyDefinedSequence() {

  return true;
}

recursivelyDefinedSequence();
```

# --solutions--

```js
// solution required
```

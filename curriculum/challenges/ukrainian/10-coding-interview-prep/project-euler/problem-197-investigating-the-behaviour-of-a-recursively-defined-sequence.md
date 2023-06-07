---
id: 5900f4311000cf542c50ff44
title: 'Завдання 197: Дослідження поведінки рекурсивно визначеної послідовності'
challengeType: 1
forumTopicId: 301835
dashedName: problem-197-investigating-the-behaviour-of-a-recursively-defined-sequence
---

# --description--

Дано: функція $f(x) = <unk>{2}^{30. 03243784 - x^2}<unk> <unk> {10}^{-9}$ (<unk> це ціла частина дійсного числа), послідовність $u_n$ визначається як $u_0 = -1$ та $u_{n + 1} = f(u_n)$.

Знайдіть $u_n + u_{n + 1}$ для $n = {10}^{12}$. Дайте відповідь з 9 цифр після десяткової крапки.

# --hints--

`recursivelyDefinedSequence()` має видати `1.710637717`.

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

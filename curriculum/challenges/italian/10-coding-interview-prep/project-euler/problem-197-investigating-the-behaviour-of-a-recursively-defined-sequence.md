---
id: 5900f4311000cf542c50ff44
title: 'Problema 197: Indagare il comportamento di una sequenza definita ricorsivamente'
challengeType: 1
forumTopicId: 301835
dashedName: problem-197-investigating-the-behaviour-of-a-recursively-defined-sequence
---

# --description--

Data la funzione $f(x) = ⌊{2}^{30. 03243784 - x^2}⌋ × {10}^{-9}$ ( ⌊ ⌋ è la funzione floor), la sequenza $u_n$ è definita da $u_0 = -1$ e $u_{n + 1} = f(u_n)$.

Trova $u_n + u_{n + 1}$ per $n = {10}^{12}$. Dai la tua risposta con 9 cifre dopo il punto decimale.

# --hints--

`recursivelyDefinedSequence()` dovrebbe restituire `1.710637717`.

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

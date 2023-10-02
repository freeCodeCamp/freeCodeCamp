---
id: 5900f4291000cf542c50ff3b
title: 'Problem 188: Die Hyperexponentialisierung einer Zahl'
challengeType: 1
forumTopicId: 301824
dashedName: problem-188-the-hyperexponentiation-of-a-number
---

# --description--

Die Hyperexponentialisierung oder Tetration einer Zahl $a$ durch eine positive Ganzzahl $b$, bezeichnet als $a↑↑b$ oder ${}^ba$, ist rekursiv definiert durch:

$a↑↑1 = a$,

$a↑↑(k+1) = a^{(a↑↑k)}$.

Also haben wir z.B. $3↑↑2 = 3^3 = 27$, daher $3↑↑3 = 3^{27} = 7625597484987$ und $3↑↑4$ ist ungefähr ${10}^{3.6383346400240996 \times {10}^{12}}$. Finde die letzten 8 Ziffern von $1777↑↑1855$.

# --hints--

`hyperexponentation()` sollte `95962097` zurückgeben.

```js
assert.strictEqual(hyperexponentation(), 95962097);
```

# --seed--

## --seed-contents--

```js
function hyperexponentation() {

  return true;
}

hyperexponentation();
```

# --solutions--

```js
// solution required
```

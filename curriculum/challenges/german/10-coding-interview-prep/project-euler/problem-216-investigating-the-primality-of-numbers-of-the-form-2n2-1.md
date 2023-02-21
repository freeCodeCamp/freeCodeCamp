---
id: 5900f4451000cf542c50ff57
title: 'Problem 216: Untersuchung der Primalität der Zahlen der Form 2n2-1'
challengeType: 1
forumTopicId: 301858
dashedName: problem-216-investigating-the-primality-of-numbers-of-the-form-2n2-1
---

# --description--

Betrachte die Zahlen $t(n)$ der Form $t(n) = 2n^2 - 1$ mit $n > 1$.

Die ersten solcher Zahlen sind 7, 17, 31, 49, 71, 97, 127 und 161.

Es stellt sich heraus, dass nur $49 = 7 \times 7$ und $161 = 7 \times 23$ keine Primzahlen sind.

Für $n ≤ 10000$ gibt es 2202 Zahlen $t(n)$, die Primzahlen sind.

Wie viele Primzahlen $t(n)$ gibt es für $n ≤ 50\\,000\\,000$?

# --hints--

`primalityOfNumbers()` sollte `5437849` zurückgeben.

```js
assert.strictEqual(primalityOfNumbers(), 5437849);
```

# --seed--

## --seed-contents--

```js
function primalityOfNumbers() {

  return true;
}

primalityOfNumbers();
```

# --solutions--

```js
// solution required
```

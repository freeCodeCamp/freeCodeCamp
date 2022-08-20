---
id: 5900f49d1000cf542c50ffb0
title: 'Problem 305: posizioni riflessive'
challengeType: 1
forumTopicId: 301959
dashedName: problem-305-reflexive-position
---

# --description--

Sia $S$ la stringa infinita creata concatenando i numeri positivi interi partendo da 1 in base 10.

Quindi, $S = 1234567891011121314151617181920212223242\ldots$

È facile vedere che ogni numero apparirà un numero infinito di volte in $S$.

Sia $f(n)$ la posizione iniziale della $n$-sima occorrenza di $n$ in $S$. Per esempio, $f(1) = 1$, $f(5) = 81$, $f(12) = 271$ e $f(7780) = 111\\,111\\,365$.

Trova $\sum f(3^k) per 1 ≤ k ≤ 13$.

# --hints--

`reflexivePosition()` dovrebbe restituire `18174995535140`.

```js
assert.strictEqual(reflexivePosition(), 18174995535140);
```

# --seed--

## --seed-contents--

```js
function reflexivePosition() {

  return true;
}

reflexivePosition();
```

# --solutions--

```js
// solution required
```

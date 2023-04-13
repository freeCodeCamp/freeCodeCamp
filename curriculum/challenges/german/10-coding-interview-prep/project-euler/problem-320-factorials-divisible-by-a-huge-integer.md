---
id: 5900f4ae1000cf542c50ffbf
title: 'Problem 320: Factorials divisible by a huge integer'
challengeType: 1
forumTopicId: 301977
dashedName: problem-320-factorials-divisible-by-a-huge-integer
---

# --description--

Lasse $N(i)$ die kleinste ganze Zahl $n$ sein, sodass $n!$ durch $(i!)^{1234567890}$ teilbar ist

Lasse $S(u) = \sum N(i)$ für $10 ≤ i ≤ u$ sein.

$S(1000)=614\\,538\\,266\\,565\\,663$.

Finde $S(1\\,000\\,000)\bmod {10}^{18}$.

# --hints--

`divisibleByHugeInteger()` sollte `278157919195482660` zurückgeben.

```js
assert.strictEqual(divisibleByHugeInteger(), 278157919195482660);
```

# --seed--

## --seed-contents--

```js
function divisibleByHugeInteger() {

  return true;
}

divisibleByHugeInteger();
```

# --solutions--

```js
// solution required
```

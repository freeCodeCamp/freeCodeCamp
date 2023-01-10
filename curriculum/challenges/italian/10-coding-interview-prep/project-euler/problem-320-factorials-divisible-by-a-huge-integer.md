---
id: 5900f4ae1000cf542c50ffbf
title: 'Problema 320: Fattoriali divisibili da un numero intero enorme'
challengeType: 1
forumTopicId: 301977
dashedName: problem-320-factorials-divisible-by-a-huge-integer
---

# --description--

Sia $N(i)$ sia il più piccolo numero intero $n$ tale che $n!$ sia divisibile per $(i!)^{1234567890}$

Sia $S(u) = \sum N(i)$ per $10 ≤ i ≤ u$.

$S(1000)=614\\,538\\,266\\,565\\,663$.

Trova $S(1\\,000\\,000)\bmod {10}^{18}$.

# --hints--

`divisibleByHugeInteger()` dovrebbe restituire `278157919195482660`.

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

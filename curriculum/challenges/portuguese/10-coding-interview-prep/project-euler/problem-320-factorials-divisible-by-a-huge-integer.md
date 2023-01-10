---
id: 5900f4ae1000cf542c50ffbf
title: 'Problema 320: Fatoriais divisíveis por um número inteiro muito grande'
challengeType: 1
forumTopicId: 301977
dashedName: problem-320-factorials-divisible-by-a-huge-integer
---

# --description--

Considere $N(i)$ como o menor número inteiro $n$, tal que $n!$ é divisível por $(i!)^{1234567890}$

Considere $S(u) = \sum N(i)$ para $10 ≤ i ≤ u$.

$S(1000)=614.538.266.565.663$.

Encontre $S(1.000.000)\bmod {10}^{18}$.

# --hints--

`divisibleByHugeInteger()` deve retornar `278157919195482660`.

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

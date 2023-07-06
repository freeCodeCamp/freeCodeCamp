---
id: 5900f52c1000cf542c51003f
title: 'Problema 448: Mínimo múltiplo comum médio'
challengeType: 1
forumTopicId: 302120
dashedName: problem-448-average-least-common-multiple
---

# --description--

A função $lcm(a, b)$ denota o mínimo múltiplo comum de $a$ e $b$.

Considere $A(n)$ como a média dos valores de $lcm(n, i)$ para $1 ≤ i ≤ n$.

Por exemplo: $A(2) = \frac{2 + 2}{2} = 2$ e $A(10) = \frac{10 + 10 + 30 + 20 + 10 + 30 + 70 + 40 + 90 + 10}{10} = 32$.

Considere $S(n) = \sum A(k)$ para $1 ≤ k ≤ n$.

$S(100) = 122.726$.

Encontre $S(99.999.999.019)\bmod 999.999.017$.

# --hints--

`averageLCM()` deve retornar `106467648`.

```js
assert.strictEqual(averageLCM(), 106467648);
```

# --seed--

## --seed-contents--

```js
function averageLCM() {

  return true;
}

averageLCM();
```

# --solutions--

```js
// solution required
```

---
id: 5900f5331000cf542c510046
title: 'Problema 455: Potências com algarismos à direita'
challengeType: 1
forumTopicId: 302129
dashedName: problem-455-powers-with-trailing-digits
---

# --description--

Considere $f(n)$ como o maior número inteiro positivo $x$ inferior a ${10}^9$, tal que os últimos 9 algarismos de $n^x$ formam o número $x$ (incluindo zeros à esquerda) ou zero, se nenhum número inteiro desse tipo existir.

Por exemplo:

$$\begin{align}   & f(4) = 411.728.896 (4^{411.728.896} = ...490\underline{411728896}) \\\\
  & f(10) = 0 \\\\   & f(157) = 743.757 (157^{743.757} = ...567\underline{000743757}) \\\\
  & Σf(n), 2 ≤ n ≤ 103 = 442.530.011.399 \end{align}$$

Encontre $\sum f(n)$, $2 ≤ n ≤ {10}^6$.

# --hints--

`powersWithTrailingDigits()` deve retornar `450186511399999`.

```js
assert.strictEqual(powersWithTrailingDigits(), 450186511399999);
```

# --seed--

## --seed-contents--

```js
function powersWithTrailingDigits() {

  return true;
}

powersWithTrailingDigits();
```

# --solutions--

```js
// solution required
```

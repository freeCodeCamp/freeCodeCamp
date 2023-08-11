---
id: 5900f49b1000cf542c50ffae
title: 'Problema 303: Múltiplos com algarismos pequenos'
challengeType: 1
forumTopicId: 301957
dashedName: problem-303-multiples-with-small-digits
---

# --description--

Para um número inteiro positivo $n$, defina $f(n)$ como o menor múltiplo positivo de $n$ que, escrito na base 10, usa apenas algarismos $≤ 2$.

Assim $f(2) = 2$, $f(3) = 12$, $f(7) = 21$, $f(42) = 210$, $f(89) = 1.121.222$.

Além disso, $\displaystyle\sum_{n = 1}^{100} \frac{f(n)}{n} = 11.363.107$.

Encontre $\displaystyle\sum_{n = 1}^{10.000} \frac{f(n)}{n}$.

# --hints--

`multiplesWithSmallDigits()` deve retornar `1111981904675169`.

```js
assert.strictEqual(multiplesWithSmallDigits(), 1111981904675169);
```

# --seed--

## --seed-contents--

```js
function multiplesWithSmallDigits() {

  return true;
}

multiplesWithSmallDigits();
```

# --solutions--

```js
// solution required
```

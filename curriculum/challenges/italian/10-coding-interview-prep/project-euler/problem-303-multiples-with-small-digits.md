---
id: 5900f49b1000cf542c50ffae
title: 'Problema 303: Moltiplicazioni con cifre piccole'
challengeType: 1
forumTopicId: 301957
dashedName: problem-303-multiples-with-small-digits
---

# --description--

Per un numero intero positivo $n$, definisci $f(n)$ come il minore multiplo positivo di $n$ che, scritto in base 10, utilizza solo cifre $≤ 2$.

Così $f(2) = 2$, $f(3) = 12$, $f(7) = 21$, $f(42) = 210$, $f(89) = 1\\,121\\,222$.

Inoltre, $\displaystyle\sum_{n = 1}^{100} \frac{f(n)}{n} = 11\\,363\\,107$.

Trova $\displaystyle\sum_{n = 1}^{10\\,000} \frac{f(n)}{n}$.

# --hints--

`multiplesWithSmallDigits()` dovrebbe restituire `1111981904675169`.

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

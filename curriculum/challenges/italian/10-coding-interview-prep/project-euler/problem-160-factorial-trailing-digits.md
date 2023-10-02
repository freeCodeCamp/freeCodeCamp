---
id: 5900f40d1000cf542c50ff1f
title: 'Problema 160: Cifre finali dei fattoriali'
challengeType: 1
forumTopicId: 301794
dashedName: problem-160-factorial-trailing-digits
---

# --description--

Per ogni $N$, $f(N)$ rappresenti le ultime cinque cifre prima degli zero finali in $N!$.

Ad esempio,

$$\begin{align}   & 9! = 362880 \\; \text{so} \\; f(9) = 36288 \\\\
  & 10! = 3628800 \\; \text{so} \\; f(10) = 36288 \\\\ & 20! = 2432902008176640000 \\; \text{so} \\; f(20) = 17664 \end{align}$$

Trova $f(1,000,000,000,000)$

# --hints--

`factorialTrailingDigits()` dovrebbe restituire `16576`.

```js
assert.strictEqual(factorialTrailingDigits(), 16576);
```

# --seed--

## --seed-contents--

```js
function factorialTrailingDigits() {

  return true;
}

factorialTrailingDigits();
```

# --solutions--

```js
// solution required
```

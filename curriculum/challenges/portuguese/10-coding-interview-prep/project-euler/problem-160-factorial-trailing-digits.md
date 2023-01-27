---
id: 5900f40d1000cf542c50ff1f
title: 'Problema 160: algarismos à direita do fatorial'
challengeType: 1
forumTopicId: 301794
dashedName: problem-160-factorial-trailing-digits
---

# --description--

Para qualquer $N$, considere $f(N)$ como os últimos cinco algarismos antes dos zeros à direita em $N!$.

Por exemplo:

$$\begin{align}   & 9! = 362880 \\; \text{so} \\; f(9) = 36288 \\\\
  & 10! = 3628800 \\; \text{so} \\; f(10) = 36288 \\\\ & 20! = 2432902008176640000 \\; \text{so} \\; f(20) = 17664 \end{align}$$

Encontre $f(1.000.000.000.000)$

# --hints--

`factorialTrailingDigits()` deve retornar `16576`.

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
